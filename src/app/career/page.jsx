import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

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
              <div className="col-md-12 text-center mt-20">
                <h1>İK Kariyer</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <section className="contact section-padding">
          <div className="container">
            <div className="row mb-90">
              <div className="col-lg-5 col-md-12 mb-60">
                <h3>The Cappa Apartments</h3>
                <p>
                  Hotel ut nisl quam nestibulum ac quam nec odio elementum miss
                  the aucan varius natoque penatibus et magnis morbine.
                </p>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-call" />
                  </div>
                  <div className="text">
                    <p>Reservation</p>{" "}
                    <a href="tel:855-100-4444">855 100 4444</a>
                  </div>
                </div>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-envelope" />
                  </div>
                  <div className="text">
                    <p>Email Info</p>{" "}
                    <a href="mailto:info@apartments.com">info@apartments.com</a>
                  </div>
                </div>
                <div className="reservations">
                  <div className="icon">
                    <span className="flaticon-location-pin" />
                  </div>
                  <div className="text">
                    <p>Address</p> 1616 Broadway NY, New York 10001
                    <br />
                    United States of America
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-12 mb-30">
                <h3>Get in touch</h3>
                <form method="post" className="contact__form" action="mail.php">
                  {/* form message */}
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: "none" }}
                        role="alert"
                      >
                        {" "}
                        Your message was sent successfully.{" "}
                      </div>
                    </div>
                  </div>
                  {/* form elements */}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Your Number *"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject *"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder="Message *"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-dark2">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Map Section */}
            <div className="row">
              <div
                className="col-md-12 map animate-box"
                data-animate-effect="fadeInUp"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
                  width="100%"
                  height={600}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
