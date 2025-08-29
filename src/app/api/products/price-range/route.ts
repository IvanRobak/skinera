import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  if (!db) {
    console.warn('Firebase not initialized, returning default price range');
    return NextResponse.json({ minPrice: 0, maxPrice: 1000 });
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => doc.data());

    const prices = products.map(p => p.price).filter(price => typeof price === 'number');

    if (prices.length === 0) {
      return NextResponse.json({ minPrice: 0, maxPrice: 1000 });
    }

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return NextResponse.json({
      minPrice: Math.floor(min),
      maxPrice: Math.ceil(max),
    });
  } catch (error) {
    console.error('Error fetching price range from Firestore:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
