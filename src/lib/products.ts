import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit as firestoreLimit,
  Query,
} from 'firebase/firestore';

export interface Product {
  id: number;
  name: {
    ua: string;
    en: string;
  };
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
  characteristics: {
    cosmetic_classification?: string;
    skin_type?: string;
    purpose_and_result?: string;
    cleanser_type?: string;
    skin_problem?: string;
    age?: string;
    hypoallergenic?: string;
    volume?: string;
  };
  volume?: number;
  content: {
    description: string;
    usage: string;
    activeComponents: string;
    descriptionEn?: string;
    usageEn?: string;
    activeComponentsEn?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export async function getAllProducts(): Promise<Product[]> {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    console.log('🚫 Skipping getAllProducts during Vercel build');
    return [];
  }

  if (!db) {
    console.warn('Firebase not initialized');
    return [];
  }

  try {
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);

    const products: Product[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();

      // Ensure the product has a valid id field
      if (data.id != null && data.id !== undefined) {
        products.push({
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        } as Product);
      } else {
        console.warn(`Product document ${doc.id} is missing id field:`, data);
      }
    });

    return products;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    console.log('🚫 Skipping getProductById during Vercel build');
    return null;
  }

  if (!db) {
    console.warn('Firebase not initialized');
    return null;
  }

  try {
    // Try to get by document ID first (string ID)
    const docRef = doc(db, 'products', id);
    let docSnap = await getDoc(docRef);

    // If not found by document ID, try to find by numeric ID field
    if (!docSnap.exists()) {
      const numericId = parseInt(id);
      if (!isNaN(numericId)) {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('id', '==', numericId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          docSnap = querySnapshot.docs[0];
        }
      }
    }

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    } as Product;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
}

export async function getRelatedProducts(
  productId: number,
  brand: string,
  category: string,
  limit: number = 4
): Promise<Product[]> {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    console.log('🚫 Skipping getRelatedProducts during Vercel build');
    return [];
  }

  if (!db) {
    console.warn('Firebase not initialized');
    return [];
  }

  try {
    const productsCollection = collection(db, 'products');

    // First try to get products with same brand
    // Avoid using '!=' filter to prevent composite index requirement
    const brandQuery = query(
      productsCollection,
      where('brand', '==', brand),
      firestoreLimit(limit * 3)
    );

    const snapshot = await getDocs(brandQuery);
    const products: Product[] = [];

    snapshot.forEach(doc => {
      const data = doc.data();

      // Ensure the product has a valid id field
      if (data.id != null && data.id !== undefined) {
        products.push({
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        } as Product);
      } else {
        console.warn(`Related product document ${doc.id} is missing id field:`, data);
      }
    });

    // Remove the current product if it was included
    const filteredByBrand = products.filter(p => p.id !== productId);

    // If we need more products, get from same category
    if (filteredByBrand.length < limit) {
      const remainingLimit = limit - filteredByBrand.length;
      const categoryQuery = query(
        productsCollection,
        where('category', '==', category),
        firestoreLimit(Math.max(remainingLimit * 3, remainingLimit))
      );

      const categorySnapshot = await getDocs(categoryQuery);
      categorySnapshot.forEach(doc => {
        const data = doc.data();

        // Ensure the product has a valid id field and avoid duplicates
        if (
          data.id != null &&
          data.id !== undefined &&
          !filteredByBrand.some(p => p.id === data.id) &&
          data.id !== productId
        ) {
          filteredByBrand.push({
            ...data,
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate(),
          } as Product);
        } else if (data.id == null || data.id === undefined) {
          console.warn(`Category product document ${doc.id} is missing id field:`, data);
        }
      });
    }

    return filteredByBrand.slice(0, limit);
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

// New function for advanced product filtering and search
export async function getProductsWithFilters(options: {
  search?: string;
  brand?: string;
  categories?: string[];
  country?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'country';
  page?: number;
  limit?: number;
}): Promise<{ products: Product[]; total: number }> {
  // Skip Firebase operations during build time
  if (process.env.VERCEL_BUILD) {
    console.log('🚫 Skipping getProductsWithFilters during Vercel build');
    return { products: [], total: 0 };
  }

  if (!db) {
    console.warn('Firebase not initialized');
    return { products: [], total: 0 };
  }

  try {
    const {
      search,
      brand,
      categories,
      country,
      minPrice,
      maxPrice,
      sortBy = 'name',
      page = 1,
      limit = 12,
    } = options;

    const productsCollection = collection(db, 'products');
    let q: Query = productsCollection;

    // Apply filters
    const constraints = [];

    if (brand) {
      constraints.push(where('brand', '==', brand));
    }

    if (categories && categories.length > 0) {
      if (categories.length === 1) {
        constraints.push(where('category', '==', categories[0]));
      } else {
        constraints.push(where('category', 'in', categories));
      }
    }

    if (country) {
      constraints.push(where('country', '==', country));
    }

    if (minPrice !== undefined) {
      constraints.push(where('price', '>=', minPrice));
    }

    if (maxPrice !== undefined) {
      constraints.push(where('price', '<=', maxPrice));
    }

    // Apply sorting
    if (sortBy === 'price-asc') {
      constraints.push(orderBy('price', 'asc'));
    } else if (sortBy === 'price-desc') {
      constraints.push(orderBy('price', 'desc'));
    } else if (sortBy === 'name') {
      constraints.push(orderBy('name.ua', 'asc'));
    } else if (sortBy === 'country') {
      constraints.push(orderBy('country', 'asc'));
    }

    if (constraints.length > 0) {
      q = query(productsCollection, ...constraints);
    }

    const snapshot = await getDocs(q);
    let allProducts: Product[] = [];

    snapshot.forEach(doc => {
      const data = doc.data();

      // Ensure the product has a valid id field
      if (data.id != null && data.id !== undefined) {
        allProducts.push({
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        } as Product);
      } else {
        console.warn(`Filtered product document ${doc.id} is missing id field:`, data);
      }
    });

    // Apply text search if provided (client-side filtering)
    if (search) {
      const searchLower = search.toLowerCase();
      allProducts = allProducts.filter(
        product =>
          product.name.ua.toLowerCase().includes(searchLower) ||
          product.name.en.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower)
      );
    }

    const total = allProducts.length;

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const products = allProducts.slice(startIndex, endIndex);

    return { products, total };
  } catch (error) {
    console.error('Error fetching products with filters:', error);
    return { products: [], total: 0 };
  }
}
