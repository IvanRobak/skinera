import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { MongoClient } from 'mongodb';

export async function POST(req: Request) {
  try {
    const { surname, email, password, name } = await req.json();
    // Validate input
    if (!surname || !email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI || '');
    await client.connect();
    const db = client.db();

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      await client.close();
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }
    console.log("Hashing pass")
    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const result = await db.collection('users').insertOne({
      surname,
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
    });

    await client.close();

    return NextResponse.json(
      {
        message: 'User created successfully',
        userId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
