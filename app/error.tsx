'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled portfolio runtime error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[var(--bg-primary)]">
      <div className="max-w-md w-full glass-panel p-10 rounded-[var(--radius-lg)] border border-[var(--border-color)]">
        <h1 className="text-6xl font-black text-red-500 mb-4 tracking-tight">⚠️</h1>
        <h2 className="text-2xl font-bold mb-2 text-[var(--text-heading)]">Something went wrong!</h2>
        <p className="text-[var(--text-secondary)] mb-8">
          An unexpected error occurred while loading this page.
        </p>
        <button 
          onClick={() => reset()} 
          className="btn-gradient-cta inline-block cursor-pointer border-none"
        >
          Try Again 🔄
        </button>
      </div>
    </div>
  );
}
