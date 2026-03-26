import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Login — PawCatDono',
  description: 'Sign in to comment and support stray cats.',
};

export default function Login() {
  return (
    <>
      <Navigation />
      <LoginForm />
      <Footer />
    </>
  );
}
