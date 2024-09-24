import React from "react";

const Price = () => {
  return (
    <section className="price">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12 p-0">
            <div className="img left">
              <img src="img/price.jpg" alt="Fiyatlandırma" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-0 valign">
            <div className="wrapper">
              <div className="mb-30">
                <div className="section-subtitle">Fiyatlandırma Planı</div>
                <div className="section-title">Ekstra Hizmetler</div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Oda Temizliği</div>
                    <div className="money">₺500</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">İçecek Dahil</div>
                    <div className="money">₺350</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Oda Kahvaltı</div>
                    <div className="money">₺300</div>
                  </div>
                  <div className="dots" />
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <div className="flex">
                    <div className="title">Güvenli &amp; Emniyetli</div>
                    <div className="money">₺250</div>
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
