import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export interface Product {
  id: number;
  name: {
    en: string;
    ua: string;
  };
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
  characteristics: {
    cosmetic_classification: string;
    skin_type: string;
    purpose_and_result: string;
    volume: string;
    cleanser_type: string;
    skin_problem: string;
    age: string;
    hypoallergenic: string;
  };
  description: string;
  instructions: string;
  ingredients: string;
  availability: string;
  delivery: string;
  capacity: number;
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const client = await clientPromise;
    const db = client.db();

    const products = await db.collection('products').find({}).toArray();

    return products.map(product => ({
      ...product,
      _id: product._id.toString(),
    })) as unknown as Product[];
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const client = await clientPromise;
    const db = client.db();

    const numericId = parseInt(id);
    const query = !isNaN(numericId) ? { id: numericId } : { _id: new ObjectId(id) };

    const product = await db.collection('products').findOne(query);

    if (!product) {
      return null;
    }

    return {
      ...product,
      _id: product._id.toString(),
    } as unknown as Product;
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
  try {
    const client = await clientPromise;
    const db = client.db();

    const relatedProducts = await db
      .collection('products')
      .find({
        id: { $ne: productId },
        $or: [{ brand: brand }, { category: category }],
      })
      .limit(limit)
      .toArray();

    return relatedProducts.map(product => ({
      ...product,
      _id: product._id.toString(),
    })) as unknown as Product[];
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}
