// components/Staking.tsx

const Staking = () => {
  return (
    <section
      id="staking"
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
        Staking: Rewarding Long-Term DPX Holders
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        Staking is a core part of the DashPayX vision. The idea is simple:
        long-term holders will be able to lock their DPX tokens in a secure
        smart contract and earn additional DPX as rewards over time, aligned
        with the growth of the ecosystem.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          marginBottom: "24px",
        }}
      >
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
              marginBottom: "8px",
            }}
          >
            Simple Concept
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            You commit (stake) a certain amount of DPX for a period of time.
            While your tokens are staked, they cannot be used for transfers, but
            they work on your behalf to earn staking rewards.
          </p>
        </div>

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
              marginBottom: "8px",
            }}
          >
            Designed for Sustainability
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            Staking parameters (lock periods, reward rates, caps) are planned to
            be designed carefully so that rewards are meaningful for holders but
            still sustainable for the long-term health of the DashPayX economy.
          </p>
        </div>

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
              marginBottom: "8px",
            }}
          >
            Transparent & Optional
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            Staking will always be optional. Users who prefer pure liquidity can
            simply hold or use DPX for payments, while those with a longer
            horizon can choose to stake and earn extra DPX, with clear terms and
            on-chain transparency.
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.15)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        }}
      >
        <h3
          style={{
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          Planned Staking Parameters (Conceptual)
        </h3>
        <ul
          style={{
            fontSize: "13px",
            opacity: 0.85,
            paddingLeft: "18px",
            margin: 0,
          }}
        >
          <li>Separate pools / options for different lock durations.</li>
          <li>Reward rates adjusted over time based on adoption and liquidity.</li>
          <li>All contracts to be verifiable on-chain before launch.</li>
          <li>
            Detailed documentation and “how-to” guides to be published prior to
            staking going live.
          </li>
        </ul>
        <p
          style={{
            fontSize: "12px",
            opacity: 0.7,
            marginTop: "10px",
          }}
        >
          Staking is currently in the design and planning phase. Nothing on this
          page is financial advice or a guarantee of future returns.
        </p>
      </div>
    </section>
  );
};

export default Staking;
