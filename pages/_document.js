/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <head>
          <meta charset="utf-8" />
          <title>DevFolio Bootstrap Template</title>
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta content="" name="keywords" />
          <meta content="" name="description" />

          {/* <!-- Favicons --> */}
          <link href="img/favicon.png" rel="icon" />
          <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />

          {/* <!-- Bootstrap CSS File --> */}
          <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

          {/* <!-- Libraries CSS Files --> */}
          <link
            href="lib/font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link href="lib/animate/animate.min.css" rel="stylesheet" />
          <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />
          <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

          {/* <!-- Main Stylesheet File --> */}
          <link href="css/style.css" rel="stylesheet" />

          {/* <!-- =======================================================
    Theme Name: DevFolio
    Theme URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= --> */}
        </head>
        <body
          data-spy="scroll"
          data-target=".site-navbar-target"
          data-offset="300"
        >
          <Main />
          <NextScript />

          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-migrate-3.0.1.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.easing.1.3.js"></script>
          <script src="js/jquery.waypoints.min.js"></script>
          <script src="js/jquery.stellar.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/aos.js"></script>
          <script src="js/jquery.animateNumber.min.js"></script>
          <script src="js/scrollax.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
