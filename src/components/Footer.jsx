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
                The Green Park Sapanca&apos;ya hoş geldiniz! Sapanca&apos;nın doğal güzellikleriyle çevrili bu 5 yıldızlı hizmet, huzurlu bir tatil deneyimi sunmak için tasarlandı.
                <br />
                <br />
                Bahçenizde kendinize ait, özel ısıtmalı havuzunuz ile göl ve doğa manzarası eşliğinde konforu ve lüksü bir arada yaşayacaksınız. Misafirlerimize sunduğumuz kaliteli hizmetle, unutulmaz anılar biriktirmenizi sağlamak için buradayız.
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
                      Villalar  
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
                The Green Park Sapanca Otel <br />
                Kahraman 1 sokak No:57/1  İlmiye/Sapanca SAKARYA
                </p>
                <div className="footer-contact-info">
                  <p className="footer-contact-phone">
                    <span className="flaticon-call" /> 0264 299 0144
                  </p>
                  <p className="footer-contact-mail">
                    info@thegreenparksapanca.com
                  </p>
                  <br />
                  <p className="footer-contact-mail">
                  rezervasyon@thegreenparksapanca.com
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
