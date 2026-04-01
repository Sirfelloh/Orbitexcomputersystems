import { Link } from 'react-router-dom';
import { Atom, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--text-light)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand Col */}
          <div className="footer-col" style={{ gridColumn: 'span 1' }}>
            <Link to="/" className="logo-group" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="logo-icon-wrapper" style={{ position: 'relative', width: '40px', height: '40px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Atom size={24} color="var(--primary)" />
              </div>
              <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: 'var(--bg-main)', lineHeight: 1 }}>ORBITEX</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>Technologies</span>
              </div>
            </Link>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Your one-stop solution for everything tech. From user support and full-stack web development to corporate networking and computer sales in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col" style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: 'var(--bg-main)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Our Services</Link></li>
              <li><Link to="/portfolio" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Portfolio</Link></li>
              <li><Link to="/core-values" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Core Values</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <h4 style={{ color: 'var(--bg-main)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Info</h4>
            <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ color: 'var(--bg-main)', marginBottom: '0.25rem' }}>Location</h5>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>Nairobi, Kenya</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ color: 'var(--bg-main)', marginBottom: '0.25rem' }}>Phone</h5>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>0741466832 | 0707618012<br />Contact: Sir Felix</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ color: 'var(--bg-main)', marginBottom: '0.25rem' }}>Email</h5>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>info@orbitex.co.ke</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ color: 'var(--bg-main)', marginBottom: '0.25rem' }}>Working Hours</h5>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>&copy; {new Date().getFullYear()} Orbitex Technologies. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
