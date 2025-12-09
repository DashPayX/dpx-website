// components/Roadmap.tsx

const Roadmap = () => {
  return (
    <section
      id="roadmap"
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
        Roadmap (High-Level)
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        DashPayX is being built step by step with a focus on{" "}
        <strong>utility</strong>, <strong>compliance</strong> and{" "}
        <strong>long-term credibility</strong>. The roadmap below is a high-level
        view and may be refined as the project matures.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
        }}
      >
        {/* Phase 1 */}
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
            Phase 1 — Foundation
          </h3>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.75,
              marginBottom: "8px",
            }}
          >
            Status: In progress
          </p>
          <ul
            style={{
              fontSize: "13px",
              opacity: 0.85,
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            <li>Token design and initial smart contracts (DPX & staking).</li>
            <li>Brand identity, official website & social channels.</li>
            <li>Core documentation and positioning for payments & staking.</li>
          </ul>
        </div>

        {/* Phase 2 */}
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
            Phase 2 — Community & Liquidity
          </h3>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.75,
              marginBottom: "8px",
            }}
          >
            Status: Planned
          </p>
          <ul
            style={{
              fontSize: "13px",
              opacity: 0.85,
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            <li>Launch of public community channels (Telegram, X, Discord).</li>
            <li>Initial liquidity provision on DEX (e.g. PancakeSwap).</li>
            <li>
              Transparent communication on token distribution and treasury
              policy.
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
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
            Phase 3 — Staking & Ecosystem
          </h3>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.75,
              marginBottom: "8px",
            }}
          >
            Status: Planned
          </p>
          <ul
            style={{
              fontSize: "13px",
              opacity: 0.85,
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            <li>Deployment of audited staking contracts for DPX.</li>
            <li>Publishing of detailed staking documentation & tutorials.</li>
            <li>
              Early ecosystem integrations and utility pilots for DPX payments.
            </li>
          </ul>
        </div>

        {/* Phase 4 */}
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
            Phase 4 — Payments & Expansion
          </h3>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.75,
              marginBottom: "8px",
            }}
          >
            Status: Vision
          </p>
          <ul
            style={{
              fontSize: "13px",
              opacity: 0.85,
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            <li>
              Partnerships with payment facilitators, fintechs and merchants in
              Pakistan & GCC.
            </li>
            <li>
              Exploration of remittance and bill payment use cases with
              compliant partners.
            </li>
            <li>
              Broader regional expansion based on adoption, regulation and
              demand.
            </li>
          </ul>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          opacity: 0.7,
          marginTop: "18px",
        }}
      >
        This roadmap is indicative and may change based on market conditions,
        regulatory guidance, technical constraints and community feedback. All
        updates will be communicated via official DashPayX channels.
      </p>
    </section>
  );
};

export default Roadmap;
