import React from "react";

const MainSlider = () => {
  return (
    <aside
      className="kenburns-section"
      id="kenburnsSliderContainer"
      data-overlay-dark={3}
    >
      <div className="kenburns-inner h-100">
        <div className="v-middle caption text-center">
          <div className="container">
            <div className="row h-100 justify-content-center">
              <div className="col-lg-10 col-md-12">
                <h4>Welcome to New York</h4>
                <h1>The Best Three-Star Apartment Hotel</h1>
                <div className="butn-dark">
                  {" "}
                  <a href="rooms.html">
                    <span>Discover Rooms</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MainSlider;
