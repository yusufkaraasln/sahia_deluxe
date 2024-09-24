import Link from "next/link";
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
                <h4>Sahia Deluxe Sapanca'ya Hoşgeldiniz</h4>
                <h1>Sapanca'nın Doğal Güzellikleriyle Parlayan Yıldız</h1>
                <div className="butn-dark">
                  {" "}
                  <Link target="_self" href="/rooms">
                    <span>Odaları Keşfet</span>
                  </Link>{" "}
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