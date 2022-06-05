import React from "react";
import "./Footer.css";
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
                target="_blank"
                rel="noreferrer"
                href="http://www.fundacaoculturaldecuritiba.com.br/"
              >
                <img
                  className="footer-logo"
                  src="https://pbstyledk.files.wordpress.com/2022/05/cwbfc.png"
                  alt="CWB Logo"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.curitiba.pr.gov.br/"
              >
                <img
                  className="footer-logo"
                  src="https://pbstyledk.files.wordpress.com/2022/05/prefeitura.png"
                  alt="CWB Hall Logo"
                />
              </a>
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
            <p>Boqueirão/PR</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/g1brqehdb5JggVco9"
            >
              Map
            </a>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">PFB., © 2021</small>

          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100007148107240&sk=photos"
              className="social-icon-link"
            >
              <BsFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              href="https://instagram.com/rosa.gomes.79677?igshid=YmMyMTA2M2Y="
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              href="https://www.youtube.com/channel/UCt3j9QYKfYZl6zNznFZBwZA"
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
