import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div>
          <div className="footer-link-items">
            <h3>ABI | Rosa Gomes</h3>
            <p>Contribuite to keep the project alive</p>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h3>Our partners</h3>
            <div>
              <Link to="/">
                <img className="footer-logo" src="./images/cwbFC.png" />
              </Link>
              <Link to="/">
                <img className="footer-logo" src="./images/prefeitura.png" />
              </Link>
            </div>
          </div>

          <div className="footer-link-items">
            <h3>Contact us</h3>
            <p>Phone: 4545454545</p>
            <p>email@email.com</p>
          </div>

          <div className="footer-link-items">
            <h3>Find us</h3>
            <p>Address street 45</p>
            <p>Curitiba/PR</p>
            <Link to="/">Map</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">PFB., © 2021</small>

          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <BsFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"/"}
              target="_blank"
              aria-label="Youtube"
            >
              <BsYoutube />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
