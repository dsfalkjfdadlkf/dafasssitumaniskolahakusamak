'use client';

import { useState } from 'react';

export default function CommentsSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Comments</h2>
      
      <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-lg p-6 mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="mt-3 px-6 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg hover:shadow-lg transition"
        >
          Post Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-lg p-4">
            <p className="text-slate-700">{comment}</p>
            <p className="text-xs text-slate-500 mt-2">Just now</p>
          </div>
        ))}
      </div>
    </div>
  );
}
