import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DonationPage from '@/components/DonationPage';

export const metadata = {
  title: 'Donate — PawCatDono',
  description: 'Support stray cats through crypto donations. BTC, ETH, USDT, SOL, and LTC accepted.',
};

export default function Donate() {
  return (
    <>
      <Navigation />
      <DonationPage />
      <Footer />
    </>
  );
}
