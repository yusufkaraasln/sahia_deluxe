import Link from "next/link";
import React from "react";

const Rooms = () => {
  return (
    <section className="room section-padding bg-lightblue">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <div className="section-subtitle">Odalar &amp; Süitler</div>
            <div className="section-title">En İyi Deneyim İçin</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <div className="rooms">
                <figure>
                  <img src="img/slider/1.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <h4>
                    <Link target="_parent" href="/rooms/1-plus-1">1&#43;1 Evler</Link>
                  </h4>
                  <p>
                    Ferah, aydınlık misafir odaları, zarif mobilyalar ve ahşap zemin.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 1&#43;1
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
                          <i className="flaticon-clock-1" /> 200 sqft oda
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Yüzme Havuzu
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    
                    <div className="butn-dark">
                      <Link target="_parent" href="/rooms/1-plus-1">
                        <span>Detaylar</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rooms left">
                <figure>
                  <img src="img/slider/2.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <h4>
                    <Link target="_parent" href="/rooms/2-plus-1">2&#43;1 Evler</Link>
                  </h4>
                  <p>
                    Ferah, aydınlık misafir odaları, zarif mobilyalar ve ahşap zemin.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 2&#43;1
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
                          <i className="flaticon-clock-1" /> 200 sqft oda
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Yüzme Havuzu
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                   
                    <div className="butn-dark">
                      <Link target="_parent" href="/rooms/2-plus-1">
                        <span>Detaylar</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rooms">
                <figure>
                  <img src="img/slider/3.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <h4>
                    <Link target="_parent" href="/rooms/3-plus-1">3&#43;1 Evler</Link>
                  </h4>
                  <p>
                    Ferah, aydınlık misafir odaları, zarif mobilyalar ve ahşap zemin.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 3&#43;1
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
                          <i className="flaticon-clock-1" /> 200 sqft oda
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Yüzme Havuzu
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    
                    <div className="butn-dark">
                      <Link target="_parent" href="/rooms/3-plus-1">
                        <span>Detaylar</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
