import React from 'react';
import { useNavigate } from 'react-router-dom';

// Dynamic Badge Component
export function LiveEventBadge({ 
  label = "LIVE EVENT", 
  badgeColor = "#22c55e", 
  dotColor = "#ffffff",
  isLive = true 
}) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: badgeColor,
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.5px',
      marginBottom: '20px'
    }}>
      {isLive && (
        <span style={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: dotColor, 
          borderRadius: '50%',
          display: 'inline-block'
        }} />
      )}
      {label}
    </div>
  );
}

export default function EventDetails() {
  const navigate = useNavigate();

  const groups = [
    {
      id: "smart-city-team",
      name: "Smart City Team",
      membersCount: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
      about: "Our project uses IoT sensors and real-time data to improve traffic management, energy usage, and public safety in urban areas.",
      members: [
        { name: "Hnin", color: "#C08457" },
        { name: "Moon", color: "#F97316" },
        { name: "Aung", color: "#22C55E" },
        { name: "Zaw", color: "#06B6D4" },
        { name: "Shin", color: "#D946EF" }
      ]
    },
    {
      id: "green-tech",
      name: "Green Tech",
      membersCount: 4,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
      about: "Focuses on eco-friendly smart monitoring for renewable energy sources and carbon reduction.",
      members: [
        { name: "Kyaw", color: "#22C55E" },
        { name: "Thae", color: "#F97316" },
        { name: "Lwin", color: "#06B6D4" },
        { name: "Mya", color: "#D946EF" }
      ]
    },
    {
      id: "future-home",
      name: "Future Home",
      membersCount: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
      about: "Automated home solutions featuring smart energy management and voice-controlled automation.",
      members: [
        { name: "Min", color: "#C08457" },
        { name: "Nilar", color: "#F97316" },
        { name: "Phyo", color: "#22C55E" },
        { name: "San", color: "#06B6D4" },
        { name: "Tun", color: "#D946EF" }
      ]
    },
    {
      id: "iot-security",
      name: "IoT security",
      membersCount: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
      about: "End-to-end encryption frameworks tailored for low-power smart home hardware.",
      members: [
        { name: "Win", color: "#C08457" },
        { name: "Yin", color: "#F97316" },
        { name: "Zar", color: "#22C55E" },
        { name: "Aye", color: "#06B6D4" },
        { name: "Bwe", color: "#D946EF" }
      ]
    }
  ];

  const handleGroupClick = (group) => {
    navigate(`/groups/${group.id}`, { state: { group } });
  };

  return (
    <div style={{
      maxWidth: '430px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '24px 20px',
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Logo */}
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <img src="/gusto-logo.png" alt="Gusto College Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
      </div>

      {/* Main Banner Card */}
      <div style={{
        backgroundColor: '#3883a8',
        borderRadius: '24px',
        padding: '24px',
        color: '#ffffff',
        marginBottom: '28px',
        boxShadow: '0 10px 25px -5px rgba(56, 131, 168, 0.3)'
      }}>
        {/* Dynamic Live Event Badge */}
        <LiveEventBadge label="LIVE EVENT" badgeColor="#22c55e" dotColor="#ffffff" isLive={true} />

        {/* Title */}
        <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 20px 0', color: '#ffffff', letterSpacing: '-0.3px' }}>
          Smart City Innovation
        </h2>

        {/* Event Meta Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', fontWeight: '500', color: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📖</span>
            <span>HND -65</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📅</span>
            <span>May 20, 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🕒</span>
            <span>9:00 AM - 10:00 AM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📍</span>
            <span>Time City</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 8px 0', color: '#0f172a' }}>About This Event</h3>
        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
          Explore innovative IoT projects created by students to build a smarter and better future.
        </p>
      </div>

      {/* Participating Groups Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#0f172a' }}>Participating Groups</h3>
        <span style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '13px', fontWeight: '600', padding: '6px 14px', borderRadius: '20px' }}>
          4 Groups
        </span>
      </div>

      {/* Group Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
        {groups.map((group) => (
          <div
            key={group.id}
            onClick={() => handleGroupClick(group)}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '16px',
              overflow: 'hidden',
              padding: '12px 16px 12px 12px',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}
          >
            {/* Robot Thumbnail */}
            <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
              <img src={group.image} alt={group.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Name & Member Count */}
            <div style={{ flex: 1, paddingLeft: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0' }}>
                {group.name}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#94a3b8">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>{group.membersCount} Members</span>
              </div>
            </div>

            {/* Chevron Icon */}
            <div style={{ color: '#0284c7', display: 'flex', alignItems: 'center' }}>
              {group.id === "future-home" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Continue to Vote Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
        <button style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#0c5a8a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '24px',
          padding: '14px 24px',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 6px 16px rgba(12, 90, 138, 0.3)'
        }}>
          Continue to Vote
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 16 12 12 16"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}