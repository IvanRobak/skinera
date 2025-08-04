import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Получаем все уникальные категории
    const categories = await db.collection('products').distinct('category');

    // Получаем все уникальные бренды
    const brands = await db.collection('products').distinct('brand');

    // Получаем все уникальные страны
    const countries = await db.collection('products').distinct('country');

    return NextResponse.json({
      categories: categories.filter(Boolean), // Убираем null/undefined значения
      brands: brands.filter(Boolean),
      countries: countries.filter(Boolean),
    });
  } catch (error) {
    console.error('Ошибка получения фильтров:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
