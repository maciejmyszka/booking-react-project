import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <FooterTop />
        <FooterBottom />
      </div>
      <FooterNav />
    </>
  );
};

export default Footer;
