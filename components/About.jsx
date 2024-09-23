import React from "react";

const About = () => {
  return (
    <section className="about section-padding" data-scroll-index={1}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            <div className="section-subtitle">About Us</div>
            <div className="section-title">
              Apart Hotel In The Heart Of The Mid Town
            </div>
            <p>
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum suen theaucan vestibulum aliquam justo in sapien.
            </p>
            <p>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligulation. Orci varius natoque penatibus et magnis dis
              parturient monte naete ridiculus mus nellentesque habitant
              morbine.
            </p>
            <div className="butn-dark mt-30">
              {" "}
              <a href="about.html">
                <span>Read More</span>
              </a>{" "}
            </div>
          </div>
          <div
            className="col col-lg-3 col-md-6 animate-box"
            data-animate-effect="fadeInUp"
          >
            {" "}
            <img src="img/about.jpg" alt="" className="mt-90 mb-30" />{" "}
          </div>
          <div
            className="col col-lg-3 col-md-6 animate-box"
            data-animate-effect="fadeInUp"
          >
            {" "}
            <img src="img/about2.jpg" alt="" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
