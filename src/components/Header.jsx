import { Link, useLocation } from 'react-router-dom';
import { Atom, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About Us', path: '/about' },
    { label: 'Core Values', path: '/core-values' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-card' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo-group" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <div className="logo-orbit"></div>
            <Atom size={32} color="var(--secondary)" />
          </div>
          <div className="logo-text">
            <span className="logo-brand">ORBITEX</span>
            <span className="logo-tagline">Tech Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/quote" className="btn btn-primary">Request Quote</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/quote" className="btn btn-primary w-full mt-4" onClick={closeMenu}>
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
