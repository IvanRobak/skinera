import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Інтерфейс для продукту
interface Product {
  id: string;
  name: {
    ua: string;
    en: string;
  };
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
  characteristics?: {
    [key: string]: string | number | boolean;
  };
  volume?: number;
  content?: {
    description?: {
      ua?: string;
      en?: string;
    };
    usage?: {
      ua?: string;
      en?: string;
    };
    activeComponents?: {
      ua?: string;
      en?: string;
    };
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get('sort');
  const search = searchParams.get('search') || '';
  const brand = searchParams.get('brand') || '';
  const categories = searchParams.getAll('category');
  const country = searchParams.get('country') || '';
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : 0;
  const maxPrice = searchParams.get('maxPrice')
    ? parseFloat(searchParams.get('maxPrice')!)
    : Infinity;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  try {
    console.log('🔍 Fetching products from Firebase...');
    console.log('Search:', search);
    console.log('Categories:', categories);

    // Get all products from Firestore
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);

    if (snapshot.empty) {
      console.log('📭 No products found in Firebase');
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

    // Convert Firestore documents to Product objects
    let products: Product[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      products.push({
        id: doc.id,
        ...data,
      } as Product);
    });

    console.log(`📦 Found ${products.length} products in Firebase`);

    // Apply client-side filtering (since Firestore has limited query capabilities)
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
      products = products.filter(product => categories.includes(product.category));
    }

    if (country) {
      products = products.filter(product => product.country === country);
    }

    if (minPrice > 0 || maxPrice < Infinity) {
      products = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    // Apply sorting
    if (sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
      products.sort((a, b) => a.name?.ua?.localeCompare(b.name?.ua || '') || 0);
    } else if (sort === 'country') {
      products.sort((a, b) => a.country?.localeCompare(b.country || '') || 0);
    }

    const total = products.length;

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    console.log(`✅ Returning ${paginatedProducts.length} products (page ${page})`);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('❌ Error fetching products from Firebase:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch products from Firebase',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
