'use client';

import { useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const signOut = () => {
    setUser(null);
  };

  return { user, loading, signOut };
}
