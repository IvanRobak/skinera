import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Отримуємо мінімальну та максимальну ціну
    const minPriceResult = await db
      .collection('products')
      .find({})
      .sort({ price: 1 })
      .limit(1)
      .toArray();
    const maxPriceResult = await db
      .collection('products')
      .find({})
      .sort({ price: -1 })
      .limit(1)
      .toArray();

    const minPrice = minPriceResult.length > 0 ? minPriceResult[0].price : 0;
    const maxPrice = maxPriceResult.length > 0 ? maxPriceResult[0].price : 1000;

    return NextResponse.json({
      minPrice: Math.floor(minPrice),
      maxPrice: Math.ceil(maxPrice),
    });
  } catch (error) {
    console.error('Помилка отримання діапазону цін:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
