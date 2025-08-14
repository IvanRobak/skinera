import { getAllProducts } from '@/lib/products';

async function checkStaticGeneration() {
  console.log('🔍 Checking static generation setup...\n');

  try {
    // Test database connection and product fetching
    console.log('📦 Fetching all products...');
    const products = await getAllProducts();

    if (products.length === 0) {
      console.log('⚠️  No products found in database.');
      console.log('   Make sure your database is properly seeded.');
      return;
    }

    console.log(`✅ Found ${products.length} products in database`);

    // Show sample of products that will be statically generated
    console.log('\n📋 Sample products for static generation:');
    products.slice(0, 5).forEach((product, index) => {
      console.log(`   ${index + 1}. ID: ${product.id} - ${product.name}`);
    });

    if (products.length > 5) {
      console.log(`   ... and ${products.length - 5} more products`);
    }

    console.log('\n🚀 Static generation is ready!');
    console.log('\nNext steps:');
    console.log('1. Run `npm run build` to generate static pages');
    console.log('2. Static pages will be available at /products/[id]');
    console.log('3. Each product page will be pre-rendered at build time');
  } catch (error) {
    console.error('❌ Error checking static generation setup:', error);
    console.log('\nPossible issues:');
    console.log('- Database connection failed');
    console.log('- Environment variables not set');
  }
}

// Run the check
checkStaticGeneration();
