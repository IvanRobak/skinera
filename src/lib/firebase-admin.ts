import { initializeApp, getApps, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import path from 'path';
import fs from 'fs';

// Load service account - prefer environment variable, fallback to file
let serviceAccount = null;

try {
  // First, try to load from environment variable (for production/Vercel)
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    // Fix private key formatting - replace \n with actual newlines
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
    console.log('✅ Firebase Service Account loaded from environment variable');
  } else {
    // Fallback to local file (for development)
    const serviceAccountPath = path.join(
      process.cwd(),
      'config',
      'steadfast-task-426507-q5-firebase-adminsdk-fbsvc-d425405892.json'
    );

    if (fs.existsSync(serviceAccountPath)) {
      const serviceAccountFile = fs.readFileSync(serviceAccountPath, 'utf8');
      serviceAccount = JSON.parse(serviceAccountFile);
      console.log('✅ Firebase Service Account loaded from local file');
    } else {
      console.log('⚠️  No service account found, using Application Default Credentials');
    }
  }
} catch (error) {
  console.error('❌ Error loading service account:', error);
  console.log('⚠️  Falling back to Application Default Credentials');
}

if (!getApps().length) {
  try {
    if (serviceAccount) {
      initializeApp({
        credential: cert(serviceAccount),
        projectId: serviceAccount.project_id,
      });
      console.log('✅ Firebase Admin initialized with service account');
    } else {
      if (!process.env.FIREBASE_PROJECT_ID) {
        throw new Error(
          'FIREBASE_PROJECT_ID is required when using Application Default Credentials'
        );
      }
      initializeApp({
        credential: applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
      console.log('✅ Firebase Admin initialized with Application Default Credentials');
    }
  } catch (error) {
    console.error('💥 Failed to initialize Firebase Admin:', error);
    throw error;
  }
}

export const adminDb = getFirestore();
