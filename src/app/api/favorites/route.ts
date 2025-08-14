import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { adminDb } from '@/lib/firebase-admin';

// Helper function to ensure user document exists
async function ensureUserDocument(userEmail: string) {
  const userDocRef = adminDb.collection('users').doc(userEmail);
  const userDoc = await userDocRef.get();

  if (!userDoc.exists) {
    // Create user document if it doesn't exist
    await userDocRef.set({
      email: userEmail,
      createdAt: new Date().toISOString(),
    });
  }

  return userDocRef;
}

// GET - отримати улюблені товари користувача
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Переконуємося, що документ користувача існує
    const userDocRef = await ensureUserDocument(session.user.email);
    const favoritesRef = userDocRef.collection('favorites');
    const favoritesSnapshot = await favoritesRef.get();

    const favorites = favoritesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ favorites });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST - додати товар до улюблених
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { product } = await request.json();

    if (!product || !product.id) {
      return NextResponse.json({ error: 'Product data is required' }, { status: 400 });
    }

    // Переконуємося, що документ користувача існує
    const userDocRef = await ensureUserDocument(session.user.email);
    const favoritesRef = userDocRef.collection('favorites');
    const productDocRef = favoritesRef.doc(product.id.toString());

    // Перевіряємо, чи товар уже в улюблених
    const existingFavorite = await productDocRef.get();

    if (existingFavorite.exists) {
      return NextResponse.json({ message: 'Product already in favorites' }, { status: 200 });
    }

    // Додаємо товар до улюблених
    const favoriteData = {
      productId: product.id,
      product: product,
      createdAt: new Date().toISOString(),
    };

    await productDocRef.set(favoriteData);

    return NextResponse.json({
      message: 'Product added to favorites',
      favoriteId: product.id.toString(),
    });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE - видалити товар з улюблених
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Переконуємося, що документ користувача існує
    const userDocRef = await ensureUserDocument(session.user.email);
    const favoritesRef = userDocRef.collection('favorites');
    const productDocRef = favoritesRef.doc(productId);

    // Перевіряємо, чи існує товар в улюблених
    const favoriteDoc = await productDocRef.get();

    if (!favoriteDoc.exists) {
      return NextResponse.json({ error: 'Favorite not found' }, { status: 404 });
    }

    // Видаляємо товар з улюблених
    await productDocRef.delete();

    return NextResponse.json({ message: 'Product removed from favorites' });
  } catch (error) {
    console.error('Error removing from favorites:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
