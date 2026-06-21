import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-primary)]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-extrabold text-[var(--text-heading)]">
          Hassan<span className="text-blue">.</span>
        </h1>
        <div className="w-12 h-12 border-4 border-blue/20 border-t-blue rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
