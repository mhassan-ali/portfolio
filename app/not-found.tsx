import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[var(--bg-primary)]">
      <div className="max-w-md w-full glass-panel p-10 rounded-[var(--radius-lg)] border border-[var(--border-color)]">
        <h1 className="text-8xl font-black text-blue mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl font-bold mb-2 text-[var(--text-heading)]">Page Not Found</h2>
        <p className="text-[var(--text-secondary)] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-gradient-cta inline-block">
          Go Home 🏠
        </Link>
      </div>
    </div>
  );
}
