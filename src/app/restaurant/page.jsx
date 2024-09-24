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
                <div className="section-title">Restoran ve Bar</div>
                <p className="mb-30">
                  Sahia Deluxe Sapanca, mükemmel mutfağı ve eşsiz ambiyansı ile
                  öne çıkmaktadır. Geniş yemek odası, mutfak sanatlarının
                  sergilendiği açık stüdyo mutfağı ile donatılmıştır; bu sayede
                  hem görsel hem de işitsel bir deneyim yaşarsınız. Menü, klasik
                  Türk lezzetlerinin yanı sıra, Asya ve Avrupa mutfaklarından
                  esinlenerek hazırlanmış yaratıcı yemekleri de içermektedir.
                </p>
                <h6>Açılış Saatleri</h6>
                <div className="text-center">
                  <p>Kahvaltı: 07.00 - 11.00 (her gün)</p>
                  <p>Öğle: 12.00 - 14.00 (her gün)</p>
                  <p>Akşam: 18.30&apos;dan itibaren, son sipariş 22.00 (her gün)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Restoran Menüsü */}
        <section id="menu" className="restaurant-menu menu section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">
                  <span>Daireler</span>
                </div>
                <div className="section-title">Restoran Menüsü</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="tabs-icon col-md-10 offset-md-1 text-center">
                    <div className="owl-carousel owl-theme">
                      <div id="tab-1" className="active item">
                        <h6>Başlangıçlar</h6>
                      </div>
                      <div id="tab-2" className="item">
                        <h6>Ana Yemekler</h6>
                      </div>
                      <div id="tab-3" className="item">
                        <h6>Salatalar</h6>
                      </div>

                      <div id="tab-5" className="item">
                        <h6>Kahvaltı</h6>
                      </div>
                      <div id="tab-6" className="item">
                        <h6>Tatlılar</h6>
                      </div>
                    </div>
                  </div>
                  <div className="restaurant-menu-content col-md-12">
                    {/* Başlangıçlar */}
                    <div id="tab-1-content" className="cont active">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Mozzarella Dippers{" "}
                              <span className="price">27$</span>
                            </h5>
                            <p>Kızarmış mozzarella çubukları, marinara sosu</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Soğan Halkası <span className="price">32$</span>
                            </h5>
                            <p>Kızarmış soğan halkaları, tütsülenmiş aioli</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Kızarmış Jalapeno{" "}
                              <span className="price">52$</span>
                            </h5>
                            <p>Kızarmış jalapeno turşuları, cheddar sosu</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Buffalo Kanatları{" "}
                              <span className="price">37$</span>
                            </h5>
                            <p>
                              Baharatlı tavuk kanatları, mavi peynir sosu,
                              havuç, kereviz
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Chilli Con Carne{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>Baharatlı kıyma, bacon, böbrek fasulyesi</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Patates Kabuğu <span className="price">42$</span>
                            </h5>
                            <p>
                              Kızarmış patates kabukları; bacon &amp; cheddar
                              veya sebzeler
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Ana Yemekler */}
                    <div id="tab-2-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Rusty’nin Burgeri{" "}
                              <span className="price">27$</span>
                            </h5>
                            <p>
                              Tütsülenmiş pulled beef ribs, BBQ sos, cheddar,
                              kıtır soğan
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Cajun Balık Steak{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Cajun baharatlı seabass, kızarmış bebek
                              patatesler, yan salata
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Güney Kızartması Tavuk{" "}
                              <span className="price">52$</span>
                            </h5>
                            <p>
                              Cajun kaplamalı tavuk göğsü, patates kızartması ve
                              balzamik sos
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Yengeç Köftesi <span className="price">37$</span>
                            </h5>
                            <p>
                              Pane yapılmış yengeç köfteleri, tartar sosu, elma
                              ve fenel salatası
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Bebek Sırt Kaburga{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Bbq soslu bebek domuz kaburgaları, coleslaw,
                              patates kızartması
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Smokehouse Kombinasyonu{" "}
                              <span className="price">42$</span>
                            </h5>
                            <p>
                              Sucuk, kaburga, kızarmış tavuk, BBQ sosu, coleslaw
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Salatalar */}
                    <div id="tab-3-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Caesar Salatası <span className="price">27$</span>
                            </h5>
                            <p>Klasik Caesar salatası, parmesan, kruton</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Yengeç Salatası <span className="price">32$</span>
                            </h5>
                            <p>Taze yengeç, salatalık, avokado ve limon</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Tavuklu Salata <span className="price">52$</span>
                            </h5>
                            <p>Izgara tavuk, yeşil marul, domates, salatalık</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Kinoa Salatası <span className="price">37$</span>
                            </h5>
                            <p>Kinoa, sebzeler, nar, fındık ve limon sosu</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Akdeniz Salatası{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Feta peyniri, zeytin, domates, salatalık, soğan
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Tavuklu Cevizli Salata{" "}
                              <span className="price">42$</span>
                            </h5>
                            <p>Tavuk, ceviz, yeşil elma, sos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Şarap */}
                    <div id="tab-4-content" className="cont"></div>
                    {/* Kahvaltı */}
                    <div id="tab-5-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Omlet <span className="price">27$</span>
                            </h5>
                            <p>Taze sebzeler ve peynir ile yapılmış omlet</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Kızarmış Ekmek Tabağı{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Taze meyve, tereyağı ve reçel ile kızarmış ekmek
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Pancake <span className="price">52$</span>
                            </h5>
                            <p>Taze meyve ve akçaağaç şurubu ile pancake</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Yumurta Benedict{" "}
                              <span className="price">37$</span>
                            </h5>
                            <p>Poşe yumurta, hindi bacon, hollandaise sos</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Granola <span className="price">32$</span>
                            </h5>
                            <p>Taze meyve, yoğurt ve granola karışımı</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Müsli <span className="price">42$</span>
                            </h5>
                            <p>Taze meyve, süt ve bal ile müsli</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tatlılar */}
                    <div id="tab-6-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Cheesecake <span className="price">27$</span>
                            </h5>
                            <p>Kremalı peynirli tatlı, meyve sosu ile</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Çikolatalı Kek <span className="price">32$</span>
                            </h5>
                            <p>Sıcak çikolatalı kek, dondurma ile</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Tiramisu <span className="price">52$</span>
                            </h5>
                            <p>İtalyan kahve tatlısı, kakao ile</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Dondurma <span className="price">37$</span>
                            </h5>
                            <p>Taze meyve ile çeşitli dondurmalar</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Sütlaç <span className="price">32$</span>
                            </h5>
                            <p>Taze sütle yapılmış Türk tatlısı</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Fırın Sütlaç <span className="price">42$</span>
                            </h5>
                            <p>Fırında pişirilmiş, üzeri kızarmış sütlaç</p>
                          </div>
                        </div>
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

export default restaurant;
