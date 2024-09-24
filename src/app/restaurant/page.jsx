import React from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const restaurant = () => {
  return (
    <>
      <SideBar></SideBar>
      <div id="cappa-main">
        {/* Restaurant Slider */}
        <header className="header slider">
          <div className="owl-carousel owl-theme">
            {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/3.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/1.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/2.jpg"
            />
            <div
              className="text-center item bg-img"
              data-overlay-dark={3}
              data-background="img/restaurant/4.jpg"
            />
          </div>
        </header>
        {/* Restaurant Content */}
        <section className="rooms-page section-padding" data-scroll-index={1}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-12 text-center">
                {" "}
                <span>
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                  <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                  An Experience for the Senses
                </div>
                <div className="section-title">The Restaurant &amp; Bar</div>
                <p className="mb-30">
                  Led by Chef de Micheal Martin, The Restaurant is celebrated
                  for its excellent cuisine and unique ambience. The gorgeous
                  dining room features three open studio kitchens, allowing you
                  to enjoy the sights and sounds of the culinary artistry on
                  display. The menu showcases both Asian and European
                  influences, with a tempting selection of classic favorites and
                  creative dishes for you to sample. Cheese connoisseurs will be
                  drawn to the The Wine and Cheese Cellar, housed in
                  five-meter-high glass walls, where our knowledgeable staff can
                  introduce you to some of New York's greatest culinary
                  treasures.
                </p>
                <h6>Hours</h6>
                <div className="text-center">
                  <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                  <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                  <p>
                    Dinner: open from 6.30 pm, last order at 10.00 pm (daily)
                  </p>
                </div>
                <h6>Dress Code</h6>
                <p>Smart casual (no shorts, hats, or sandals permitted)</p>
                <h6>Terrace</h6>
                <p>Open for drinks only</p>
              </div>
            </div>
          </div>
        </section>
        {/* Restaurant Menu */}
        <section id="menu" className="restaurant-menu menu section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-subtitle">
                  <span>Apartments</span>
                </div>
                <div className="section-title">Restaurant Menu</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="tabs-icon col-md-10 offset-md-1 text-center">
                    <div className="owl-carousel owl-theme">
                      <div id="tab-1" className="active item">
                        <h6>Starters</h6>
                      </div>
                      <div id="tab-2" className="item">
                        <h6>Mains</h6>
                      </div>
                      <div id="tab-3" className="item">
                        <h6>Salads</h6>
                      </div>
                      <div id="tab-4" className="item">
                        <h6>Wine</h6>
                      </div>
                      <div id="tab-5" className="item">
                        <h6>Breakfast</h6>
                      </div>
                      <div id="tab-6" className="item">
                        <h6>Dessert</h6>
                      </div>
                    </div>
                  </div>
                  <div className="restaurant-menu-content col-md-12">
                    {/* Starters */}
                    <div id="tab-1-content" className="cont active">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Mozzarella Dippers{" "}
                              <span className="price">27$</span>
                            </h5>
                            <p>Fried mozzarella sticks, marinara sauce</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Onion Rings <span className="price">32$</span>
                            </h5>
                            <p>Fried onion rings, smoked aioli</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Fried Jalapeno <span className="price">52$</span>
                            </h5>
                            <p>Fried jalapeno pickles, cheddar sauce</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Buffalo Wings <span className="price">37$</span>
                            </h5>
                            <p>
                              Spicy chicken wings, blue cheese sauce, carrot,
                              celery
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Chilli Con Carne{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>Spicy ground beef, bacon, kidney beans</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Potato Skins <span className="price">42$</span>
                            </h5>
                            <p>
                              Crispy potato skins; bacon &amp; cheddar or
                              vegetables
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Mains */}
                    <div id="tab-2-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Rusty’s Burger <span className="price">27$</span>
                            </h5>
                            <p>
                              Smoked pulled beef ribs, bbq sauce, cheddar,
                              crispy onion
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Cajun Fish Steak{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Cajun spicied seabass, deep fried baby potatoes,
                              side salad
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Southern Fried Chicken{" "}
                              <span className="price">52$</span>
                            </h5>
                            <p>
                              Cajun coated chicken breast, fries and honey
                              mustard
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Crab Cake <span className="price">37$</span>
                            </h5>
                            <p>
                              Breaded crab cakes, tartar sauce, apple and fennel
                              salad
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Baby Back Ribs <span className="price">32$</span>
                            </h5>
                            <p>Bbq glazed baby pork ribs, coleslaw, fries</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Smokehouse Combo{" "}
                              <span className="price">42$</span>
                            </h5>
                            <p>
                              Smoked beef brisket, rib and sausage, coleslaw,
                              cornbread
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Salads */}
                    <div id="tab-3-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Ceaser Salad <span className="price">47$</span>
                            </h5>
                            <p>
                              Romaine lettuce, croutons, parmigiano, Ceaser
                              dressing.
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Waldorf Salad <span className="price">52$</span>
                            </h5>
                            <p>
                              Lettuce, celery, apple, grape, walnut, waldorf
                              sauce
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Quinoa &amp; Avocado Salad{" "}
                              <span className="price">52$</span>
                            </h5>
                            <p>
                              Quinoa, avocado, mixed greens. Nuts, dried and
                              fresh fruits
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Grilled Salmon Salad{" "}
                              <span className="price">37$</span>
                            </h5>
                            <p>
                              Grilled salmon, mixed greens, capers, orange
                              slices
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Chicken Cobb Salad{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>
                              Iceberg lettuce, cherry tomatoes, blue cheese,
                              avocado, bacon
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Salad Chicken <span className="price">42$</span>
                            </h5>
                            <p>
                              {" "}
                              Ceaser dressing. Optional grilled chicken breast
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Wine */}
                    <div id="tab-4-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Château d'Yquem 2011{" "}
                              <span className="price">400$</span>
                            </h5>
                            <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Alvear Cream NV <span className="price">30$</span>
                            </h5>
                            <p>Dessert, Fortified Wine, Andalucia</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Chateau D'yquem 1990{" "}
                              <span className="price">900$</span>
                            </h5>
                            <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              La Grande Année 2007{" "}
                              <span className="price">400$</span>
                            </h5>
                            <p>Rosé, Champagne</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Sine Qua Non 2012{" "}
                              <span className="price">520$</span>
                            </h5>
                            <p>Syrah, Shiraz &amp; Blends, California</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              W.S. Keyes Winery 2006{" "}
                              <span className="price">240$</span>
                            </h5>
                            <p>Merlot, California, Napa, Howell Mountain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Breakfast */}
                    <div id="tab-5-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Egg Benedict <span className="price">60$</span>
                            </h5>
                            <p>
                              English muffin, beef, hollandaise sauce, poached
                              egg.
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Texas Benedict <span className="price">30$</span>
                            </h5>
                            <p>
                              English muffin, short ribs, bbq sauce, poached
                              egg.
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Rusty’s Omlette <span className="price">22$</span>
                            </h5>
                            <p>
                              Mozzarella, cheddar, caramelized onion, black
                              beans.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              Salmon Bagel <span className="price">30$</span>
                            </h5>
                            <p>
                              Smoked salmon, cream cheese, dill, rocket, red
                              onion.
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Breakfast Bagel <span className="price">33$</span>
                            </h5>
                            <p>Chocolate, marshmallow, biscuit bar</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Rusty’s Pancake <span className="price">40$</span>
                            </h5>
                            <p>
                              Strawberry, white chocolate, dark chocolate,
                              crispearls
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Dessert */}
                    <div id="tab-6-content" className="cont">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="menu-info">
                            <h5>
                              Bourbon Pecan Pie{" "}
                              <span className="price">67$</span>
                            </h5>
                            <p>Bourbon pecan stuffed pie, vanilla ice-cream</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              New York Cheesecake{" "}
                              <span className="price">50$</span>
                            </h5>
                            <p>Cheesecake, strawberry &amp; lime salad</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Rusty’s ice-cream{" "}
                              <span className="price">32$</span>
                            </h5>
                            <p>Vanilla, bourbon, cookie, chocolate ice-cream</p>
                          </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                          <div className="menu-info">
                            <h5>
                              S’mores <span className="price">40$</span>
                            </h5>
                            <p>
                              Chocolate chip cookies, marshmallow, chocolate
                            </p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Rocky Road <span className="price">42$</span>
                            </h5>
                            <p>Chocolate, marshmallow, biscuit bar</p>
                          </div>
                          <div className="menu-info">
                            <h5>
                              Apple &amp; Pear Crumble{" "}
                              <span className="price">42$</span>
                            </h5>
                            <p>
                              Caramelized pear and apple, oat crumble, vanilla
                              ice-cream
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testiominals */}
        <section
          className="background bg-img bg-fixed section-padding pb-0"
          data-background="img/slider/1.jpg"
          data-overlay-dark={5}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <div className="testimonials">
                  <div className="testimonials-box">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>Highly recommended!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/1.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Andreas Brown</h6> <span>Customer review</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>A Unique Apartment Hotel!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/2.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Emily White</h6> <span>Customer review</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        {" "}
                        <span>
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                          <i className="star-rating" />
                        </span>
                        <h5>Highly recommended!</h5>
                        <p>
                          Lorem dapibus asue metus the nec feusiate eraten miss
                          hendreri net ve ante the lemon sanleo nectan feugiat
                          erat hendrerit necuis ve ante viventa miss sapien
                          silver on the duiman lorem ipsum amet silver miss rana
                          duru at finibus viverra neca the sene on satien.
                        </p>
                        <div className="info">
                          <div className="author-img">
                            {" "}
                            <img src="img/team/3.jpg" alt="" />{" "}
                          </div>
                          <div className="cont">
                            <h6>Daniel Martin</h6> <span>Customer review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default restaurant;
