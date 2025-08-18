import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  if (!db) {
    return NextResponse.json({ error: 'Database not initialized' }, { status: 503 });
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => doc.data());

    // Extract unique values for filters
    const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];
    const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
    const countries = [...new Set(products.map(p => p.country).filter(Boolean))];

    return NextResponse.json({
      brands,
      categories,
      countries,
    });
  } catch (error) {
    console.error('Error fetching filters from Firestore:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
