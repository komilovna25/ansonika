import { ChildProps } from '@/types';
import Footer from './_components/footer';
import Navbar from './_components/navbar';

function Layout({ children }: ChildProps) {
  return (
    <main className="grid-layout">
      <header className="navbar">
        <Navbar />
      </header>
      <section className="content">{children}</section>
      <footer className="footer">
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
