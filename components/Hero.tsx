export default function Hero() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-slate-50 to-white flex flex-col justify-center items-center text-center px-4 py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        Help Save Stray Cats
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-8">
        Every crypto donation goes directly to rescue, feed, and care for stray cats in need.
      </p>
      <div className="flex gap-4">
        <a
          href="/donate"
          className="px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-lg hover:shadow-lg transition"
        >
          Start Donating
        </a>
      </div>
    </section>
  );
}
