import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "@/components/Footer";
import PromoVideo from "@/components/PromoVideo";
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
                <h1>Hakkımızda</h1>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <section className="about section-padding pb-0">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              >
                <div className="section-subtitle">Hakkımızda</div>
                <div className="section-title">
                  Sapanca Gölü Manzaralı Lüks Otel
                </div>
                <p>
                  Sahia Deluxe Sapanca, göz alıcı Sapanca Gölü manzarasıyla sizi
                  karşılamaktan mutluluk duyuyor. Her odanın kendine ait
                  havuzuyla, konforun ve lüksün tadını çıkarabileceğiniz en iyi
                  otel deneyimini sunuyoruz.
                </p>
                <p>
                  Konuklarımız için tasarlanmış odalarımız, modern mimarisi ve
                  zarif dekorasyonuyla size evinizdeki konforu aratmayacak.
                  Yıldızlı gökyüzünün altında, huzur dolu bir tatil için sizleri
                  bekliyoruz.
                </p>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-call" />
                  </div>
                  <div className="text">
                    <p className="color-2">Bilgi için</p>
                    <a href="tel:855-100-4444">855 100 4444</a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 animate-box"
                data-animate-effect="fadeInUp"
              >
                <img
                  src="img/about.jpg"
                  alt="Hakkımızda"
                  className="mt-90 mb-30"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 animate-box"
                data-animate-effect="fadeInUp"
              >
                <img src="img/about2.jpg" alt="Hakkımızda" />
              </div>
            </div>
          </div>
        </section>
        {/* Story */}
        <section className="about section-padding">
          <div className="container">
            <div className="row mb-120">
              <div
                className="col-lg-6 col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="img left">
                  <img src="img/about3.jpg" alt="Hikayemiz" />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 valign animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h6>Sapanca Manzarası</h6>
                    <h4>Butik Otelimizin Hikayesi</h4>
                    <p>
                      Sahia Deluxe Sapanca, doğayla iç içe bir deneyim sunmak
                      amacıyla kurulmuştur. Otelimizin temel prensibi,
                      konuklarımızın rahatlığı ve memnuniyetidir. Her ayrıntıyı
                      düşünerek tasarladığımız odalarımızla, sizlere unutulmaz
                      bir tatil deneyimi yaşatmayı hedefliyoruz.
                    </p>
                    <p>
                      Doğanın kalbinde yer alan otelimiz, huzurlu atmosferi ve
                      sunduğu olanaklarla misafirlerine sadece bir konaklama
                      değil, aynı zamanda bir yaşam deneyimi sunmaktadır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-md-12 order2 valign animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h6>Yiyecek &amp; İçecek</h6>
                    <h4>Restoran &amp; Bar</h4>
                    <p>
                      Restoranımız, taze ve yerel malzemelerle hazırlanan zengin
                      menüsü ile her damak zevkine hitap etmektedir. Göl
                      manzarası eşliğinde lezzetli yemeklerin tadını
                      çıkarabilirsiniz.
                    </p>
                    <p>
                      Özel etkinlikler ve kutlamalar için de ideal bir mekan
                      sunan restoranımız, sizlere benzersiz bir deneyim
                      yaşatmayı amaçlamaktadır.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 order1 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="img">
                  <img src="img/about4.jpg" alt="Restoran & Bar" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoVideo></PromoVideo>

        {/* Facilties */}
        <section className="facilties section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-30">
                <div className="section-subtitle">Hizmetlerimiz</div>
                <div className="section-title">Otel Olanakları</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-world" />
                  <h5>Karşılama &amp; Ulaşım</h5>
                  <p>
                    Misafirlerimize sunduğumuz karşılama hizmeti ile otelimize
                    adım attığınız andan itibaren kendinizi özel
                    hissedeceksiniz.
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-world" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-car" />
                  <h5>Otopark Hizmeti</h5>
                  <p>
                    Geniş otopark alanımızla araçlarınızı güvenle park
                    edebilirsiniz. Konfor ve güvenliği bir arada sunuyoruz.
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-car" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-bed" />
                  <h5>Oda Servisi</h5>
                  <p>
                    Odanızın konforunda yemek ve içeceklerinizi sipariş
                    edebilirsiniz. Rahatlığınız bizim için öncelikli!
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-bed" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-swimming" />
                  <h5>Açık Yüzme Havuzu</h5>
                  <p>
                    Güneşin ve göl manzasının tadını çıkarırken serinlemek için
                    havuzumuza davetlisiniz. Dinlendirici bir gün için ideal bir
                    alan!
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-swimming" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-wifi" />
                  <h5>Fiber İnternet</h5>
                  <p>
                    Hızlı ve kesintisiz internet bağlantımızla her zaman
                    bağlantıda kalın. İşlerinizi ve iletişiminizi aksatmadan
                    sürdürebilirsiniz.
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-wifi" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <span className="flaticon-breakfast" />
                  <h5>Kahvaltı</h5>
                  <p>
                    Güne enerjik başlamak için zengin kahvaltı menümüzden
                    faydalanın. Taze ve lezzetli seçeneklerle dolu bir sofraya
                    davetlisiniz!
                  </p>
                  <div className="facility-shape">
                    <span className="flaticon-breakfast" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme">
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/1.png" alt="" />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/2.png" alt="" />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/3.png" alt="" />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/4.png" alt="" />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/5.png" alt="" />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/6.png" alt="" />
                    </a>
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
