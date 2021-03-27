import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function Footer() {
  const location = useLocation();
  return (
    <>
      <footer className="footer">
        <Link to="/">
          <div className="footerText" active={location.pathname === "/"}>
            Rechner
          </div>
        </Link>
        <Link to="/valuepage">
          <div
            className="footerText"
            active={location.pathname === "/valuepage"}
          >
            Meine Werte
          </div>
        </Link>
        <Link to="/about">
          <div className="footerText" active={location.pathname === "/about"}>
            Über TareBears
          </div>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
