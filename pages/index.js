import CategoriesCard from '@/components/_App/CategoriesCard';
import Footer from '@/components/_App/Footer';
import Hero from '@/components/_App/Hero';
import Navbar from '@/components/_App/Navbar';
import TopThreeCards from '@/components/_App/TopThreeCards';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <CategoriesCard />
        <TopThreeCards />
        <Footer />
      </main>
    </>
  );
}
