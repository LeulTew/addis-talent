import React from 'react';
import { AnimatePresence } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HireTalent from './pages/HireTalent';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'hire': return <HireTalent setCurrentPage={setCurrentPage} />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow pt-[72px]">
        <AnimatePresence mode="wait">
          <React.Fragment key={currentPage}>
            {renderPage()}
          </React.Fragment>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

