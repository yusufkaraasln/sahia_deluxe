import Script from "next/script";
var $ = require("jquery");
import "../style/index.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>The Green Park Sapanca</title>
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Gilda+Display&display=swap"
        />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div className="iletisim-m home">
          <ul>
            <li>
              <a href="tel:02642990144" className="changePhone">
              0264 299 0144
              </a>{" "}
            </li>
            <li>
              <a href="/reservation" target="_blank">
                Online Rezervasyon
              </a>
            </li>
          </ul>
        </div>
        {children}</body>

      <Script
        strategy="beforeInteractive"
        src="/js/jquery-3.6.3.min.js"
      ></Script>
      <Script src="/js/jquery-migrate-3.0.0.min.js"></Script>
      <Script src="/js/modernizr-2.6.2.min.js"></Script>
      <Script src="/js/imagesloaded.pkgd.min.js"></Script>
      <Script src="/js/jquery.isotope.v3.0.2.js"></Script>
      <Script src="/js/pace.js"></Script>
      <Script src="/js/popper.min.js"></Script>
      <Script src="/js/bootstrap.min.js"></Script>
      <Script src="/js/scrollIt.min.js"></Script>
      <Script src="/js/jquery.waypoints.min.js"></Script>
      <Script src="/js/owl.carousel.min.js"></Script>
      <Script src="/js/jquery.stellar.min.js"></Script>
      <Script src="/js/jquery.magnific-popup.js"></Script>
      <Script src="/js/YouTubePopUp.js"></Script>
      <Script src="/js/select2.js"></Script>
      <Script src="/js/datepicker.js"></Script>
      <Script src="/js/smooth-scroll.min.js"></Script>
      <Script src="/js/vegas.slider.min.js"></Script>
      <Script src="/js/custom.js"></Script>




      <Script id="gtm">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXGWFQ6S');`}</Script>


      <noscript id="no_sc_gtm" dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXGWFQ6S"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}></noscript>

      <Script id="reservation_sc" type="text/javascript">{` var TB = {
        data : {
            adult : 2,
            child : 0,
            childAge : [],
            hotelId : '5052008052204c389e01fe07e3f661c2',
            agencyId: '1b726c72af8341529e103ee924cfd5c4',
            subsidiaryId:0,
            agentId: '9627',
            productType : 'hotel',
            version: Math.random(),
            hotelPhone:''
        },
        error: function(){
            alert('Hata oluştu! Lütfen daha sonra tekrar deneyiniz.');
        }
    };
    (function(d, s, id) {
        var js, tbjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//www.tatilbudur.com/themes/tbnew/assets/widgets/reservation/tatilbudur-widgets.js?ver="+TB.data.version;
        tbjs.parentNode.insertBefore(js, tbjs);
    }(document, 'script', 'tb-jssdk'));`}</Script>



      <Script id="slider_Container">
        {`  
        $(document).ready(function() {
            $('#kenburnsSliderContainer').vegas({
                slides: [{
                    src: "img/slider/1.jpg"
                }, {
                    src: "img/slider/2.jpg"
                }, {
                    src: "img/slider/3.jpg"
                }],
                overlay: true,
                transition: 'fade2',
                animation: 'kenburnsUpRight',
                transitionDuration: 1000,
                delay: 10000,
                animationDuration: 20000
            });
        });`}
      </Script>
    </html>
  );
}
