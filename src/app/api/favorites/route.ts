import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function GET(request: NextRequest) {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  if (!adminDb) {
    return NextResponse.json({ error: 'Database not initialized' }, { status: 503 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const favoritesRef = adminDb.collection('favorites').doc(userId);
    const favoritesDoc = await favoritesRef.get();

    if (!favoritesDoc.exists) {
      return NextResponse.json({ favorites: [] });
    }

    const data = favoritesDoc.data();
    return NextResponse.json({ favorites: data?.favorites || [] });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  if (!adminDb) {
    return NextResponse.json({ error: 'Database not initialized' }, { status: 503 });
  }

  try {
    const { userId, productId, action } = await request.json();

    if (!userId || !productId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const favoritesRef = adminDb.collection('favorites').doc(userId);
    const favoritesDoc = await favoritesRef.get();

    let favorites = [];
    if (favoritesDoc.exists) {
      favorites = favoritesDoc.data()?.favorites || [];
    }

    if (action === 'add' && !favorites.includes(productId)) {
      favorites.push(productId);
    } else if (action === 'remove') {
      favorites = favorites.filter((id: string) => id !== productId);
    }

    await favoritesRef.set({ favorites, updatedAt: new Date() });

    return NextResponse.json({ favorites });
  } catch (error) {
    console.error('Error updating favorites:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
