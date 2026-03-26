import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Proof from '@/components/Proof';
import Transparency from '@/components/Transparency';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="text-center py-8 text-slate-400 text-lg letter-spacing-1">
        ⭐ ⭐ ⭐
      </div>
      <About />
      <div className="text-center py-8 text-slate-400 text-lg letter-spacing-1">
        ⭐ ⭐ ⭐
      </div>
      <Proof />
      <Transparency />
      <Footer />
    </>
  );
}
