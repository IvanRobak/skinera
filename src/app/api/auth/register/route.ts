import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(req: Request) {
  try {
    console.log('🚀 Starting user registration...');

    const { surname, email, password, name } = await req.json();
    console.log('📝 Registration data received:', {
      email,
      name,
      surname: surname || 'Not provided',
      hasPassword: !!password,
    });

    // Validate input
    if (!email || !password || !name) {
      console.log('❌ Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate password length
    if (password.length < 6) {
      console.log('❌ Password too weak');
      return NextResponse.json(
        { error: 'Пароль занадто слабкий. Мінімум 6 символів' },
        { status: 400 }
      );
    }

    console.log('🔍 Checking if user already exists...');

    // Check if user already exists in Firestore
    const usersRef = adminDb.collection('users');
    const existingUser = await usersRef.where('email', '==', email).get();

    if (!existingUser.empty) {
      console.log('❌ User already exists:', email);
      return NextResponse.json(
        { error: 'Користувач з таким email вже існує вибіріть інший електронний адрес' },
        { status: 400 }
      );
    }

    console.log('🔐 Hashing password...');

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Generate unique UID
    const uid = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('🆔 Generated UID:', uid);

    // Store user data in Firestore
    const userData = {
      uid,
      surname: surname || null,
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
    };

    console.log('💾 Saving user to Firestore...');
    await usersRef.doc(uid).set(userData);

    console.log('✅ User registered successfully:', email);

    return NextResponse.json(
      {
        message: 'User created successfully',
        userId: uid,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('💥 Registration error:', error);

    // Check if it's a Firebase error
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'permission-denied'
    ) {
      console.error('❌ Firebase permission denied');
      return NextResponse.json(
        { error: 'Database permission denied. Please check Firebase rules.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
