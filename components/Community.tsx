// components/Community.tsx

const Community = () => {
  return (
    <section
      id="community"
      style={{
        padding: "60px 16px",
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
          opacity: 0.85,
          marginBottom: "32px",
        }}
      >
        DashPayX will grow community-first. Join our official channels to follow development
        updates, exchange listings, staking updates, roadmap execution and real-world payment adoption.
      </p>

      {/* Buttons Row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <a
          href="https://t.me/DashPayX_Community"
          target="_blank"
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

      {/* QR Codes Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
          justifyItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Telegram Community QR */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/DashPayX_Community"
            alt="Telegram Community QR"
            style={{ width: "160px", borderRadius: "8px" }}
            referrerPolicy="no-referrer"
          />
          <p style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>
            Telegram Community
          </p>
        </div>

        {/* Telegram Announcement QR */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/DashPayX_DPX"
            alt="Telegram Announcements QR"
            style={{ width: "160px", borderRadius: "8px" }}
            referrerPolicy="no-referrer"
          />
          <p style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>
            Announcements Channel
          </p>
        </div>

        {/* X Twitter QR */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://x.com/DashX47145"
            alt="X Twitter QR"
            style={{ width: "160px", borderRadius: "8px" }}
            referrerPolicy="no-referrer"
          />
          <p style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>
            X / Twitter
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          opacity: 0.75,
          marginTop: "12px",
        }}
      >
        For partnership or business inquiries, please email:{" "}
        <a href="mailto:hello@dashpayx.net" style={{ textDecoration: "underline" }}>
          hello@dashpayx.net
        </a>
      </p>
    </section>
  );
};

export default Community;
