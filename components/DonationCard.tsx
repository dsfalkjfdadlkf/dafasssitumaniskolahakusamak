'use client';

import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Copy, Check } from 'lucide-react';

interface Network {
  address: string;
  label: string;
}

interface DonationCardProps {
  donation: {
    id: string;
    symbol: string;
    name: string;
    networks?: { [key: string]: Network };
    address?: string;
    defaultNetwork?: string;
    logo: string;
    description: string;
  };
  copiedId: string | null;
  onCopy: (id: string) => void;
}

export default function DonationCard({ donation, copiedId, onCopy }: DonationCardProps) {
  const [selectedNetwork, setSelectedNetwork] = useState(
    donation.networks ? Object.keys(donation.networks)[0] : 'default'
  );

  const isNetworkBased = !!donation.networks;
  const currentAddress = isNetworkBased
    ? donation.networks![selectedNetwork]?.address
    : donation.address!;
  const currentLabel = isNetworkBased
    ? donation.networks![selectedNetwork]?.label
    : `Scan to send ${donation.symbol}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentAddress);
    onCopy(donation.id);
    setTimeout(() => onCopy(''), 2000);
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition animate-fadeUp">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-white/80 border border-white/50 flex items-center justify-center flex-shrink-0">
          <img src={donation.logo} alt={donation.name} className="w-11 h-11 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-slate-800">{donation.name}</h3>
          <span className="text-xs text-slate-600 font-light">{donation.description}</span>
        </div>
      </div>

      {isNetworkBased && (
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 whitespace-nowrap">Network</label>
          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="flex-1 min-w-fit bg-white/80 border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            {Object.entries(donation.networks!).map(([key, net]) => (
              <option key={key} value={key}>
                {net.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex items-center gap-3 bg-white/60 border border-white/50 rounded-2xl p-3 mb-5">
        <div className="flex-1 min-w-0 font-mono text-xs md:text-sm text-slate-800 break-all">
          {currentAddress}
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm transition ${
            copiedId === donation.id
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:shadow-lg'
          }`}
        >
          {copiedId === donation.id ? (
            <>
              <Check size={14} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="flex justify-center">
        <div className="bg-white/90 border border-white/50 rounded-2xl p-4 inline-flex flex-col items-center gap-3">
          <QRCode
            value={currentAddress}
            size={150}
            level="H"
            className="rounded-lg"
          />
          <span className="text-xs text-slate-600 font-light text-center max-w-xs">{currentLabel}</span>
        </div>
      </div>
    </div>
  );
}
