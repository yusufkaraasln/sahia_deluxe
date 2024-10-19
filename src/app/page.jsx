import About from "../components/About";
import Facilties from "../components/Facilties";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import News from "../components/News";
import PreLoader from "../components/PreLoader";
import Price from "../components/Price";
import PromoVideo from "../components/PromoVideo";
import ReservationForm from "../components/ReservationForm";
import Rooms from "../components/Rooms";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import SideBar from "../components/SideBar";
import Testiominals from "../components/Testiominals";

export default function Home() {
  return (
    <div>
      <PreLoader></PreLoader>
      {/* Progress scroll totop */}
      <ScrollToTop></ScrollToTop>
      {/* Sidebar Section */}
      <SideBar></SideBar>
      {/* Main */}
      <div id="cappa-main">
        {/* Kenburns Slider */}
        <MainSlider></MainSlider>
        {/* <div style={{
        background: "#fff"
      }} id="elektraweb-widget-area"></div> */}
        {/* About */}
        <About></About>
        {/* Rooms */}
        <Rooms></Rooms>
        {/* Promo Video */}
        <PromoVideo></PromoVideo>
        {/* Services */}
        {/* <Services></Services> */}
        {/* Testiominals */}
        {/* <Testiominals></Testiominals> */}
        {/* Facilties */}
        <Facilties></Facilties>
        {/* Price */}
        {/* <Price></Price> */}
        {/* News */}
        {/* <News></News> */}
        {/* Reservation & Booking Form */}
        {/* <ReservationForm></ReservationForm> */}
        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}
