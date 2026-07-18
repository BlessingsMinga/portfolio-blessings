export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <p className="text-blue-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}