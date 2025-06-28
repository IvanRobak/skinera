# Vercel Deployment Guide

## Environment Variables Required

Add these environment variables in your Vercel project settings:

### Required Variables

1. **MONGODB_URI**

   ```
   mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   ```

   - Your MongoDB connection string
   - Get this from MongoDB Atlas or your MongoDB provider

2. **NEXTAUTH_SECRET**

   ```
   your-nextauth-secret-key-here
   ```

   - Generate a random secret key for NextAuth
   - You can generate one using: `openssl rand -base64 32`

3. **NEXTAUTH_URL**
   ```
   https://your-domain.vercel.app
   ```
   - Your production domain URL
   - Update this after deployment with your actual Vercel URL

## Deployment Steps

1. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Import your project

2. **Configure Environment Variables**

   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add all the required variables listed above

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Your first deployment will happen immediately after setup

## Build Configuration

The project is already configured with:

- ✅ Next.js 15 with App Router
- ✅ Standalone output mode for optimal performance
- ✅ MongoDB integration
- ✅ NextAuth authentication
- ✅ Security headers
- ✅ Image optimization
- ✅ Bundle optimization

## Post-Deployment Checklist

- [ ] Update NEXTAUTH_URL with your actual Vercel domain
- [ ] Test authentication flows
- [ ] Verify database connections
- [ ] Check all API endpoints
- [ ] Test product pages and cart functionality
- [ ] Verify image loading from external sources

## Troubleshooting

If you encounter issues:

1. Check Vercel function logs for API errors
2. Verify MongoDB connection string is correct
3. Ensure all environment variables are set
4. Check that your MongoDB database allows connections from Vercel IPs

## Performance Notes

The project is configured for optimal performance with:

- Standalone output for faster cold starts
- Image optimization with WebP/AVIF support
- Bundle splitting for better caching
- Security headers for better SEO and security scores
