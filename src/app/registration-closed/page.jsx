"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationClosed() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Container */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl border border-green-200 dark:border-green-600">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-red-600 dark:text-red-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Registration Closed
          </h1>

          {/* Message */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg sm:text-xl leading-relaxed">
              Registration is now closed. Thank you for your overwhelming response - we have exceeded our accommodation capacity.
            </p>
            <p className="text-base sm:text-lg">
              We sincerely appreciate your interest.
            </p>
          </div>

          {/* Redirect Notice */}
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
            <p className="text-sm text-green-700 dark:text-green-300">
              You will be automatically redirected to the homepage in 5 seconds...
            </p>
          </div>

          {/* Manual Redirect Button */}
          <div className="mt-6">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}