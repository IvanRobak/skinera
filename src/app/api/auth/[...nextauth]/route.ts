import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { adminDb } from '@/lib/firebase-admin';
import { compare } from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        try {
          console.log('🔐 Attempting authentication for:', credentials.email);

          // Test Firebase connection
          if (!adminDb) {
            console.error('❌ Firebase Admin DB not initialized');
            throw new Error('Database connection failed');
          }

          // Get user from Firestore
          const usersRef = adminDb.collection('users');
          console.log('📊 Querying Firestore for user...');

          const userQuery = await usersRef.where('email', '==', credentials.email).get();

          if (userQuery.empty) {
            console.log('❌ No user found with email:', credentials.email);
            throw new Error('No user found');
          }

          const user = userQuery.docs[0].data();
          console.log('✅ User found, verifying password...');

          // Verify password hash
          const isValid = await compare(credentials.password, user.password);

          if (!isValid) {
            console.log('❌ Invalid password for user:', credentials.email);
            throw new Error('Invalid password');
          }

          console.log('✅ Authentication successful for:', credentials.email);
          return {
            id: user.uid,
            name: user.name,
            surname: user.surname,
            email: user.email,
          };
        } catch (error) {
          console.error('💥 Auth error:', error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST };
