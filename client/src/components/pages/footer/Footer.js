import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerInfo">
        <div>
          <div className="footerLinkItems">
            <h3>ABI | Rosa Gomes</h3>
            <p>Contribuite to keep the project alive</p>
          </div>
        </div>

        <div className="footerLinksWrapper">
          <div className="footerLinkItems">
            <h3>Our partners</h3>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.fundacaoculturaldecuritiba.com.br/"
              >
                <img
                  className="footerLogo"
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
                  className="footerLogo"
                  src="https://pbstyledk.files.wordpress.com/2022/05/prefeitura.png"
                  alt="CWB Hall Logo"
                />
              </a>
            </div>
          </div>

          <div className="footerLinkItems">
            <h3>Contact us</h3>
            <p>Phone: +55 41 9997-4578</p>
            <p>tiarosagomes@gmail.com</p>
          </div>

          <div className="footerLinkItems">
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

      <section className="soMeArea">
        <div className="soMeWrapper">
          <small className="devRights">PFB., © 2021</small>

          <div className="soMeIcons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100007148107240&sk=photos"
              className="soMeLink"
            >
              <BsFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="soMeLink"
              href="https://instagram.com/rosa.gomes.79677?igshid=YmMyMTA2M2Y="
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="soMeLink"
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
