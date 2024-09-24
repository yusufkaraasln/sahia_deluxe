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
              <div className="col-md-12 text-center mt-20">
                <h5>Fotoğraf &amp; Videolar</h5>
                <h1>Galeri</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Image Gallery */}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">Fotoğraflar</div>
                <div className="section-title">Fotoğraf Galerisi</div>
              </div>
              {/* 3 columns */}
              <div className="col-md-4 gallery-item">
                <a href="img/slider/1.jpg" title="" className="img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="img/slider/1.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a href="img/spa/2.jpg" title="" className="img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="img/spa/2.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a href="img/slider/3.jpg" title="" className="img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="img/slider/3.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              {/* 2 columns */}
              <div className="col-md-6 gallery-item">
                <a href="img/slider/2.jpg" title="" className="img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="img/slider/2.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 gallery-item">
                <a href="img/restaurant/3.jpg" title="" className="img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="img/restaurant/3.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Video Gallery */}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-30">
                <div className="section-subtitle">Videolar</div>
                <div className="section-title">Video Galerisi</div>
              </div>
              {/* 2 columns */}
              <div className="col-md-6">
                <div className="vid-area mb-30">
                  <div className="vid-icon">
                    {" "}
                    <img src="img/slider/1.jpg" alt="YouTube" />
                    <a
                      className="video-gallery-button vid"
                      href="https://youtu.be/er2-6hpDWV0"
                    >
                      {" "}
                      <span className="video-gallery-polygon">
                        <i className="ti-control-play" />
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="vid-area mb-30">
                  <div className="vid-icon">
                    {" "}
                    <img src="img/restaurant/3.jpg" alt="Vimeo" />
                    <a
                      className="video-gallery-button vid"
                      href="https://youtu.be/er2-6hpDWV0"
                    >
                      {" "}
                      <span className="video-gallery-polygon">
                        <i className="ti-control-play" />
                      </span>{" "}
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
