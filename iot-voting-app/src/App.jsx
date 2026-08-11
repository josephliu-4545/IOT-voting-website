import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: "⚡",
      title: "Real-time Telemetry",
      description: "Monitor live node status and voter verification metrics instantly."
    },
    {
      icon: "🔒",
      title: "Cryptographic Security",
      description: "End-to-end encrypted voting pathways powered by hardware-level security."
    },
    {
      icon: "📊",
      title: "Transparent Auditing",
      description: "Immutable ledger tracking ensures complete integrity for all events."
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Glowing Effects */}
      <div className="orb orb-primary" />
      <div className="orb orb-accent" />

      {/* Glassmorphism Navbar */}
      <nav className="glass-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '16px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00c896' }} />
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
              IoT<span style={{ color: '#00c896' }}>Vote</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>Features</a>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>System Status</a>
            <a href="#docs" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>Docs</a>
            <button className="btn-primary">Launch Dashboard</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <span style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              background: 'rgba(0, 200, 150, 0.1)', 
              color: '#00c896', 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              border: '1px solid rgba(0, 200, 150, 0.2)' 
            }}>
              Next-Gen IoT Voting Protocol
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Secure hardware. <br />
              <span style={{ background: 'linear-gradient(90deg, #4f63ff, #00c896)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transparent votes.
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '32px', maxWidth: '480px' }}>
              Bridge physical hardware integrity with modern cryptographic consensus for unalterable electronic voting.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary">Get Started</button>
              <button style={{ 
                background: 'transparent', 
                color: '#f8fafc', 
                border: '1px solid rgba(255,255,255,0.2)', 
                padding: '12px 24px', 
                borderRadius: '10px', 
                fontWeight: 600, 
                cursor: 'pointer' 
              }}>
                View Architecture
              </button>
            </div>
          </div>

          {/* Animated Hero Graphic Component */}
          <div className="animate-float" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ padding: '32px', width: '100%', maxWidth: '420px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Live Node Activity</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#00c896' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00c896' }}></span> Active
                </span>
              </div>
              <div style={{ height: '180px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'flex-end', gap: '12px', paddingBottom: '12px' }}>
                {[40, 65, 30, 85, 95, 60, 75].map((val, idx) => (
                  <div key={idx} style={{ 
                    flex: 1, 
                    height: `${val}%`, 
                    background: idx === 4 ? '#00c896' : '#4f63ff', 
                    borderRadius: '4px',
                    opacity: 0.85,
                    transition: 'height 0.5s ease'
                  }} />
                ))}
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <span style={{ color: '#94a3b8' }}>Total Verified</span>
                <span style={{ fontWeight: 700, color: '#f8fafc' }}>1,284,902</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '12px' }}>Engineered for Trust</h2>
          <p style={{ color: '#94a3b8' }}>Built to withstand network anomalies while ensuring zero-knowledge privacy.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {features.map((item, index) => (
            <div key={index} className="glass-card hover-lift" style={{ padding: '32px' }}>
              <div style={{ 
                fontSize: '1.75rem', 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'rgba(79, 99, 255, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '20px' 
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}