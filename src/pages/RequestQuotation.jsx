import { useState } from 'react';
import { Send, DollarSign, Laptop, Globe, Users, PenTool, LayoutTemplate } from 'lucide-react';

const RequestQuotation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would dispatch to an API route
  };

  const services = [
    { id: 'web', name: 'Website Development', icon: <Globe size={20} /> },
    { id: 'hardware', name: 'Computer/Laptop Sales', icon: <Laptop size={20} /> },
    { id: 'network', name: 'Networking Setup', icon: <Users size={20} /> },
    { id: 'support', name: 'User & IT Support', icon: <DollarSign size={20} /> },
    { id: 'design', name: 'Graphic Design', icon: <PenTool size={20} /> },
    { id: 'social', name: 'Social Media Management', icon: <LayoutTemplate size={20} /> },
  ];

  return (
    <div className="quote-page" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-alt)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
          <h1 className="animate-slide-up" style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem' }}>Get A Quick Quote</h1>
          <p className="animate-fade-in delay-100" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Tell us exactly what you need. From complex web developments to bulk hardware purchases, Orbitex provides competitive and transparent estimations.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          
          <div className="quote-info animate-slide-up delay-200">
             <div className="glass-card" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '3rem' }}>
               <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2rem' }}>Why Choose Orbitex?</h2>
               <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '50%' }}>
                     <DollarSign size={24} color="#60A5FA"/>
                   </div>
                   <div>
                     <h4 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>Competitive Pricing</h4>
                     <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, marginTop: '0.25rem' }}>We offer flexible plans and flat project rates with absolutely zero hidden fees.</p>
                   </div>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '50%' }}>
                     <Globe size={24} color="#60A5FA"/>
                   </div>
                   <div>
                     <h4 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>Industry Standard Tech</h4>
                     <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, marginTop: '0.25rem' }}>All our hardware and digital solutions strictly adhere to international quality standards.</p>
                   </div>
                 </li>
               </ul>

               <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                 <p style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>Prefer to call us directly?</p>
                 <a href="tel:0741466832" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>+254 741 466832</a>
                 <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>Ask for Sir Felix</div>
               </div>
             </div>
          </div>

          <div className="quote-form-container glass-card animate-slide-up delay-300" style={{ padding: '3rem', backgroundColor: 'white' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#ecfdf5', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <Send size={40} />
                </div>
                <h3 style={{ color: 'var(--text-dark)', fontSize: '2rem', marginBottom: '1rem' }}>Quotation Sent!</h3>
                <p>Thank you for reaching out to Orbitex Tech Solutions. Our technical estimation team will review your requirements and respond to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Company / Your Name</label>
                    <input required type="text" placeholder="e.g. Prime Panel Interiors Ltd" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', transition: 'border-color 0.2s', width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Email Address</label>
                    <input required type="email" placeholder="john@example.com" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', width: '100%' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Phone Number</label>
                  <input required type="tel" placeholder="+254 7XX XXXXXX" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', width: '100%' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Select Services Required</label>
                  <div className="grid grid-cols-2" style={{ gap: '1rem', marginTop: '0.5rem' }}>
                    {services.map(svc => (
                      <label key={svc.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>{svc.icon} {svc.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Project Details</label>
                  <textarea required rows="4" placeholder="Please describe exactly what you are looking for... (e.g. Need 5 laptops for my office and a portfolio website)" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical', width: '100%' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>
                  Request Formal Quotation <Send size={20} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RequestQuotation;
