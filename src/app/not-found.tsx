import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Сторінку не знайдено</h1>
        <p className="text-gray-600 mb-8">
          На жаль, сторінка, яку ви шукаете, не існує або була переміщена.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 transition duration-300"
          >
            Повернутися на головну
          </Link>
          <br />
          <Link
            href="/products"
            className="inline-block text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Переглянути товари
          </Link>
        </div>
      </div>
    </div>
  );
}
