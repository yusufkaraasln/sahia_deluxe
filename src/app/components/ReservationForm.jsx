import React from "react";

const ReservationForm = () => {
  return (
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
  );
};

export default ReservationForm;
