import React from "react";

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <div className="section-subtitle">
              <span>What We Do</span>
            </div>
            <div className="section-title">Our Services</div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="img left">
              <a href="services-page.html">
                <img src="img/restaurant/3.jpg" alt="" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 valign animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="content">
              <div className="date">
                <h1>01</h1>
              </div>
              <div className="cont">
                <h5>Restaurant &amp; Bar</h5>
                <p>
                  Lorem arena nuam enim polen obortise esen the drana accumsan
                  golden alsuame amet aucto miss done vitae vehicula risus duise
                  nun drana sapien.
                </p>
                <div className="butn-dark">
                  {" "}
                  <a href="#">
                    <span>Discover</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 order2 valign animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="content">
              <div className="date">
                <h1>02</h1>
              </div>
              <div className="cont">
                <h5>Spa &amp; Wellness</h5>
                <p>
                  Lorem arena nuam enim polen obortise esen the drana accumsan
                  golden alsuame amet aucto miss done vitae vehicula risus duise
                  nun drana sapien.
                </p>
                <div className="butn-dark">
                  {" "}
                  <a href="#">
                    <span>Discover</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 order1 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="img left">
              <a href="spa-wellness.html">
                <img src="img/spa/2.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-30">
          <div
            className="col-lg-6 col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="img left">
              <a href="spa-wellness.html">
                <img src="img/spa/4.jpg" alt="" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 valign animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="content">
              <div className="date">
                <h1>03</h1>
              </div>
              <div className="cont">
                <h5>Fitness &amp; Yoga Services</h5>
                <p>
                  Lorem arena nuam enim polen obortise esen the drana accumsan
                  golden alsuame amet aucto miss done vitae vehicula risus duise
                  nun drana sapien.
                </p>
                <div className="butn-dark">
                  {" "}
                  <a href="#">
                    <span>Discover</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
