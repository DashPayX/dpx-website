// components/Trust.tsx

const Trust = () => {
  return (
    <section
      id="trust"
      style={{
        padding: "60px 16px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "12px",
        }}
      >
        Trust &amp; Transparency
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        DashPayX is being built with a clear focus on long-term credibility. As
        the project progresses, key technical and legal artefacts will be shared
        openly so that holders, partners and regulators can independently review
        the ecosystem.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginBottom: "20px",
        }}
      >
        {/* Contract Address */}
        <div
          style={{
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "6px",
            }}
          >
            Contract Address
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "6px",
            }}
          >
            The final mainnet contract address for DPX will be published here
            once deployment is completed and verified.
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Status: <strong>To be announced</strong>
          </p>
        </div>

        {/* BscScan */}
        <div
          style={{
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "6px",
            }}
          >
            BscScan Listing
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "6px",
            }}
          >
            Once live, the verified contract and token details will be visible
            on BscScan so anyone can independently inspect supply, holders and
            transactions.
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Status: <strong>Planned</strong>
          </p>
        </div>

        {/* Whitepaper */}
        <div
          style={{
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "6px",
            }}
          >
            Whitepaper
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "6px",
            }}
          >
            A detailed whitepaper describing the DashPayX vision, tokenomics,
            staking model and payment strategy is being prepared and will be
            shared with the community.
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Status: <strong>In preparation</strong>
          </p>
        </div>

        {/* Audit */}
        <div
          style={{
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              marginBottom: "6px",
            }}
          >
            Smart Contract Audit
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              marginBottom: "6px",
            }}
          >
            Before large-scale adoption, DashPayX intends to engage an
            independent auditor to review the main contracts for security issues
            and best practices.
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Status: <strong>Planned</strong>
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          opacity: 0.7,
        }}
      >
        Nothing on this website is financial advice. Crypto assets are highly
        volatile and may be subject to regulatory change. Always do your own
        research and only participate at a risk level you can afford.
      </p>
    </section>
  );
};

export default Trust;
