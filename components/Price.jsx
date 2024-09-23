import React from "react";

const Price = () => {
  return (
    <section className="price">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12 p-0">
            <div className="img left">
              {" "}
              <img src="img/price.jpg" alt="" />{" "}
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-0 valign">
            <div className="wrapper">
              <div className="mb-30">
                <div className="section-subtitle">Pricing Plan</div>
                <div className="section-title">Extra Services</div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Room Cleaning</div>
                    <div className="money">$50</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Dring Included</div>
                    <div className="money">$35</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Room Breakfast</div>
                    <div className="money">$30</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Safe &amp; Secure</div>
                    <div className="money">$25</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
