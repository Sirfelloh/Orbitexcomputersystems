import { ArrowRight, MonitorSmartphone, Code, Shield, Wifi, PenTool, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    { icon: <MonitorSmartphone size={32} />, title: "Computer & Laptops Sales", desc: "Premium computing hardware tailored to your professional needs." },
    { icon: <Code size={32} />, title: "Website Development", desc: "Dynamic and responsive web applications ensuring a digital presence." },
    { icon: <Wifi size={32} />, title: "Networking Setup", desc: "Reliable and robust network engineering for corporate infrastructure." },
    { icon: <Shield size={32} />, title: "User Support", desc: "24/7 dedicated tech assistance resolving issues efficiently." },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Abstract Technology Network Video */}
        <div className="video-overlay"></div>
        <div
          className="hero-image"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')` }}
        ></div>

        <div className="container hero-content animate-slide-up">
          <div className="hero-badge">Orbitex Technologies</div>
          <h1 className="hero-title">Experience the Future of<br /><span className="text-gradient">Complete Tech Synergy</span></h1>
          <p className="hero-subtitle">
            From seamless user support and hardware sales to robust networking and elegant website development, we are Nairobi's premier tech destination.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary btn-lg">Explore Our Services <ArrowRight size={20} /></Link>
            <Link to="/quote" className="btn btn-outline-light btn-lg">Request Quotation</Link>
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Everything Tech, Handled Perfectly</h2>
            <p className="section-desc mx-auto">We don't just solve problems; we engineer growth through cutting-edge technology and unparalleled design expertise.</p>
          </div>

          <div className="grid grid-cols-4 mt-12 gap-8">
            {services.map((svc, index) => (
              <div key={index} className="glass-card service-card delay-100 flex flex-col items-center text-center">
                <div className="service-icon animate-float">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-text">{svc.desc}</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container" style={{ paddingBottom: '3rem' }}>
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc mx-auto">A glimpse into the digital architectures and setups we’ve delivered.</p>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            <div className="glass-card animate-slide-up" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Prime Panel Interiors Ltd</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>Professional multi-page company profile design including company overview and services.</p>
              </div>
            </div>
            <div className="glass-card animate-slide-up delay-100" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Networking Setup" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Nairobi Corporate Tech Hub</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>Complete LAN installation and secure wireless network setup spanning four floors.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / CTA */}
      <section className="section section-dark cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-2 cta-grid items-center gap-12">
            <div>
              <h2 className="text-white text-4xl font-bold mb-6">Empowering Nairobi with World-Class Tech Infrastructure</h2>
              <p className="text-gray-300 text-lg mb-8">
                We pride ourselves on delivering solutions that are not just functional, but exceptional. As an industry leader headquartered in Nairobi, Kenya, we understand the local market needs infused with global tech standards.
              </p>
              <ul className="cta-list">
                <li><PenTool className="text-secondary" /> Expert Graphic & UI/UX Designs</li>
                <li><TrendingUp className="text-secondary" /> Strategic Social Media Management</li>
                <li><Shield className="text-secondary" /> Secure, Reliable Network Systems</li>
              </ul>
            </div>
            <div className="cta-image-wrapper">
              <div className="glass-panel text-center p-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md">
                <h3 className="text-3xl text-white font-outfit mb-4">Ready to Transform?</h3>
                <p className="text-gray-300 mb-8">Get dedicated support and dynamic technology integration for your business starting today.</p>
                <Link to="/contact" className="btn btn-primary w-full shadow-[0_0_20px_rgba(59,130,246,0.5)]">Contact Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
