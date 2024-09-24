import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-column footer-about">
                <h3 className="footer-title">Hakkında</h3>
                <p className="footer-about-text">
                  Sahia Deluxe Sapanca, Sapanca Gölü’nün eşsiz manzarasında
                  huzurlu bir konaklama deneyimi sunmaktadır.
                </p>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="footer-column footer-explore clearfix">
                <h3 className="footer-title">Keşfet</h3>
                <ul className="footer-explore-list list-unstyled">
                  <li>
                    <a href="index.html">Anasayfa</a>
                  </li>
                  <li>
                    <a href="rooms.html">Odalar &amp; Süitler</a>
                  </li>
                  <li>
                    <a href="restaurant.html">Restoran</a>
                  </li>
                  <li>
                    <a href="spa-wellness.html">Spa &amp; Wellness</a>
                  </li>
                  <li>
                    <a href="about.html">Otel Hakkında</a>
                  </li>
                  <li>
                    <a href="contact.html">İletişim</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-column footer-contact">
                <h3 className="footer-title">İletişim</h3>
                <p className="footer-contact-text">
                  Sapanca Gölü, Sahia Deluxe Sapanca
                  <br />
                  Sapanca, Türkiye
                </p>
                <div className="footer-contact-info">
                  <p className="footer-contact-phone">
                    <span className="flaticon-call" /> 0850 100 4444
                  </p>
                  <p className="footer-contact-mail">
                    info@sahiadeluxesapanca.com
                  </p>
                </div>
                <div className="footer-about-social-list">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-youtube" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
