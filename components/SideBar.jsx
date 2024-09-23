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
          <a href="index.html">
            <img class="logo-img" src="img/logo/logo.png" alt="" />
          </a>
        </div>
        {/* Menu */}
        <nav className="cappa-main-menu">
          <ul>
            <li className="cappa-sub">
              <a href="#">Anasayfa</a>
            </li>

            <li>
              <a href="gallery.html">Odalar</a>
            </li>
            <li>
              <a href="gallery.html">Galeri</a>
            </li>
            <li>
              <a href="restaurant.html">Restoran</a>
            </li>
            <li className="cappa-sub">
              <a href="#">
                {" "}
                Kurumsal <i className="ti-angle-down" />
              </a>
              <ul>
                <li>
                  <a href="rooms.html">Hakkımızda</a>
                </li>

                <li>
                  <a href="room-details.html">İK Kariyer</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">İletişim</a>
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
            <a href="mailto:info@apartments.com">
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
