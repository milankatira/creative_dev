/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import {
  About,
  Blog,
  Footer,
  Main,
  Navbar,
  Work,
  Service,
} from "../components";

const index = () => {
  return (
    <div>
      <body id="page-top" className="snap_main">
        <Navbar />
        {/* scroll-snap-align: center; */}

        {/* <div style={{ "scroll-snap-align": center }}> */}
        <div className="snap_center">
          <Main />
        </div>
        {/* </div> */}
        {/* <div style={{ "scroll-snap-align": center }}> */}
        <div className="snap_center" id="about">
          <About />
        </div>
        {/* </div> */}

        {/* <div style={{ "scroll-snap-align": center }}> */}
        <div className="snap_center">
          <Service />
        </div>
        {/* </div> */}
        {/* <div style={{ "scroll-snap-align": center }}> */}
        <div className="snap_center">
          <Work />
        </div>
        {/* <div style={{ "scroll-snap-align": center }}> */}
        <div className="snap_center">
          <Footer />
        </div>
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
        <div id="preloader"></div>
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/popper/popper.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/counterup/jquery.waypoints.min.js"></script>
        <script src="lib/counterup/jquery.counterup.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/typed/typed.min.js"></script>
        <script src="contactform/contactform.js"></script>
        <script src="js/main.js"></script>
      </body>
    </div>
  );
};

export default index;
