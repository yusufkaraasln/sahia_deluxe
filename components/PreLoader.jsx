import React from "react";

const PreLoader = () => {
  return (
    <>
      <div className="preloader-bg" />
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            {" "}
            <span />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
