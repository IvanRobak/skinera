import { initializeApp, getApps, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Prefer explicit service account from env; fallback to ADC
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : null;

if (!getApps().length) {
  initializeApp(
    serviceAccount
      ? {
          credential: cert(serviceAccount),
          projectId: serviceAccount.project_id,
        }
      : {
          credential: applicationDefault(),
          projectId: process.env.FIREBASE_PROJECT_ID,
        }
  );
}

export const adminDb = getFirestore();
