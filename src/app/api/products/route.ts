import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Інтерфейс для запиту
interface ProductQuery {
  name?: { $regex: string; $options: string };
  brand?: string;
  category?: string;
  country?: string;
  price?: { $gte?: number; $lte?: number };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get('sort');
  const search = searchParams.get('search');
  const brand = searchParams.get('brand');
  const category = searchParams.get('category');
  const country = searchParams.get('country');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  try {
    const client = await clientPromise;
    const db = client.db();
    // eslint-disable-next-line prefer-const
    let query: ProductQuery = {};

    if (search) query['name'] = { $regex: search, $options: 'i' };
    if (brand) query['brand'] = brand;
    if (category) query['category'] = category;
    if (country) query['country'] = country;

    // Фільтрація по ціні
    if (minPrice || maxPrice) {
      query['price'] = {};
      if (minPrice) query['price'].$gte = parseFloat(minPrice);
      if (maxPrice) query['price'].$lte = parseFloat(maxPrice);
    }

    let sortOption: Record<string, 1 | -1> = {};
    if (sort === 'price-asc') sortOption = { price: 1 };
    else if (sort === 'price-desc') sortOption = { price: -1 };
    else if (sort === 'name') sortOption = { name: 1 };
    else if (sort === 'country') sortOption = { country: 1 };

    // Get total count for pagination
    const totalCount = await db.collection('products').countDocuments(query);

    // Get paginated results
    const products = await db
      .collection('products')
      .find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      products,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
