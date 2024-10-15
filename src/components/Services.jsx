import React from "react";

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <div className="section-subtitle">
              <span>Ne Yapıyoruz</span>
            </div>
            <div className="section-title">Hizmetlerimiz</div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="img left">
              <a href="#">
                <img src="img/restaurant/3.jpg" alt="Restoran ve Bar" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 valign animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="content">
              <div className="date">
                <h1>01</h1>
              </div>
              <div className="cont">
                <h5>Restoran</h5>
                <p>
                  Konuklarımıza özel hazırlanmış menülerimizle, keyifli bir
                  yemek deneyimi sunuyoruz. Barımızda ise çeşitli içecek
                  seçenekleri ile güzel vakit geçirmenizi sağlıyoruz.
                </p>
                {/* <div className="butn-dark">
                  <a href="#">
                    <span>Keşfet</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 order2 valign animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="content">
              <div className="date">
                <h1>02</h1>
              </div>
              <div className="cont">
                <h5>SPA &amp; Wellness</h5>
                <p>
                  Rahatlatıcı masajlar ve wellness hizmetlerimizle ruhunuzu ve
                  bedeninizi tazeliyoruz. Kendinize bir mola vermek için
                  mükemmel bir yer.
                </p>
                {/* <div className="butn-dark">
                  <a href="#">
                    <span>Keşfet</span>
                  </a>
                </div> */}
              </div>


              
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 order1 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="img left">
              <a href="#">
                <img src="img/spa/2.jpg" alt="Spa ve Wellness" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="img left">
              <a href="#">
                <img src="img/spa/4.jpg" alt="Fitness ve Yoga" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 valign animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="content">
              <div className="date">
                <h1>03</h1>
              </div>
              <div className="cont">
                <h5>Fitness &amp; Yoga Hizmetleri</h5>
                <p>
                  Profesyonel eğitmenler eşliğinde sunulan fitness ve yoga
                  dersleri ile hem fiziksel sağlığınızı koruyun hem de zihninizi
                  dinlendirin.
                </p>
                {/* <div className="butn-dark">
                  <a href="#">
                    <span>Keşfet</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
