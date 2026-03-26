'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition">
          🐱 PawCatDono
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition">
            Home
          </Link>
          <Link href="/donate" className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg hover:shadow-lg transition">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
