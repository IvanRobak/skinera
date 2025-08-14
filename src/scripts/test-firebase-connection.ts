import { adminDb } from '../lib/firebase-admin';

async function testFirebaseConnection() {
  try {
    console.log('🧪 Testing Firebase connection...');

    // Check if adminDb is initialized
    if (!adminDb) {
      console.error('❌ adminDb is not initialized');
      return;
    }

    console.log('✅ adminDb is initialized');

    // Test a simple Firestore operation
    const testRef = adminDb.collection('test');
    const snapshot = await testRef.limit(1).get();

    console.log('✅ Firestore query successful');
    console.log('📊 Collection size:', snapshot.size);

    console.log('🎉 Firebase connection test passed!');
  } catch (error) {
    console.error('💥 Firebase connection test failed:', error);

    // Check environment variables
    console.log('\n🔍 Environment variables check:');
    console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Not set');
    console.log(
      'FIREBASE_SERVICE_ACCOUNT:',
      process.env.FIREBASE_SERVICE_ACCOUNT ? '✅ Set' : '❌ Not set'
    );

    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      try {
        const parsed = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        console.log('✅ FIREBASE_SERVICE_ACCOUNT is valid JSON');
        console.log('Project ID from service account:', parsed.project_id);
      } catch (parseError) {
        console.error('❌ FIREBASE_SERVICE_ACCOUNT is not valid JSON:', parseError);
      }
    }
  }
}

// Run test
if (require.main === module) {
  testFirebaseConnection();
}

export { testFirebaseConnection };
