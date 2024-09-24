import React from "react";

const Facilities = () => {
  return (
    <section className="facilities section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle">Olanaklar</div>
            <div className="section-title">Konaklamanızı Unutulmaz Kılın</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-world" />
              <h5>Transfer Hizmeti</h5>
              <p>
                Havaalanından transfer hizmeti ile konforlu bir yolculuk yapın.
              </p>
              <div className="facility-shape">
                <span className="flaticon-world" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-car" />
              <h5>Otopark Alanı</h5>
              <p>
                Güvenli otopark alanımızda aracınızı rahatça park edebilirsiniz.
              </p>
              <div className="facility-shape">
                <span className="flaticon-car" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-bed" />
              <h5>Oda Servisi</h5>
              <p>
                Oda servisi ile konforlu bir deneyim yaşayın, lezzetli yemekler kapınıza gelsin.
              </p>
              <div className="facility-shape">
                <span className="flaticon-bed" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-swimming" />
              <h5>Yüzme Havuzu</h5>
              <p>
                Özel havuzunuzda serinleyin ve Sapanca'nın doğal güzelliklerinin tadını çıkarın.
              </p>
              <div className="facility-shape">
                <span className="flaticon-swimming" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-wifi" />
              <h5>Fiber İnternet</h5>
              <p>
                Tüm alanlarda hızlı fiber internet erişimi ile bağlantıda kalın.
              </p>
              <div className="facility-shape">
                <span className="flaticon-wifi" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-breakfast" />
              <h5>Kahvaltı</h5>
              <p>
                Taze ve lezzetli kahvaltımız ile güne enerjik başlayın.
              </p>
              <div className="facility-shape">
                <span className="flaticon-breakfast" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
