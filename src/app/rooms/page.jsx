import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <SideBar></SideBar>
      <div id="cappa-main">
        {/* Header Banner */}
        <div
          className="banner-header section-padding valign bg-img bg-fixed bg-position-bottom"
          data-overlay-dark={6}
          data-background="img/slider/1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center caption mt-20">
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <h5>Sahia Deluxe Sapanca</h5>
                <h1>Odalar &amp; Süitler</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Odalar */}
        <section className="room section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-90">
                <div className="rooms">
                  <figure>
                    <img src="img/slider/1.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <h4>
                      <a href="room-details.html">Junior Süit</a>
                    </h4>
                    <p>
                      Geniş, ferah odalar, şık dekorasyon ve ahşap zemin ile
                      konforlu bir konaklama.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Kişilik
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Ücretsiz Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> İkiz Yatak
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Kahvaltı
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Oda
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Özel Havuz
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        150$ <span>/ Gece</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Detaylar</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-90">
                <div className="rooms left">
                  <figure>
                    <img src="img/slider/2.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <h4>
                      <a href="room-details.html">Aile Odası</a>
                    </h4>
                    <p>
                      Ailenizle keyifli vakit geçirebileceğiniz, geniş ve ferah
                      odalar.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Kişilik
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Ücretsiz Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> İkiz Yatak
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Kahvaltı
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Oda
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Özel Havuz
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        200$ <span>/ Gece</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Detaylar</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-90">
                <div className="rooms">
                  <figure>
                    <img src="img/slider/3.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <h4>
                      <a href="room-details.html">Çift Kişilik Oda</a>
                    </h4>
                    <p>
                      Geniş ve ferah, modern tasarımıyla keyifli bir konaklama
                      deneyimi.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 2-3 Kişilik
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Ücretsiz Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> İkiz Yatak
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Kahvaltı
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Oda
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Özel Havuz
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        250$ <span>/ Gece</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Detaylar</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="rooms left">
                  <figure>
                    <img src="img/slider/4.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <h4>
                      <a href="room-details.html">Deluxe Oda</a>
                    </h4>
                    <p>
                      Lüks ve konforun buluştuğu, Sapanca Gölü manzaralı odalar.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 2-4 Kişilik
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Ücretsiz Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> İkiz Yatak
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Kahvaltı
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Oda
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Özel Havuz
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        300$ <span>/ Gece</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Detaylar</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;
