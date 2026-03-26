import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommentsSection from '@/components/CommentsSection';

export const metadata = {
  title: 'Comments — PawCatDono',
  description: 'Join our community. Share your thoughts and support for stray cats.',
};

export default function Comments() {
  return (
    <>
      <Navigation />
      <CommentsSection />
      <Footer />
    </>
  );
}
