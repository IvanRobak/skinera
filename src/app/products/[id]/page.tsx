import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllProducts, getProductById, getRelatedProducts } from '@/lib/products';
import StaticProductDetails from '@/components/products/StaticProductDetails';

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProducts();

  return products
    .filter(product => product.id != null && product.id !== undefined)
    .map(product => ({
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
    title: `${product.name?.ua || product.name?.en || 'Product'} - Skinera`,
    description:
      product.content?.description ||
      `${product.name?.ua || product.name?.en || 'Product'} від ${product.brand || 'Unknown'}`,
    openGraph: {
      title: `${product.name?.ua || product.name?.en || 'Product'} - Skinera`,
      description:
        product.content?.description ||
        `${product.name?.ua || product.name?.en || 'Product'} від ${product.brand || 'Unknown'}`,
      images: [
        {
          url: product.image_url,
          width: 400,
          height: 400,
          alt: product.name?.en || product.name?.ua || 'Product image',
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
