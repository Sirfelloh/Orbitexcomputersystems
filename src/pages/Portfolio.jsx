import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
       category: "Web Development",
       title: "Prime Panel Interiors Ltd",
       desc: "Professional multi-page company profile design including company overview, services offered, team section, and contact page. (As quoted)",
       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
       tags: ["React", "Custom UI", "SEO"]
    },
    {
       category: "Networking Setup",
       title: "Nairobi Corporate Tech Hub",
       desc: "Complete structured LAN installation and secure wireless network setup spanning four floors, accommodating 200+ users.",
       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
       tags: ["Hardware Firewall", "Cisco Routers", "Structured Cabling"]
    },
    {
       category: "Hardware Supply",
       title: "EduTech School Bulk Deal",
       desc: "Sourced, configured, and deployed 50 high-performance workstations for a modern computer lab.",
       image: "https://images.unsplash.com/photo-1621360841013-c76831f1628c?q=80&w=2128&auto=format&fit=crop",
       tags: ["Logistics", "Configuration", "Bulk Sales"]
    },
    {
       category: "Brand Design",
       title: "AgriTech Kenya Branding",
       desc: "Complete visual identity overhaul including logo design, color schemes, and social media templates.",
       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
       tags: ["Figma", "Adobe Illustrator", "Brand Identity"]
    }
  ];

  return (
    <div className="portfolio-page" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-alt)', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h1 className="animate-slide-up" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Our Work Speaks For Itself</h1>
           <p className="animate-fade-in delay-100" style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
            A glimpse into the digital architectures, massive network setups, and stunning designs we’ve delivered for our partners.
           </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
          {projects.map((proj, idx) => (
             <div key={idx} className={`glass-card delay-${(idx % 2 + 1) * 100} animate-slide-up`} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--bg-glass)', backdropFilter: 'blur(8px)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', zIndex: 10 }}>
                     {proj.category}
                   </div>
                   <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                   <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>{proj.title}</h3>
                   <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>{proj.desc}</p>
                   
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {proj.tags.map(tag => (
                         <span key={tag} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>
                           {tag}
                         </span>
                      ))}
                   </div>
                   
                   <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, marginTop: 'auto', transition: 'color 0.2s' }}>
                     Discuss Similar Project <ExternalLink size={16} />
                   </Link>
                </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
