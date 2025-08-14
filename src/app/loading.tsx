export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-brand-500 mb-4"></div>
        <p className="text-gray-600">Завантаження...</p>
      </div>
    </div>
  );
}
