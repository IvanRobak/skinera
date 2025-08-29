import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Product {
  id: string;
  name?: {
    ua?: string;
    en?: string;
  };
  price?: number;
  image_url?: string;
  category?: string;
  brand?: string;
  country?: string;
  [key: string]: unknown;
}

export async function GET(request: Request) {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
  }

  // Parse query parameters
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const search = searchParams.get('search') || '';
  const brand = searchParams.get('brand') || '';
  const categories = searchParams.getAll('category');
  const country = searchParams.get('country') || '';
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : 0;
  const maxPrice = searchParams.get('maxPrice')
    ? parseFloat(searchParams.get('maxPrice')!)
    : Infinity;
  const sort = searchParams.get('sort') || '';

  // For local development, try to use Firebase if available
  if (!db) {
    console.warn('Firebase not initialized, returning empty products with pagination');
    return NextResponse.json({
      products: [],
      pagination: {
        total: 0,
        page,
        limit,
        totalPages: 0,
      },
    });
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    let products: Product[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Apply client-side filtering
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(
        product =>
          product.name?.ua?.toLowerCase().includes(searchLower) ||
          product.name?.en?.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower)
      );
    }

    if (brand) {
      products = products.filter(product => product.brand === brand);
    }

    if (categories.length > 0) {
      products = products.filter(product => categories.includes(product.category || ''));
    }

    if (country) {
      products = products.filter(product => product.country === country);
    }

    if (minPrice > 0 || maxPrice < Infinity) {
      products = products.filter(
        product => (product.price || 0) >= minPrice && (product.price || 0) <= maxPrice
      );
    }

    // Apply sorting
    if (sort === 'price-asc') {
      products.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === 'price-desc') {
      products.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sort === 'name') {
      products.sort((a, b) => (a.name?.ua || '').localeCompare(b.name?.ua || ''));
    } else if (sort === 'country') {
      products.sort((a, b) => (a.country || '').localeCompare(b.country || ''));
    }

    const total = products.length;
    const totalPages = Math.ceil(total / limit);

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        total,
        page,
        limit,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching products from Firestore:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
