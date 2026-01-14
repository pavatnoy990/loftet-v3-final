import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Hjem', path: '/' },
  { name: 'Meny', path: '/meny' },
  { name: 'Takeaway', path: '/takeaway' },
  { name: 'Events', path: '/events' },
  { name: 'Om oss', path: '/om-oss' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500"
      style={{
        // Glass-effekt over hele bredden
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'rgba(10, 10, 10, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: isScrolled ? '1rem 0' : '1.75rem 0',
        borderBottom: 'none',
      }}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo (Venstre side) */}
          <Link to="/" className="flex flex-col z-10 group">
            <div className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-bold text-white transition-colors">2 Katter</span>
              <span className="font-display text-2xl md:text-3xl font-bold text-primary ml-2 group-hover:text-primary/80 transition-colors">på Loftet</span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mt-0.5">bar • spiseri • kultur</span>
          </Link>

          {/* Desktop Linker (Sentrerte i midten) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path 
                  ? 'text-primary' // Rød tekst når aktiv
                  : 'text-gray-300' // Gråhvit ellers
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Spacer for balanse på høyre side */}
          <div className="hidden md:block w-[180px]" />

          {/* Mobilmeny Knapp */}
          <button
            className="md:hidden text-white p-2 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobilmeny Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-display font-semibold transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};