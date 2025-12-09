// components/Tokenomics.tsx

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      style={{
        padding: '60px 16px',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          marginBottom: '12px',
        }}
      >
        Tokenomics
      </h2>

      <p
        style={{
          opacity: 0.85,
          fontSize: '14px',
          marginBottom: '20px',
        }}
      >
        DashPayX (DPX) is designed to be simple, transparent and fair — no hidden taxes,
        no private presale games. A clean structure that is easy to understand for both
        newcomers and experienced holders.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        <div
          style={{
            padding: '16px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Total Supply</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>1,000,000,000 DPX (fixed supply)</p>
        </div>

        <div
          style={{
            padding: '16px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Buy / Sell Tax</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>0% — no extra token tax on transfers.</p>
        </div>

        <div
          style={{
            padding: '16px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Presale</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>
            No presale. No private allocations. Distribution aligned with long-term ecosystem
            usage and liquidity.
          </p>
        </div>

        <div
          style={{
            padding: '16px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Primary Use Cases</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>
            Everyday payments (starting with Pakistan & GCC), staking rewards, and future
            integrations with partner platforms and merchants.
          </p>
        </div>
      </div>

      <p
        style={{
          marginTop: '16px',
          fontSize: '12px',
          opacity: 0.7,
        }}
      >
        * Future adjustments to allocation and use cases will be communicated transparently via
        official DashPayX channels.
      </p>
    </section>
  );
};

export default Tokenomics;
