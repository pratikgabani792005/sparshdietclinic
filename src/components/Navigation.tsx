import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src="/assets/Sparsh Text Logo.png" 
                alt="Sparsh Diet Logo" 
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-stone-700 hover:text-sage-700 transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-sage-700' : ''
                }`} style={{ fontSize: '0.9375rem', fontWeight: 500, letterSpacing: '0.02em' }}>
                  {link.name}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-sage-600 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link to="/#contact">
              <motion.button
                whileHover={{ boxShadow: '0 0 20px rgba(152, 185, 141, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-white rounded-full transition-all duration-300 cursor-pointer"
                style={{ fontSize: '0.9375rem', fontWeight: 500, letterSpacing: '0.02em', backgroundColor: '#557155', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' , cursor: 'pointer'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#402211'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#557155'}
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-sage-700 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-stone-700 hover:text-sage-700 transition-colors ${
                    location.pathname === link.path ? 'text-sage-700' : ''
                  }`}
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="mt-3 w-full px-6 py-2.5 text-white rounded-full transition-all duration-300 cursor-pointer"
                  style={{ fontSize: '0.9375rem', fontWeight: 500, backgroundColor: '#557155', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#402211'; e.currentTarget.style.boxShadow = '0 0 20px rgba(122, 154, 122, 0.6)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#557155'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
                >
                  Book Consultation
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
