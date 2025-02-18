import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#333", color: "white", textAlign: "center", padding: "10px", marginTop: "20px" }}>
      <p>&copy; {new Date().getFullYear()} MaxxFinance. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
