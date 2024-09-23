import React from "react";
import SideBar from "../../../components/SideBar";

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
              <div className="col-md-12 text-center caption mt-20">
                <h1>About Us</h1>
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
                <div className="section-subtitle">About Us</div>
                <div className="section-title">
                  A Apartment Hotel in the heart of New York
                </div>
                <p>
                  Welcome to the best five-star deluxe hotel in New York. Hotel
                  elementum suen theaucan vestibulum aliquam justo in sapien
                  rutrum volutpat donec in quis the pellentesque velit sonec id
                  velit ac arcu posuere blane.
                </p>
                <p>
                  Hotel ut nisl quam nestibulum ac quam nec odio elementum
                  sceisue the aucan ligulation. Orci varius natoque penatibus et
                  magnis dis parturient monte naete ridiculus mus nellentesque
                  habitant morbine.
                </p>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-call" />
                  </div>
                  <div className="text">
                    <p className="color-2">For information</p>{" "}
                    <a href="tel:855-100-4444">855 100 4444</a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 animate-box"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <img src="img/about.jpg" alt="" className="mt-90 mb-30" />{" "}
              </div>
              <div
                className="col-lg-3 col-md-6 animate-box"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <img src="img/about2.jpg" alt="" />{" "}
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
                  {" "}
                  <img src="img/about3.jpg" alt="" />{" "}
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 valign animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h6>Since 2007</h6>
                    <h4>The Story of Behind Our Boutique</h4>
                    <p>
                      Hotel inilla duiman at elit finibus viverra nec a lacus in
                      the nesuzin sinem misuscit non sesue in miss the aucan
                      volus.
                    </p>
                    <p>
                      Since nissuam nestibulum duru quam nec odio elementum
                      ceisue the misso varius natoque penatibus et magnis dis
                      monte. Donec tuis in the velition florya id velit ac in
                      the miss arcu posuere blane.
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
                    <h6>Eat &amp; Drink</h6>
                    <h4>Restaurant &amp; Bar</h4>
                    <p>
                      Wedding inilla duiman at elit finibus viverra nec a lacus
                      in the nesuzin sinem misuscit non sesue in miss the aucan
                      volus.
                    </p>
                    <p>
                      Event nissuam nestibulum duru quam nec odio elementum
                      ceisue the misso varius natoque penatibus et magnis dis
                      monte. Donec tuis in the velition florya id velit ac in
                      the miss arcu posuere blane.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 order1 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="img">
                  {" "}
                  <img src="img/about4.jpg" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Promo Video */}
        <section
          className="video-wrapper video section-padding bg-img bg-fixed"
          data-overlay-dark={5}
          data-background="img/slider/1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                {" "}
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                  <span>Apartment Hotel</span>
                </div>
                <div className="section-title">
                  <span>Promotional Video</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="text-center col-md-12">
                <a className="vid" href="https://youtu.be/er2-6hpDWV0">
                  <div className="vid-butn">
                    {" "}
                    <span className="icon">
                      <i className="ti-control-play" />
                    </span>{" "}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Team */}
        <section className="team section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">Professionals</div>
                <div className="section-title">Meet Our Team</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 owl-carousel owl-theme">
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/4.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Valentina Karla</h6>
                    <p>General Manager</p>
                    <div className="social valign">
                      <div className="full-width">
                        {" "}
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-twitter" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                        <p>valentina@hotel.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/1.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Micheal White</h6>
                    <p>Guest Service Department</p>
                    <div className="social valign">
                      <div className="full-width">
                        {" "}
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-twitter" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                        <p>micheal@hotel.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/2.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Olivia Martin</h6>
                    <p>Reservations Manager</p>
                    <div className="social valign">
                      <div className="social valign">
                        <div className="full-width">
                          {" "}
                          <a href="#">
                            <i className="ti-instagram" />
                          </a>{" "}
                          <a href="#">
                            <i className="ti-twitter" />
                          </a>{" "}
                          <a href="#">
                            <i className="ti-facebook" />
                          </a>{" "}
                          <a href="#">
                            <i className="ti-pinterest" />
                          </a>
                          <p>olivia@hotel.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/5.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Mariana Dana</h6>
                    <p>F&amp;B Manager</p>
                    <div className="social valign">
                      <div className="full-width">
                        {" "}
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-twitter" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                        <p>mariana@hotel.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/3.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Enrico Brown</h6>
                    <p>Head Chef</p>
                    <div className="social valign">
                      <div className="full-width">
                        {" "}
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-twitter" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                        <p>enrico@hotel.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/team/6.jpg" alt="" />{" "}
                  </div>
                  <div className="info">
                    <h6>Victoria Dan</h6>
                    <p>Meetings and Events Manager</p>
                    <div className="social valign">
                      <div className="full-width">
                        {" "}
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-twitter" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>{" "}
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                        <p>victoria@hotel.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Facilties */}
        <section className="facilties section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-30">
                <div className="section-subtitle">Our Services</div>
                <div className="section-title">Hotel Facilities</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-world" />
                  <h5>Pick Up &amp; Drop</h5>
                  <p>
                    We’ll pick up from airport while you comfy on your ride mus
                    habitan.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-world" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-car" />
                  <h5>Parking Space</h5>
                  <p>
                    Fusce tincidunt nis ace park norttito sit amet space
                    nellentes habitan.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-car" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-bed" />
                  <h5>Room Service</h5>
                  <p>
                    Room tincidunt nis ace park norttito sit amet space
                    nellentes habitan.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-bed" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-swimming" />
                  <h5>Swimming Pool</h5>
                  <p>
                    Swimming pool tincidunt nise ace park norttito sit space
                    nellentes.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-swimming" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-wifi" />
                  <h5>Fibre Internet</h5>
                  <p>
                    Wifi tincidunt nis ace park norttito sit amet space
                    nellentes habitan.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-wifi" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  {" "}
                  <span className="flaticon-breakfast" />
                  <h5>Breakfast</h5>
                  <p>
                    Eat tincidunt nisa ace park norttito sit amet space
                    nellentes habitan.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="flaticon-breakfast" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testiominals */}
        <section
          className="background bg-img bg-fixed section-padding pb-0"
          data-background="img/slider/1.jpg"
          data-overlay-dark={5}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <div className="testimonials">
                  <div className="testimonials-box">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>Highly recommended!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/1.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Andreas Brown</h6> <span>Customer review</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>A Unique Apartment Hotel!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/2.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Emily White</h6> <span>Customer review</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>Highly recommended!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/3.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Daniel Martin</h6> <span>Customer review</span>
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
