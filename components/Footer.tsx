// components/Footer.tsx

const Footer = () => {
  return (
    <footer
      style={{
        padding: '24px 16px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '40px',
        fontSize: '14px',
        opacity: 0.8,
      }}
    >
      © {new Date().getFullYear()} DashPayX (DPX). All rights reserved.
    </footer>
  );
};

export default Footer;
