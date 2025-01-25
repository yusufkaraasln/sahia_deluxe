import React from "react";

const PromoVideo = () => {
  return (
    <section
      className="video-wrapper video section-padding bg-img bg-fixed"
      data-overlay-dark={5}
      data-background="/img/slider/1.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <span>
              <i className="star-rating" />
              <i className="star-rating" />
              <i className="star-rating" />
              <i className="star-rating" />
              <i className="star-rating" />
            </span>
            <div className="section-subtitle">
              <span>The Green Park Sapanca</span>
            </div>
            <div className="section-title">
              <span>Tanıtım Videosu</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <a className="vid" href="https://youtu.be/er2-6hpDWV0">
              <div className="vid-butn">
                <span className="icon">
                  <i className="ti-control-play" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
