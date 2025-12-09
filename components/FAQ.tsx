// components/FAQ.tsx

const FAQ = () => {
  return (
    <section
      id="faq"
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
        Frequently Asked Questions
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        Some of the most common questions about DashPayX (DPX). This section will
        be expanded over time as the project and community grow.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
        }}
      >
        {/* Q1 */}
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
            What is DashPayX (DPX) in simple terms?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            DPX is a BEP-20 token on the BNB Smart Chain focused on two things:
            fast, low-friction payments (starting with Pakistan &amp; GCC) and a
            staking mechanism that rewards long-term holders with additional DPX
            over time.
          </p>
        </div>

        {/* Q2 */}
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
            On which blockchain does DPX live?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            DPX is designed as a BEP-20 token on the{" "}
            <strong>BNB Smart Chain (BSC)</strong>, chosen for its low fees,
            fast confirmation times and strong ecosystem of wallets and DeFi
            tools.
          </p>
        </div>

        {/* Q3 */}
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
            Is there a presale or private round?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            The current vision is to avoid complicated presale structures and
            focus on transparent distribution and liquidity. Any future sale or
            allocation plan will be communicated clearly via the official
            DashPayX announcement channels.
          </p>
        </div>

        {/* Q4 */}
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
            How will staking rewards work?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            Staking is planned as an optional feature. Holders will be able to
            lock DPX into a smart contract and earn additional DPX, with reward
            parameters (rates, lock durations, caps) defined and published
            before launch. All details will be explained in simple guides.
          </p>
        </div>

        {/* Q5 */}
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
            Is this financial advice or a guarantee of returns?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            No. Nothing about DashPayX is financial advice or a promise of
            profit. Crypto assets are highly volatile and involve risk. Always
            do your own research and only participate at a level you are
            comfortable with.
          </p>
        </div>

        {/* Q6 */}
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
            How can I stay updated on DashPayX progress?
          </h3>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
            }}
          >
            The best way to stay updated is to follow the official DashPayX
            channels: Telegram community, Telegram announcement channel and X
            (Twitter). Key updates will also be reflected on this website over
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
