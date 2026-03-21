import React from "react";
import { socialLinks } from "../../data/index";

const Footer = () => {
  return (
    <footer className="margin-t-80">
      <div className="container">
        <div className="ms-footer-detail">
          <div className="ms-copy">
            Hak Cipta ©{" "}
            <a className="site-name" href="index.html">
              Irvan Sindy
            </a>{" "}
            2026
          </div>
          <div className="ms-social">
            <ul>
              <li>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
