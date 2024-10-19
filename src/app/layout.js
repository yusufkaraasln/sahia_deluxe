import Script from "next/script";
var $ = require("jquery");

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
        <title>Sahia Deluxe Sapanca</title>
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Gilda+Display&display=swap"
        />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>

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


      <Script id="reservation_sc">
       {
        ` var grouphotels = false;
        var widgeturl = "https://sahia-deluxe.rezervasyonal.com/";
        var defaultadultcount = 2; // Default Yetişkin Sayısı
        var maxchild = 3; // Maximum Çocuk Sayısı
        var maxchildage = [0, 12]; //yaş aralığı. var maxchildage = 8; yaş aralığı 0 - 8 yaş arası olacaktır.
        var maxadult = 4; // Maximum Yetişkin Sayısı
        var mainWidget = true;
        var exitWidget = false;
        var currency = "TRY"; // Para Birimi
        var lang = "tr"; // "tr" veya "en"`
       }
      </Script>
      <Script id="reservation_src" src="https://www.rezervasyonal.com/widget/widgetbar/assets/widget.js"></Script>




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
