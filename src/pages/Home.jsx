const STATS = [
  { value: '12K+', label: 'Votes Cast' },
  { value: '340',  label: 'IoT Devices' },
  { value: '99.9%', label: 'Uptime' },
  { value: '< 1s',  label: 'Response Time' },
];

const FEATURES = [
  {
    icon: '📡',
    title: 'Real-Time Voting',
    desc: 'Cast and receive votes instantly from any connected IoT device with sub-second latency.',
  },
  {
    icon: '🔒',
    title: 'Secure & Tamper-Proof',
    desc: 'Each vote is cryptographically signed and logged to an immutable audit trail.',
  },
  {
    icon: '📊',
    title: 'Live Analytics',
    desc: 'Monitor vote distribution and device activity through interactive charts and dashboards.',
  },
  {
    icon: '🌐',
    title: 'Multi-Device Support',
    desc: 'Works with Raspberry Pi, Arduino, ESP32, and any device with an HTTP client.',
  },
  {
    icon: '⚙️',
    title: 'Simple API',
    desc: 'RESTful endpoints make integration straightforward — up and running in minutes.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    desc: 'Get notified of unusual voting patterns or device connectivity changes instantly.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home" aria-label="Hero">
        <div className="container">
          <div className="fade-in-up">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Live Platform
            </div>

            <h1 className="hero__title">
              Voting Made Smart<br />
              <span>Powered by IoT</span>
            </h1>

            <p className="hero__subtitle">
              Connect your IoT devices to a secure, real-time voting platform.
              Monitor results, manage devices, and gain instant insights — all in one place.
            </p>

            <div className="hero__actions">
              <a href="#get-started" id="hero-cta-primary" className="btn btn--primary">
                🚀 Get Started
              </a>
              <a href="#features" id="hero-cta-learn" className="btn btn--outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-strip" aria-label="Key statistics">
        <div className="container">
          <div className="stats-strip__grid">
            {STATS.map(({ value, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-card__value">{value}</div>
                <div className="stat-card__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features" id="features" aria-label="Features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why IoT Vote?</span>
            <h2 className="section-title">Everything you need to run smart votes</h2>
            <p className="section-subtitle">
              From hardware integration to live results, IoT Vote covers the full stack.
            </p>
          </div>

          <div className="features__grid">
            {FEATURES.map(({ icon, title, desc }) => (
              <article className="feature-card" key={title}>
                <div className="feature-card__icon" aria-hidden="true">{icon}</div>
                <h3 className="feature-card__title">{title}</h3>
                <p className="feature-card__desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
