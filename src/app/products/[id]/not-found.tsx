import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">😔</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Продукт не знайдено</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          На жаль, продукт, який ви шукаете, не існує або був видалений з нашого каталогу.
        </p>
        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Переглянути всі товари
          </Link>
          <br />
          <Link
            href="/"
            className="inline-block text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Повернутися на головну
          </Link>
        </div>
      </div>
    </div>
  );
}
