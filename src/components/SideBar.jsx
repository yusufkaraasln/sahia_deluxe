import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <a href="#" className="js-cappa-nav-toggle cappa-nav-toggle">
        <i />
      </a>
      <aside id="cappa-aside">
        {/* Logo */}
        <div className="cappa-logo">
          <Link href="/" target="_parent">
            <img class="logo-img" src="/img/logo/logo.png" alt="" />
          </Link>
        </div>
        {/* Menu */}
        <nav className="cappa-main-menu">
          <ul>
            <li>
              <Link href="/" target="_parent">
                Anasayfa
              </Link>
            </li>

            <li>
              <Link target="_parent" href="/rooms">
                Villalar
              </Link>
            </li>
            <li>
              <Link target="_parent" href="/gallery">
                Galeri
              </Link>
            </li>
            <li>
              <Link target="_parent" href="/restaurant">
                Restoran
              </Link>
            </li>
            <li className="cappa-sub">
              <a href="#">
                {" "}
                Kurumsal <i className="ti-angle-down" />
              </a>
              <ul>
                <li>
                  <Link target="_parent" href="/aboutus">
                    Hakkımızda
                  </Link>
                </li>

                <li>
                  <Link target="_parent" href="/career">
                    İK Kariyer
                  </Link>
                </li>
                <li>
                  <Link target="_parent" href="/kvkk">
                    Kişisel Verilerin İşlenmesi
                  </Link>
                </li>
                <li>
                  <Link target="_parent" href="/vsbf">
                    Veri Sahibi Başvuru Formu
                  </Link>
                </li>
                <li>
                  <Link target="_parent" href="/bgys">
                    BGYS Politikası
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link target="_parent" href="/contact">
                İletişim
              </Link>
            </li>
            <li>

            </li>
          </ul>
          <div className="butn-dark d-flex align-items-center justify-content-center pt-5">
            {" "}
            <Link target="_blank" href="/reservation">
              <span className="text-center">ONLINE REZERVASYON</span>
            </Link>{" "}
          </div>
        </nav>


        {/* Sidebar Footer */}
        <div className="cappa-footer">
          <div className="text">Bize Ulaşın</div>
          <div className="social-list">
            {" "}
            <a href="tel:08554509654">
              <span className="flaticon-call" />
            </a>{" "}
            <a href="mailto:sapanca@thegreenpark.com">
              <span className="flaticon-envelope" />
            </a>{" "}
            <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14ccaf5aa9e78523:0xc9690426f5529184?sa=X&ved=1t:8290&ictx=111" target="_blank">
              <span className="ti-location-pin" />
            </a>{" "}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
