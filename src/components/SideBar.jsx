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
                Odalar
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
              </ul>
            </li>
            <li>
              <Link target="_parent" href="/contact">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
        {/* Sidebar Footer */}
        <div className="cappa-footer">
          <div className="text">Bize Ulaşın</div>
          <div className="social-list">
            {" "}
            <a href="tel:8551004444">
              <span className="flaticon-call" />
            </a>{" "}
            <a href="mailto:info@sahiadeluxe.com">
              <span className="flaticon-envelope" />
            </a>{" "}
            <a href="https://www.google.com/maps" target="_blank">
              <span className="ti-location-pin" />
            </a>{" "}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
