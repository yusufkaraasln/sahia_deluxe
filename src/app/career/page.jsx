import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
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
              <div className="col-md-12 text-center mt-20">
                <h1>İK Kariyer</h1>
              </div>
            </div>
          </div>
        </div>
        {/* İletişim */}
        <section className="contact section-padding">
          <div className="container">
            <div className="row mb-90">
              <div className="col-lg-5 col-md-12 mb-60">
                <h3>Sahia Deluxe Sapanca</h3>
                <p>
                  Sapanca&apos;nın huzur dolu ortamında konforlu bir tatil deneyimi
                  sunuyoruz. Konuklarımız için her zaman en iyi hizmeti
                  sağlamak için ekibimize katılabilirsiniz!
                </p>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-call" />
                  </div>
                  <div className="text">
                    <p>Rezervasyon</p>{" "}
                    <a href="tel:855-100-4444">855 100 4444</a>
                  </div>
                </div>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-envelope" />
                  </div>
                  <div className="text">
                    <p>Email Bilgisi</p>{" "}
                    <a href="mailto:info@sahiadeluxe.com">
                      info@sahiadeluxe.com
                    </a>
                  </div>
                </div>
                <div className="reservations">
                  <div className="icon">
                    <span className="flaticon-location-pin" />
                  </div>
                  <div className="text">
                    <p>Adres</p> Sapanca, Sakarya, Türkiye
                    <br />
                    Sahia Deluxe Sapanca
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-12 mb-30">
                <h3>İletişime Geçin</h3>
                <form method="post" className="contact__form" action="mail.php">
                  {/* form message */}
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: "none" }}
                        role="alert"
                      >
                        {" "}
                        Mesajınız başarıyla gönderildi.{" "}
                      </div>
                    </div>
                  </div>
                  {/* form elements */}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Adınız *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="E-posta Adresiniz *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Telefon Numaranız *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Konu *"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder="Mesajınız *"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-dark2">
                        <span>Mesaj Gönder</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Harita Bölümü */}
            <div className="row">
              <div
                className="col-md-12 map animate-box"
                data-animate-effect="fadeInUp"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d30.1022!3d40.7542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca0d68c2d2a7%3A0x91d4b7d949d85c4d!2zU2FwYW5jYSwgU2FrYXJ5YSwgVHVya2V5!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
                  width="100%"
                  height={600}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
