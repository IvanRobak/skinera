interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">Ціна: {product.price} грн</p>
      <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded">Детальніше</button>
    </div>
  );
};

export default ProductCard;
