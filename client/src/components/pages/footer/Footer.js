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
              <a
                href="http://www.fundacaoculturaldecuritiba.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-logo"
                  src="https://pbstyledk.files.wordpress.com/2022/05/cwbfc.png"
                  alt="CWB Logo"
                />
              </a>
              <Link to="https://www.curitiba.pr.gov.br/">
                <img
                  className="footer-logo"
                  src="https://pbstyledk.files.wordpress.com/2022/05/prefeitura.png"
                  target="_blank"
                  alt="CWB Hall Logo"
                  rel="noopener noreferrer"
                />
              </Link>
            </div>
          </div>

          <div className="footer-link-items">
            <h3>Contact us</h3>
            <p>Phone: +55 41 9997-4578</p>
            <p>tiarosagomes@gmail.com</p>
          </div>

          <div className="footer-link-items">
            <h3>Find us</h3>
            <p>Address to be announced</p>
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
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </Link>
            <a
              href="https://www.youtube.com/channel/UCt3j9QYKfYZl6zNznFZBwZA"
              target="_blank"
              aria-label="YouTube"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
