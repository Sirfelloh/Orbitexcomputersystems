import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-alt)' }}>
      {/* Contact Header */}
      <div className="section-dark" style={{ padding: '6rem 0', backgroundColor: 'var(--primary-dark)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="animate-slide-up" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Let's Connect</h1>
          <p className="animate-fade-in delay-100" style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
            We're headquartered in Nairobi and ready to deploy globally. Drop us a message for general inquiries or direct support.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-4rem', paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'stretch' }}>

          {/* Contact Details Card */}
          <div className="glass-card animate-slide-up delay-200" style={{ backgroundColor: 'white', padding: '3rem', borderLeft: '4px solid var(--primary)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Get In Touch</h2>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <MapPin size={24} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Our Office</h4>
                <p style={{ color: 'var(--text-gray)', margin: 0, fontSize: '1.1rem' }}>Nairobi, Kenya</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Phone size={24} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Call Us</h4>
                <p style={{ color: 'var(--text-gray)', margin: 0, fontSize: '1.1rem' }}>
                  Main: <a href="tel:0741466832/0707618012" style={{ color: 'var(--primary)', fontWeight: 600 }}>0741466832 | 0707618012</a><br />
                  Ask for: Sir Felix
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Mail size={24} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Email Support</h4>
                <p style={{ color: 'var(--text-gray)', margin: 0, fontSize: '1.1rem' }}>
                  <a href="mailto:info@orbitex.co.ke" style={{ color: 'var(--text-gray)', transition: 'color 0.2s' }}>info@orbitex.co.ke</a>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Clock size={24} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Availability</h4>
                <p style={{ color: 'var(--text-gray)', margin: 0, fontSize: '1.1rem' }}>
                  Mon-Sat: 8:00 AM - 5:00 PM<br />
                  <em>IT Support: 24/7 Priority Emergency dispatch</em>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Form */}
          <div className="glass-card animate-slide-up delay-300" style={{ backgroundColor: 'white', padding: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '2rem' }}>Send a Message</h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#ecfdf5', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <Send size={24} />
                </div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-gray)' }}>We have received your inquiry and will revert shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Full Name</label>
                  <input required type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} placeholder="Jane Doe" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Email Address</label>
                  <input required type="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} placeholder="jane@company.com" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Message</label>
                  <textarea required rows="5" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }} placeholder="How can Orbitex help you today?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
