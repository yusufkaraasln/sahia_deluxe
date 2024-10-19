import Footer from "@/components/Footer";
import PromoVideo from "@/components/PromoVideo";
import SideBar from "@/components/SideBar";
import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";
import SimiliarRoom from "@/components/SimiliarRoom";

const page = () => {
  return (
    <>
      <PreLoader></PreLoader>
      <ScrollToTop></ScrollToTop>
      <SideBar></SideBar>
      <div id="cappa-main">
        {/* Room Page Slider */}
        <header className="header slider">
          <div className="owl-carousel owl-theme">
            {/* Görüntü üzerindeki opasite, "data-overlay-dark="sayı" ile yapılır. Sayıları 0-9 arasında değiştirebilirsiniz. */}
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/2.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/3.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/6.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/5.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/1.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/rooms/4.jpg"
            />
            
          </div>
        </header>
        {/* Oda İçeriği */}
        <section className="rooms-page section-padding" data-scroll-index={1}>
          <div className="container">
            {/* proje içeriği */}
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <div className="section-subtitle">Sahia Deluxe Sapanca</div>
                <div className="section-title">1&#43;1 Bahçeli, Isıtmalı Havuzlu Villalar</div>
              </div>
              <div className="col-lg-8 col-md-12">
                <p className="mb-30">
                  Otel, konuklarına rahat bir deneyim sunmak amacıyla
                  tasarlanmıştır. Ferah villalarımız ve güzel manzaramızla
                  misafirlerimizi ağırlamaktan mutluluk duyarız.
                </p>
                <p className="mb-30">
                  Konuklar, keyifli bir tatil geçirmek için ihtiyaç duyacakları
                  tüm olanaklara sahiptir. Bizimle konaklayarak Sapanca&apos;nın
                  doğal güzelliklerinin tadını çıkarabilirsiniz.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6>Giriş</h6>
                    <ul className="list-unstyled page-list mb-30">
                      <li>
                        <div className="page-list-icon">
                          <span className="ti-check" />
                        </div>
                        <div className="page-list-text">
                          <p>
                            Giriş saati 15.00
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Çıkış</h6>
                    <ul className="list-unstyled page-list mb-30">
                      <li>
                        <div className="page-list-icon">
                          <span className="ti-check" />
                        </div>
                        <div className="page-list-text">
                          <p>Çıkış saati 11.00</p>
                        </div>
                      </li>

                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h6>Evcil Hayvanlar</h6>
                    <p>Evcil hayvan yalnızca ev ve bahçe alanlarında kabul edilmekte olup, restoran alanına alınmamaktadır.</p>
                  </div>
                  <div className="col-md-12">
                    <h6>Çocuk Misafir Politikamız</h6>
                    <p>
                      0-12 yaş 1 çocuk ücretsiz konaklayabilir. 2. çocuk için ekstra ücretlendirme yapılacaktır. Detaylı bilgi için rezervasyon bölümü ile iletişim kurulmalıdır.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-12">
                <h6>Amenities (Olanaklar)</h6>
                <ul className="list-unstyled page-list mb-30">
                  <li>

                    <div className="page-list-text">
                      <p>2-3 Kişi</p>
                    </div>
                  </li>
                  <li>

                    <div className="page-list-text">
                      <p>Ücretsiz Wifi</p>
                    </div>
                  </li>

                  <li>

                    <div className="page-list-text">
                      <p>Kahvaltı</p>
                    </div>
                  </li>
                  <li>

                    <div className="page-list-text">
                      <p>Havlular</p>
                    </div>
                  </li>
                 
                  <li>
                    <div className="page-list-text">
                      <p>60 m2 kapalı alan, yarı korumalı 50-100 m2 bahçe alanı  </p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Isıtmalı açık havuz</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Jakuzi</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Split klima, TV, Kettle Set-up</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Salon oturma grubu, yemek masası</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Veranda oturma grubu, bahçe şezlongları</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-text">
                      <p>Çift kişilik yatak odası</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PromoVideo></PromoVideo>
        {/* Similiar Room */}
        <SimiliarRoom></SimiliarRoom>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
