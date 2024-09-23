import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-column footer-about">
                <h3 className="footer-title">About Hotel</h3>
                <p className="footer-about-text">
                  Welcome to the best three-star apart hotel in New York. Hotel
                  elementum sesue the aucan aliquam nusto in sapien rutrum
                  volutpat.
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
   
    </footer>
  );
};

export default Footer;
