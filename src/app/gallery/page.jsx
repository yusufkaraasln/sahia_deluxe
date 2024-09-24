import React from "react";
import SideBar from "../../components/SideBar";

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
                <h5>Images &amp; Videos</h5>
                <h1>Our Gallery</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Image Gallery */}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">Images</div>
                <div className="section-title">Image Gallery</div>
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
                <div className="section-subtitle">Videos</div>
                <div className="section-title">Video Gallery</div>
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
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-column footer-about">
                    <h3 className="footer-title">About Hotel</h3>
                    <p className="footer-about-text">
                      Welcome to the best three-star apart hotel in New York.
                      Hotel elementum sesue the aucan aliquam nusto in sapien
                      rutrum volutpat.
                    </p>
                    <div className="footer-language">
                      {" "}
                      <i className="lni ti-world" />
                      <select onchange="location = this.value;">
                        <option value="http://duruthemes.com/">English</option>
                        <option value="http://duruthemes.com/">German</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 offset-md-1">
                  <div className="footer-column footer-explore clearfix">
                    <h3 className="footer-title">Explore</h3>
                    <ul className="footer-explore-list list-unstyled">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="rooms.html">Rooms &amp; Suites</a>
                      </li>
                      <li>
                        <a href="restaurant.html">Restaurant</a>
                      </li>
                      <li>
                        <a href="spa-wellness.html">Spa &amp; Wellness</a>
                      </li>
                      <li>
                        <a href="about.html">About Hotel</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-column footer-contact">
                    <h3 className="footer-title">Contact</h3>
                    <p className="footer-contact-text">
                      1616 Broadway NY, New York 10001
                      <br />
                      United States of America
                    </p>
                    <div className="footer-contact-info">
                      <p className="footer-contact-phone">
                        <span className="flaticon-call" /> 855 100 4444
                      </p>
                      <p className="footer-contact-mail">info@apartments.com</p>
                    </div>
                    <div className="footer-about-social-list">
                      {" "}
                      <a href="#">
                        <i className="ti-instagram" />
                      </a>{" "}
                      <a href="#">
                        <i className="ti-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="ti-youtube" />
                      </a>{" "}
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="ti-pinterest" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-bottom-inner">
                    <p className="footer-bottom-copy-right">
                      © Copyright 2024 by <a href="#">DuruThemes.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default page;
