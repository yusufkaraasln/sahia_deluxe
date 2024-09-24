import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="about section-padding" data-scroll-index={1}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            <div className="section-subtitle">Hakkımızda</div>
            <div className="section-title">
              Sapanca Gölü Manzaralı Eşsiz Konaklama
            </div>
            <p>
              Sahia Deluxe Sapanca&apos;ya hoş geldiniz! Sapanca&apos;nın doğal
              güzellikleriyle çevrili bu beş yıldızlı otel, huzurlu bir tatil
              deneyimi sunmak için tasarlandı.
            </p>
            <p>
              Her odada özel havuzunuzla, göl manzarası eşliğinde konforu ve
              lüksü bir arada yaşayacaksınız. Misafirlerimize sunduğumuz
              kaliteli hizmetle, unutulmaz anılar biriktirmenizi sağlamak için
              buradayız.
            </p>
            <div className="butn-dark mt-30">
              <Link target="_parent" href="/aboutus">
                <span>Daha Fazla Bilgi</span>
              </Link>
            </div>
          </div>
          <div
            className="col col-lg-3 col-md-6 animate-box"
            data-animate-effect="fadeInUp"
          >
            <img src="img/about.jpg" alt="" className="mt-90 mb-30" />
          </div>
          <div
            className="col col-lg-3 col-md-6 animate-box"
            data-animate-effect="fadeInUp"
          >
            <img src="img/about2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
