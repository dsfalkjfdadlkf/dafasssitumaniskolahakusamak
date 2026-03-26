'use client';

import { useState } from 'react';
import { Donation } from '../lib/types';
import DonationCard from './DonationCard';
import ProgressBar from './ProgressBar';

const DONATIONS: Donation[] = [
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    networks: {
      mainnet: {
        address: '1A1z7agoat7oPqB6qVxpPBz8J1E28Q7kFm',
        label: 'Bitcoin Network',
      },
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    description: 'Primary donation address',
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    networks: {
      mainnet: {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f42b0d',
        label: 'Ethereum Mainnet',
      },
      arbitrum: {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f42b0d',
        label: 'Arbitrum',
      },
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg',
    description: 'ETH and ERC-20 tokens',
  },
  {
    id: 'usdt',
    symbol: 'USDT',
    name: 'Tether',
    networks: {
      ethereum: {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f42b0d',
        label: 'Ethereum',
      },
      polygon: {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f42b0d',
        label: 'Polygon',
      },
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Tether-logo.svg',
    description: 'Stablecoin donations',
  },
  {
    id: 'sol',
    symbol: 'SOL',
    name: 'Solana',
    address: 'GwfGVyTDsj2t1f4ZB6dY3V7Q8m9H2z3x4K5p7j8B9Qf',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    description: 'Fast, low-cost donations',
  },
  {
    id: 'ltc',
    symbol: 'LTC',
    name: 'Litecoin',
    address: 'LTC1A1z7agoat7oPqB6qVxpPBz8J1E28Q7kF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Litecoin.png',
    description: 'Alternative blockchain',
  },
];

export default function DonationPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    setCopiedId(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-center">
          Support Our Mission
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto text-center mb-12">
          Choose your preferred cryptocurrency and help us save more stray cats. Your donation makes a direct impact.
        </p>

        <div className="mb-16">
          <ProgressBar />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DONATIONS.map((donation) => (
            <DonationCard
              key={donation.id}
              donation={donation}
              copiedId={copiedId}
              onCopy={handleCopy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
