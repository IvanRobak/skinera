import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllProducts, getProductById, getRelatedProducts } from '@/lib/products';
import StaticProductDetails from '@/components/products/StaticProductDetails';

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map(product => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Skinera`,
    description: product.description || `${product.name} від ${product.brand}`,
    openGraph: {
      title: `${product.name} - Skinera`,
      description: product.description || `${product.name} від ${product.brand}`,
      images: [
        {
          url: product.image_url,
          width: 400,
          height: 400,
          alt: product.name.en,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  // Fetch related products
  const relatedProducts = await getRelatedProducts(product.id, product.brand, product.category, 4);

  return <StaticProductDetails product={product} relatedProducts={relatedProducts} />;
}
