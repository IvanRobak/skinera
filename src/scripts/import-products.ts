import { MongoClient } from 'mongodb';
import fs from 'fs';

async function importProducts() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is missing');

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const products = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

    await db.collection('products').insertMany(products);
    console.log('Products imported successfully!');
  } catch (error) {
    console.error('Error importing products:', error);
  } finally {
    await client.close();
  }
}

importProducts().catch(console.error);
