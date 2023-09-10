import Categories from '@/components/_App/Categories';
import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';
import TopThreeCards from '@/components/_App/TopThreeCards';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Categories />
        <TopThreeCards />
        <Footer />
      </main>
    </>
  );
}
