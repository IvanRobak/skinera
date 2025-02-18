import ProductCard from './ProductCard';
import creamImg from '../../assets/images/face-care.png';

const products = [
  { id: 1, name: 'Крем для обличчя', price: 250, image: creamImg },
  { id: 2, name: 'Лосьйон для тіла', price: 300, image: creamImg },
  { id: 3, name: 'Маска для шкіри', price: 180, image: creamImg },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
