export default function Transparency() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Transparency Report</h2>
      <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-lg p-8 space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Where Your Money Goes</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• 40% - Food and basic supplies</li>
            <li>• 30% - Medical care and treatment</li>
            <li>• 20% - Shelter and housing</li>
            <li>• 10% - Operations and rehoming programs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Monthly Updates</h3>
          <p className="text-slate-600">
            Every month, we publish detailed reports on blockchain showing exactly how funds are used. 
            View our complete transaction history for full transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
