import { adminDb } from '@/lib/firebase-admin';
import { db } from '@/lib/firebase';
import { collection, getDocs, limit, query } from 'firebase/firestore';

async function testWithAdmin() {
  if (!adminDb) {
    throw new Error('Admin DB not initialized');
  }
  const snapshot = await adminDb.collection('products').limit(1).get();
  return snapshot.size;
}

async function testWithClient() {
  if (!db) {
    throw new Error('Client DB not initialized');
  }
  const q = query(collection(db, 'products'), limit(1));
  const snap = await getDocs(q);
  return snap.size;
}

async function main() {
  // Skip during Vercel build
  if (process.env.VERCEL_BUILD) {
    console.log('🚫 Skipping Firestore connection test during Vercel build');
    process.exit(0);
  }

  console.log('Testing Firestore connection...');
  try {
    const size = await testWithAdmin();
    console.log(`[admin] Connected. Documents found: ${size}`);
    process.exit(0);
  } catch (err) {
    console.warn('[admin] Failed, trying client SDK...', err instanceof Error ? err.message : err);
    try {
      const size = await testWithClient();
      console.log(`[client] Connected. Documents found: ${size}`);
      process.exit(0);
    } catch (err2) {
      console.error('Firestore test failed with both admin and client SDKs:', err2);
      process.exit(1);
    }
  }
}

main();
