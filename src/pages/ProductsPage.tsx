import ProductList from '../features/products/ProductList';

const ProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Наші Товари</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
