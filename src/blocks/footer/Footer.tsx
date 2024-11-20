import React from "react";
import { SendImg } from "../../img/index";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="footer-input"
        />
        <img src={SendImg} alt="Send" className="SendImg" />
      </div>
      <div className="navbar-footer">
        <ul className="list-footer">
          <li className="list-title">Company</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
        <ul className="list-footer">
          <li className="list-title">Support</li>
          <li>Help center</li>
          <li>Terms of service</li>
          <li>Legal</li>
          <li>Privacy policy</li>
          <li>Status</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
