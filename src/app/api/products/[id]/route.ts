import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  // For local development, try to use Firebase if available
  if (!db) {
    console.warn('Firebase not initialized, returning product not found');
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Try to get by document ID first
    let productDoc = await getDoc(doc(db, 'products', id));

    // If not found, try to query by numeric field `id`
    if (!productDoc.exists()) {
      const numericId = parseInt(id);
      if (!isNaN(numericId)) {
        const q = query(collection(db, 'products'), where('id', '==', numericId));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          productDoc = snapshot.docs[0];
        }
      }
    }

    if (!productDoc.exists()) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const data = productDoc.data();
    return NextResponse.json({ ...data, id: data.id ?? productDoc.id });
  } catch (error) {
    console.error('Error fetching product from Firestore:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
