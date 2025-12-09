// components/About.tsx

const About = () => {
  return (
    <section
      id="about"
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
        What is DashPayX (DPX)?
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        DashPayX (DPX) is a BEP-20 token on the BNB Smart Chain designed for{" "}
        <strong>real-world payments</strong> and{" "}
        <strong>long-term staking rewards</strong>. The project is focused on
        enabling fast, low-friction transfers starting from{" "}
        <strong>Pakistan</strong> and the <strong>GCC region</strong>, with a
        roadmap to expand globally.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
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
            For Everyday Users
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            Send and receive value in seconds with low fees. DPX aims to make
            cross-border value transfer as simple as sending a message,
            especially for Pakistan ↔ GCC users and families.
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
            For Merchants & Partners
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            Over time, DashPayX plans to enable simple payment acceptance,
            loyalty use cases and integrations, so merchants can accept DPX
            while settling in their preferred currency.
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
            For Long-Term Holders
          </h3>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            DPX includes a staking-focused design. Holders will be able to lock
            their tokens (subject to future terms) to earn additional DPX as
            rewards, aligned with the long-term growth of the ecosystem.
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          opacity: 0.7,
          marginTop: "18px",
        }}
      >
        Note: DashPayX is an evolving project. Features described here are part
        of the vision and roadmap and may be launched in phases as the ecosystem
        grows.
      </p>
    </section>
  );
};

export default About;
