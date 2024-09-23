import React from "react";

const News = () => {
  return (
    <section className="news section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <div className="section-subtitle">
              <span>Hotel Blog</span>
            </div>
            <div className="section-title">Our News</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/restaurant/3.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>02</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="news.html">Restaurant</a>
                  </span>
                  <h5>
                    <a href="post.html">Historic restaurant renovated</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/spa/3.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>04</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="news.html">Spa</a>
                  </span>
                  <h5>
                    <a href="post.html">Benefits of Spa Treatments</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/slider/2.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>06</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="news.html">Bedroom</a>
                  </span>
                  <h5>
                    <a href="post.html">Hotel Bedroom Collections</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/spa/2.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>08</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="news.html">Health</a>
                  </span>
                  <h5>
                    <a href="post.html">Weight Loss with Fitness</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
