'use client';

export default function ProgressBar() {
  const raised = parseFloat(process.env.NEXT_PUBLIC_DONATION_RAISED || '0');
  const goal = parseFloat(process.env.NEXT_PUBLIC_DONATION_GOAL || '200');
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-900">Fundraising Progress</h3>
        <span className="text-slate-600 font-semibold">${raised.toFixed(2)} / ${goal.toFixed(2)}</span>
      </div>
      <div className="w-full bg-white/60 border border-white/50 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-slate-800 to-slate-700 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-slate-600 mt-2">{Math.round(percentage)}% of goal reached</p>
    </div>
  );
}
