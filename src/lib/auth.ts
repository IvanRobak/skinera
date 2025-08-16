import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { adminDb } from '@/lib/firebase-admin';
import { compare } from 'bcryptjs';

// Extend NextAuth types
declare module 'next-auth' {
  interface User {
    surname?: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      surname?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    surname?: string;
  }
}

export const authOptions: NextAuthOptions = {
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

          // Get user from Firestore using email as document ID
          const userDocRef = adminDb.collection('users').doc(credentials.email);
          console.log('📊 Getting user document from Firestore...');

          const userDoc = await userDocRef.get();

          if (!userDoc.exists) {
            console.log('❌ No user found with email:', credentials.email);
            throw new Error('No user found');
          }

          const user = userDoc.data();
          console.log('✅ User found, verifying password...');

          if (!user) {
            throw new Error('User data not found');
          }

          // Verify password hash
          const isValid = await compare(credentials.password, user.password);

          if (!isValid) {
            console.log('❌ Invalid password for user:', credentials.email);
            throw new Error('Invalid password');
          }

          console.log('✅ Authentication successful for:', credentials.email);
          return {
            id: user.email,
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
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Якщо це новий логін, зберігаємо дані користувача в токені
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.surname = user.surname;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Передаємо дані з токена в сесію
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.surname = token.surname;
        session.user.email = token.email;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
