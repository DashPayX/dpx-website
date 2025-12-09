// components/Hero.tsx

const Hero = () => {
  return (
    <section
      style={{
        padding: '80px 16px 40px',
        maxWidth: '960px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '14px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          opacity: 0.8,
          marginBottom: '12px',
        }}
      >
        BEP-20 • BNB SMART CHAIN • REAL-WORLD PAYMENTS
      </p>

      <h1
        style={{
          fontSize: '32px',
          lineHeight: 1.3,
          marginBottom: '16px',
        }}
      >
        DashPayX (DPX) — Fast, Borderless Crypto Payments with Built-In Staking
      </h1>

      <p
        style={{
          fontSize: '16px',
          opacity: 0.9,
          marginBottom: '24px',
        }}
      >
        A utility-first BEP-20 token designed for everyday payments starting from{' '}
        <strong>Pakistan</strong> and the <strong>GCC</strong>. Send value in seconds and let
        long-term holders earn staking rewards within the same ecosystem.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Scroll to Tokenomics section */}
        <a href="#tokenomics">
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            View Tokenomics
          </button>
        </a>

        {/* Scroll to Community section */}
        <a href="#community">
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Join the Community
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
