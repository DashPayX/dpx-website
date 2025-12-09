// components/Community.tsx

const Community = () => {
  return (
    <section
      id="community"
      style={{
        padding: "60px 16px 40px",
        maxWidth: "960px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "12px",
        }}
      >
        Join the DashPayX Community
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        DashPayX will grow community-first. Join our official channels to follow
        development updates, exchange listings, staking updates, roadmap
        execution and real-world payment adoption.
      </p>

      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "28px",
        }}
      >
        <a
          href="https://t.me/DashPayX_Community"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "14px",
          }}
        >
          Telegram Community
        </a>

        <a
          href="https://t.me/DashPayX_DPX"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "14px",
          }}
        >
          Announcement Channel
        </a>

        <a
          href="https://x.com/DashX47145"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "14px",
          }}
        >
          X (Twitter)
        </a>
      </div>

      {/* QR row using ONLINE QR generator (no local files needed) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "18px",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ft.me%2FDashPayX_Community"
            alt="Telegram Community QR"
          />
          <p style={{ fontSize: "12px", opacity: 0.75, marginTop: "6px" }}>
            Telegram Community
          </p>
        </div>

        <div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ft.me%2FDashPayX_DPX"
            alt="Telegram Announcements QR"
          />
          <p style={{ fontSize: "12px", opacity: 0.75, marginTop: "6px" }}>
            Announcements Channel
          </p>
        </div>

        <div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fx.com%2FDashX47145"
            alt="X / Twitter QR"
          />
          <p style={{ fontSize: "12px", opacity: 0.75, marginTop: "6px" }}>
            X / Twitter
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          opacity: 0.75,
        }}
      >
        For partnership or business inquiries, please email:{" "}
        <a href="mailto:hello@dashpayx.net">hello@dashpayx.net</a>
      </p>
    </section>
  );
};

export default Community;
