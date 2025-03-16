import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const numericId = parseInt(id);
    const query = !isNaN(numericId) ? { id: numericId } : { _id: new ObjectId(id) };

    const product = await db.collection('products').findOne(query);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof Error && error.message.includes('ObjectId')) {
      return NextResponse.json({ error: 'Invalid product ID format' }, { status: 400 });
    }
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
