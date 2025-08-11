import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, 'products'));

    const categories = new Set<string>();
    const brands = new Set<string>();
    const countries = new Set<string>();

    snapshot.forEach(doc => {
      const data = doc.data() as { category?: string; brand?: string; country?: string };
      if (data.category) categories.add(data.category);
      if (data.brand) brands.add(data.brand);
      if (data.country) countries.add(data.country);
    });

    return NextResponse.json({
      categories: Array.from(categories).sort(),
      brands: Array.from(brands).sort(),
      countries: Array.from(countries).sort(),
    });
  } catch (error) {
    console.error('Error getting filters from Firestore:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
