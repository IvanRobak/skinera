import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Інтерфейс для запиту
interface ProductQuery {
  name?: { $regex: string; $options: string };
  brand?: string;
  category?: string;
  country?: string;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get('sort');
  const search = searchParams.get('search');
  const brand = searchParams.get('brand');
  const category = searchParams.get('category');
  const country = searchParams.get('country');

  try {
    const client = await clientPromise;
    const db = client.db();
    const query: ProductQuery = {};

    if (search) query['name'] = { $regex: search, $options: 'i' };
    if (brand) query['brand'] = brand;
    if (category) query['category'] = category;
    if (country) query['country'] = country;

    let sortOption: Record<string, 1 | -1> = {};
    if (sort === 'price-asc') sortOption = { price: 1 };
    else if (sort === 'price-desc') sortOption = { price: -1 };
    else if (sort === 'name') sortOption = { name: 1 };
    else if (sort === 'country') sortOption = { country: 1 };

    const products = await db.collection('products').find(query).sort(sortOption).toArray();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
