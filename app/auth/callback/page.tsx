'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/comments');
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-12 px-4">
      <div className="text-center">
        <div className="inline-block animate-spin mb-4">
          <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-800 rounded-full"></div>
        </div>
        <p className="text-slate-600 font-light">Authenticating...</p>
      </div>
    </div>
  );
}
