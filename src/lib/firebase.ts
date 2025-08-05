import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);

// Helper function to upload image to Firebase Storage
export async function uploadImageToFirebase(
  imageBuffer: Buffer,
  fileName: string,
  folder: string = 'products'
): Promise<string> {
  try {
    // Create a reference to the file in Firebase Storage
    const storageRef = ref(storage, `${folder}/${fileName}`);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, imageBuffer);

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw error;
  }
}
