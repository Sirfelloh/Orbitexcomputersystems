import { MapPin, Target, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)' }}>
      
      {/* About Header */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', display: 'inline-block', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
              ABOUT ORBITEX
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              The Orbit of<br />True Tech Innovation.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Founded in Nairobi, Kenya, <strong>Orbitex Tech Solutions</strong> has quickly grown into a powerhouse for comprehensive technological services. From the very hardware your employees type on, to the invisible networks that connect them globally, we manage "everything tech."
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
               <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
                 <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: 0 }}>500+</h4>
                 <span style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Projects Completed</span>
               </div>
               <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
                 <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: 0 }}>99%</h4>
                 <span style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Support Resolution</span>
               </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            {/* Image Placeholder using a tech abstraction since we don't have real photos */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', background: 'var(--primary-dark)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
               <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop" alt="Server room and laptops" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.8 }} />
               <div style={{ position: 'absolute', bottom: '2rem', right: '-2rem', backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '1rem', transform: 'translateX(-3rem)' }}>
                 <MapPin size={32} color="var(--primary)" />
                 <div>
                   <h5 style={{ margin: 0, color: 'var(--text-dark)' }}>Headquarters</h5>
                   <p style={{ margin: 0, color: 'var(--text-gray)', fontWeight: 600 }}>Nairobi, Kenya</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision section  */}
      <div className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
           <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
              
              <div className="glass-card flex delay-100" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                  <Target size={32} color="var(--secondary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>Our Mission</h3>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>To provide impeccable, centralized technological solutions that dissolve complexity, enhance performance, and secure the operational flow of businesses across East Africa.</p>
                </div>
              </div>

              <div className="glass-card flex delay-200" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                  <Zap size={32} color="var(--secondary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>Our Vision</h3>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>To be the undisputed orbital center of tech excellence in Africa—where ideas, hardware, software, and creative design converge seamlessly.</p>
                </div>
              </div>

           </div>
        </div>
      </div>

      <div className="section text-center" style={{ padding: '6rem 0' }}>
         <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Want to Join Our Orbit?</h2>
         <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>Whether you need a full enterprise IT overhaul, or just a stunning social media campaign, Sir Felix and the Orbitex Team are ready.</p>
         <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
      </div>

    </div>
  );
};

export default About;
