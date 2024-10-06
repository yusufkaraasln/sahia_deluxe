import Link from "next/link";
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
                    <Link target="_parent" href="/">
                      Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link target="_parent" href="rooms">
                      Odalar &amp; Süitler
                    </Link>
                  </li>
                  <li>
                    <Link target="_parent" href="restaurant">
                      Restoran
                    </Link>
                  </li>

                  <li>
                    <Link target="_parent" href="/aboutus">
                      Otel Hakkında
                    </Link>
                  </li>
                  <li>
                    <Link target="_parent" href="contact">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-column footer-contact">
                <h3 className="footer-title">İletişim</h3>
                <p className="footer-contact-text">
                İlmiye, kahraman 1 sokak A Blok No : 57/1, 54600
                  <br />
                  Sapanca/Sakarya
                </p>
                <div className="footer-contact-info">
                  <p className="footer-contact-phone">
                    <span className="flaticon-call" /> 0850 450 9654
                  </p>
                  <p className="footer-contact-mail">
                    info@sahiadeluxe.com
                  </p>
                </div>
                <div className="footer-about-social-list">
                  <Link href="https://instagram.com/sahiadeluxesapanca">
                    <i className="ti-instagram" />
                  </Link>
                  
                  
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
