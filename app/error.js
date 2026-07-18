"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">⚠️</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred. Please try again or contact me if the
          problem persists.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus-visible:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}