import React from "react";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";

const restaurant = () => {
  return (
    <>
      <PreLoader></PreLoader>
      <ScrollToTop></ScrollToTop>
      <SideBar></SideBar>
      <div id="cappa-main">
        {/* Restoran Kaydırıcı */}
        <header className="header slider">
          <div className="owl-carousel owl-theme">
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/3.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/1.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/2.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/4.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/5.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/6.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/7.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/8.jpg"
            />
          </div>
        </header>
        {/* Restoran İçeriği */}
        <section className="rooms-page section-padding" data-scroll-index={1}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-12 text-center">
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <div className="section-subtitle">Duyular için Bir Deneyim</div>
                <div className="section-title">Restoran</div>
                <p className="mb-30">
                The Green Park Sapanca, mükemmel mutfağı ve eşsiz ambiyansı ile öne çıkmaktadır. Özenle hazırlanmış, her damak tadına hitap eden sabah kahvaltısı, akşam yemeğine ek olarak seçkin lezzetlerden oluşan beş çayı ile büfemizde kaliteli içeriklerin tadını çıkarabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>
       


        <Footer />
      </div>
    </>
  );
};

export default restaurant;
