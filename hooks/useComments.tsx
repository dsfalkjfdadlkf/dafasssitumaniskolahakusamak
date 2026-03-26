'use client';

import { useEffect, useState } from 'react';

interface Comment {
  id: string;
  text: string;
  createdAt: string;
}

export function useComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const addComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toISOString(),
    };
    setComments([newComment, ...comments]);
  };

  return { comments, loading, addComment };
}
