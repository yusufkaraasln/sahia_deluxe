import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "@/components/Footer";
import Link from "next/link";

import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <PreLoader></PreLoader>
      <ScrollToTop></ScrollToTop>
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
                <h5>The Green Park Sapanca</h5>
                <h1>Villalar</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Villalar */}
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
                      <Link target="_parent" href="/rooms/1-plus-1">
                        1&#43;1 Bahçeli, Isıtmalı Havuzlu Villalar
                      </Link>
                    </h4>
                    <p>
                      Geniş, ferah villalar, şık dekorasyon ve ahşap zemin ile
                      konforlu bir konaklama.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" />  2-3 Kişi
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Fiber İnternet
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Bahçe Alanı
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Jakuzi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 60 m2 alan
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Isıtmalı Havuz
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                     
                      <div className="butn-dark">
                        {" "}
                        <Link target="_parent" href="/rooms/1-plus-1">
                          <span>Detaylar</span>
                        </Link>{" "}
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
                      <Link target="_parent" href="/rooms/2-plus-1">
                      2&#43;1 Bahçeli, Isıtmalı Havuzlu Villalar
                      </Link>
                    </h4>
                    <p>
                      Ailenizle keyifli vakit geçirebileceğiniz, geniş ve ferah
                      villalar.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 4-5 Kişi
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Fiber İnternet
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" />Bahçe Alanı
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Jakuzi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 85 m2 alan
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Isıtmalı Havuz
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                       
                          <li>
                            <i className="flaticon-clock-1" /> Şömine
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                     
                      <div className="butn-dark">
                        {" "}
                        <Link target="_parent" href="/rooms/2-plus-1">
                          <span>Detaylar</span>
                        </Link>{" "}
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
                      <Link target="_parent" href="/rooms/3-plus-1">
                      3&#43;1 Bahçeli, Isıtmalı Havuzlu Villalar
                      </Link>
                    </h4>
                    <p>
                      Geniş ve ferah, modern tasarımıyla keyifli bir konaklama
                      deneyimi.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 6-7 Kişi
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Fiber İnternet
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Bahçe Alan
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Jakuzi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 115 m2 alan
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Isıtmalı Havuz
                          </li>
                        </ul>
                      </div>
                      <div>

                      <ul>
                       
                       <li>
                         <i className="flaticon-clock-1" /> Şömine
                       </li>
                       
                     </ul>
                   </div>
                      
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                     
                      <div className="butn-dark">
                        {" "}
                        <Link target="_parent" href="/rooms/3-plus-1">
                          <span>Detaylar</span>
                        </Link>{" "}
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
