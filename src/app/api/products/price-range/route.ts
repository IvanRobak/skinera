import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, 'products'));

    if (snapshot.empty) {
      return NextResponse.json({ minPrice: 0, maxPrice: 1000 });
    }

    const prices: number[] = [];
    snapshot.forEach(doc => {
      const data = doc.data() as { price?: number };
      if (typeof data.price === 'number') prices.push(data.price);
    });

    if (prices.length === 0) {
      return NextResponse.json({ minPrice: 0, maxPrice: 1000 });
    }

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return NextResponse.json({
      minPrice: Math.floor(minPrice),
      maxPrice: Math.ceil(maxPrice),
    });
  } catch (error) {
    console.error('Error getting price range from Firestore:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
