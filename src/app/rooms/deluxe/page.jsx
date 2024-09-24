import Footer from "@/components/Footer";
import PromoVideo from "@/components/PromoVideo";
import SideBar from "@/components/SideBar";
import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

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
              data-background="/img/slider/1.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/slider/2.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="/img/slider/3.jpg"
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
                <div className="section-title">Aile Odası</div>
              </div>
              <div className="col-lg-8 col-md-12">
                <p className="mb-30">
                  Otel, konuklarına rahat bir deneyim sunmak amacıyla
                  tasarlanmıştır. Ferah odalarımız ve güzel manzaramızla
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
                            Giriş işlemi 09:00 - istediğiniz zaman yapılabilir
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="page-list-icon">
                          <span className="ti-check" />
                        </div>
                        <div className="page-list-text">
                          <p>Erken giriş, müsaitliğe bağlıdır</p>
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
                          <p>Çıkış işlemi öğleye kadar yapılmalıdır</p>
                        </div>
                      </li>
                      <li>
                        <div className="page-list-icon">
                          <span className="ti-check" />
                        </div>
                        <div className="page-list-text">
                          <p>Hızlı çıkış imkanı bulunmaktadır</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <h6>Özel Giriş Talimatları</h6>
                    <p>
                      Misafirler, varışlarından 5 gün önce giriş talimatlarını
                      içeren bir e-posta alacaklardır; resepsiyon personeli,
                      varışta misafirleri karşılayacaktır. Daha fazla bilgi
                      için, lütfen rezervasyon onayındaki iletişim bilgilerini
                      kullanarak mülk ile irtibata geçin.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h6>Evcil Hayvanlar</h6>
                    <p>Evcil hayvanlar kabul edilmemektedir.</p>
                  </div>
                  <div className="col-md-12">
                    <h6>Çocuklar ve Ekstra Yataklar</h6>
                    <p>
                      Çocuklar hoş karşılanmaktadır. Çocuklar, mevcut yatakları
                      kullanarak ücretsiz konaklayabilir; çocuklar ücretsiz
                      kahvaltı almayabilir. Katlanır/ekstra yataklar günde 10 $
                      karşılığında temin edilmektedir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-12">
                <h6>Amenities (Olanaklar)</h6>
                <ul className="list-unstyled page-list mb-30">
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-group" />
                    </div>
                    <div className="page-list-text">
                      <p>1-2 Kişi</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-wifi" />
                    </div>
                    <div className="page-list-text">
                      <p>Ücretsiz Wifi</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-clock-1" />
                    </div>
                    <div className="page-list-text">
                      <p>200 sqft oda</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-breakfast" />
                    </div>
                    <div className="page-list-text">
                      <p>Kahvaltı</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-towel" />
                    </div>
                    <div className="page-list-text">
                      <p>Havlular</p>
                    </div>
                  </li>
                  <li>
                    <div className="page-list-icon">
                      <span className="flaticon-swimming" />
                    </div>
                    <div className="page-list-text">
                      <p>Yüzme Havuzu</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PromoVideo></PromoVideo>
        {/* Similiar Room */}
        <section className="rooms2 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">
                  <span>Sahia Deluxe Sapanca</span>
                </div>
                <div className="section-title">Benzer Odalar</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/1.jpg" alt="Junior Suite" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">150$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Junior Süit</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/2.jpg" alt="Family Room" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">200$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Aile Odası</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/3.jpg" alt="Double Room" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">250$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Çift Kişilik Oda</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/4.jpg" alt="Deluxe Room" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">300$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Deluxe Oda</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/5.jpg" alt="Superior Room" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">150$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Superior Oda</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src="/img/rooms/6.jpg" alt="Wellness Room" />
                    </div>
                    <span className="category">
                      <a href="services.html">Rezervasyon Yap</a>
                    </span>
                    <div className="con">
                      <h6>
                        <a href="room-details.html">400$ / Gece</a>
                      </h6>
                      <h5>
                        <a href="room-details.html">Wellness Oda</a>
                      </h5>
                      <div className="row facilities">
                        <div className="col col-md-7">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                            </li>
                            <li>
                              <i className="flaticon-bath" />
                            </li>
                            <li>
                              <i className="flaticon-breakfast" />
                            </li>
                            <li>
                              <i className="flaticon-towel" />
                            </li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end">
                          <div className="permalink">
                            <a href="room-details.html">
                              Detaylar <i className="ti-arrow-right" />
                            </a>
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

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
