import { MonitorSmartphone, Code, Shield, Wifi, PenTool, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesData = [
    { 
      id: "sales",
      title: "Computer & Laptops Sales", 
      icon: <MonitorSmartphone size={40} className="text-primary mb-4" />,
      desc: "Top-tier computing hardware sourced globally to meet your performance demands. We supply both new and refurbished units to offices and individuals.",
      features: ["Corporate bulk supply", "Warranties included", "Custom-built workstations", "High-performance laptops"]
    },
    { 
      id: "web",
      title: "Website Development", 
      icon: <Code size={40} className="text-secondary mb-4" />,
      desc: "Architecting the digital face of your business. We build responsive, highly intuitive and robust web applications ranging from corporate profiles to full e-commerce platforms.",
      features: ["React / Full-stack Development", "UI/UX optimized", "E-commerce stores", "SEO integrated"]
    },
    { 
      id: "network",
      title: "Corporate Networking", 
      icon: <Wifi size={40} className="text-primary-light mb-4" />,
      desc: "Structured cabling, seamless wireless integrations, and enterprise-grade router setups for uninterrupted operational workflow.",
      features: ["Server room setups", "LAN/WAN installations", "Secure VPN setups", "Hardware firewalls"]
    },
    { 
      id: "support",
      title: "Active User Support", 
      icon: <Shield size={40} className="text-secondary mb-4" />,
      desc: "Dedicated on-call IT support that ensures your hardware and software systems never hold your productivity back.",
      features: ["24/7 Remote assistance", "On-site dispatch (Nairobi)", "Software troubleshooting", "Data recovery"]
    },
    { 
      id: "designs",
      title: "Graphic & UI Designs", 
      icon: <PenTool size={40} className="text-primary mb-4" />,
      desc: "From striking company profiles (like the one you love) to complete brand identities. We craft visuals that communicate your excellence.",
      features: ["Company profiles & brochures", "Logo & brand packages", "UI mockups", "Digital advertising assets"]
    },
    { 
      id: "social",
      title: "Social Media Management", 
      icon: <TrendingUp size={40} className="text-secondary mb-4" />,
      desc: "Converting your digital presence into active engagements. We manage your socials so you can manage your core business.",
      features: ["Content calendaring", "Ad campaign management", "Community building", "Analytics & reporting"]
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '80px' }}>
      
      {/* Services Hero */}
      <section className="bg-primary text-white py-20 animate-fade-in" style={{ backgroundColor: 'var(--primary-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.2), transparent 50%)' }}></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-outfit font-bold mb-4" style={{ color: 'var(--text-light)' }}>Our Technical Excellence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Comprehensive technological solutions engineered for scale, reliability, and unparalleled performance.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-alt" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8" style={{ gap: '2rem' }}>
            {servicesData.map((svc, idx) => (
               <div key={svc.id} className={`glass-card delay-${(idx % 3 + 1) * 100} animate-slide-up flex flex-col h-full`} style={{ display: 'flex', flexDirection: 'column' }}>
                 {svc.icon}
                 <h2 className="text-2xl font-bold mb-3 text-primary" style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{svc.title}</h2>
                 <p className="text-gray-600 mb-6" style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>{svc.desc}</p>
                 <ul className="mb-6 space-y-2" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {svc.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        <CheckCircle size={16} className="text-secondary" style={{ color: 'var(--secondary)' }} /> {feat}
                      </li>
                    ))}
                 </ul>
                 <Link to="/quote" className="btn btn-outline w-full justify-center group" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                   Request {svc.title.split(' ')[0]} Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" style={{ marginLeft: '0.5rem' }}/>
                 </Link>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sell CTA */}
      <section className="py-24 text-center bg-white">
         <div className="container">
           <h2 className="text-3xl font-bold text-primary mb-4" style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>Need a Custom Synergy Plan?</h2>
           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Combine our services for an end-to-end IT takeover. We can supply the laptops, build the secure network, design your digital brand, and support your staff simultaneously.
           </p>
           <Link to="/contact" className="btn btn-primary btn-lg shadow-xl hover:-translate-y-1 transition-transform">
             Discuss Custom Solutions
           </Link>
         </div>
      </section>

    </div>
  );
};

export default Services;
