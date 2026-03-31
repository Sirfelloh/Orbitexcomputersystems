import { ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreValues = () => {
  const values = [
    {
      title: "Excellence & Quality",
      icon: <Award size={48} color="var(--primary)" />,
      desc: "We refuse to deliver mediocrity. Whether it is a single laptop patch or a multi-million-shilling network deployment, our work meets the highest international execution standards."
    },
    {
      title: "Integrity Above All",
      icon: <ShieldCheck size={48} color="var(--primary)" />,
      desc: "Transparent quotations, honest timelines, and secure data handling. Trust is the foundation of every single partnership at Orbitex."
    },
    {
      title: "Client-Centric Approach",
      icon: <HeartHandshake size={48} color="var(--primary)" />,
      desc: "Technology should serve you, not confuse you. We communicate clearly, provide exhaustive training, and prioritize our client's business objectives deeply."
    },
    {
      title: "Forward-Thinking Vision",
      icon: <Eye size={48} color="var(--primary)" />,
      desc: "Orbitex doesn't just build for today. We architect scalable solutions that adapt to the technological shifts of tomorrow."
    }
  ];

  return (
    <div className="core-values-page" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', paddingBottom: '6rem' }}>
       {/* Top Header */}
       <div className="section-dark" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--primary-dark)' }}>
          <div className="container">
             <h1 className="animate-slide-up" style={{ fontSize: '3.5rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>Our Core Philosophy</h1>
             <p className="animate-fade-in delay-100" style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
              The unshakeable pillars that dictate how we write code, wire servers, and support our users every single day.
             </p>
          </div>
       </div>

       {/* Values Grid */}
       <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
             {values.map((val, idx) => (
                <div key={idx} className={`glass-card delay-${(idx % 4 + 1) * 100} animate-slide-up`} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', borderTop: '4px solid var(--secondary)' }}>
                   <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '50%' }}>
                     {val.icon}
                   </div>
                   <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>{val.title}</h2>
                   <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                     {val.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>

       {/* Closing CTA */}
       <div className="container" style={{ marginTop: '6rem', textAlign: 'center' }}>
          <div style={{ padding: '4rem', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: '2rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
             <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Experience our values in action.</h3>
             <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '1.1rem' }}>Partner with an agency that cares deeply about your tech success.</p>
             <Link to="/quote" className="btn btn-primary btn-lg">Request a Quote Today</Link>
          </div>
       </div>
    </div>
  );
};

export default CoreValues;
