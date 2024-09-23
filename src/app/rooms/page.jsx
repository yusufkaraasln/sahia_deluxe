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
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <h5>The Cappa Apartments</h5>
                <h1>Rooms &amp; Suites</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Rooms */}
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
                      <a href="room-details.html">Junior Suite</a>
                    </h4>
                    <p>
                      Spacious, bright guestrooms with tasteful furnishing,
                      wooden floor.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft room
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Swimming Pool
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        150$ <span>/ Night</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Details</span>
                        </a>{" "}
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
                      <a href="room-details.html">Family Room</a>
                    </h4>
                    <p>
                      Spacious, bright guestrooms with tasteful furnishing,
                      wooden floor.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Room
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Swimming Pool
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        200$ <span>/ Night</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Details</span>
                        </a>{" "}
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
                      <a href="room-details.html">Double Room</a>
                    </h4>
                    <p>
                      Spacious, bright guestrooms with tasteful furnishing,
                      wooden floor.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 2-3 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft room
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Swimming Pool
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        250$ <span>/ Night</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Details</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="rooms left">
                  <figure>
                    <img src="img/slider/4.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <h4>
                      <a href="room-details.html">Deluxe Room</a>
                    </h4>
                    <p>
                      Spacious, bright guestrooms with tasteful furnishing,
                      wooden floor.
                    </p>
                    <div className="row room-facilities">
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 2-4 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul>
                          <li>
                            <i className="flaticon-clock-1" /> 200 sqft Room
                          </li>
                          <li>
                            <i className="flaticon-swimming" /> Swimming Pool
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="price">
                        300$ <span>/ Night</span>
                      </div>
                      <div className="butn-dark">
                        {" "}
                        <a href="room-details.html">
                          <span>Details</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Reservation & Booking Form */}
        <section className="reservation">
          <div
            className="background bg-img bg-fixed valign section-padding"
            data-background="img/slider/1.jpg"
            data-overlay-dark={5}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-12">
                  <div className="booking-box">
                    <div className="head-box">
                      <h4>Booking Form</h4>
                    </div>
                    <div className="booking-inner clearfix">
                      <form action="services.html" className="form1 clearfix">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <div className="input1_wrapper">
                              <label>Check in</label>
                              <div className="input1_inner">
                                <input
                                  type="text"
                                  className="form-control input datepicker"
                                  placeholder="Check in"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="input1_wrapper">
                              <label>Check out</label>
                              <div className="input1_inner">
                                <input
                                  type="text"
                                  className="form-control input datepicker"
                                  placeholder="Check out"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="select1_wrapper">
                              <label>Adults</label>
                              <div className="select1_inner">
                                <select
                                  className="select2 select"
                                  style={{ width: "100%" }}
                                >
                                  <option value={0}>Adults</option>
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="select1_wrapper">
                              <label>Children</label>
                              <div className="select1_inner">
                                <select
                                  className="select2 select"
                                  style={{ width: "100%" }}
                                >
                                  <option value={0}>Children</option>
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <button
                              type="submit"
                              className="btn-form1-submit mt-15"
                            >
                              Check Availability
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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
