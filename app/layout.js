/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Script from "next/script";

import "./global.css";

// Required style of the theme
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/bootstrap-select.min.css";
import "../public/assets/css/all.min.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/webfonts/flaticon/flaticon.css";
import "../public/assets/css/owl.css";
import "../public/assets/css/jquery.fancybox.min.css";
import "../public/assets/css/layerslider.css";
import "../public/assets/css/template.css";
import "../public/assets/css/style.css";
import "../public/assets/css/colors/color.css";
import "../public/assets/css/loader.css";
import StoreProvider from "./Provider";

export const metadata = {
  charset: "utf-8",
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  // viewport: "width=device-width, initial-scale=1",
  description: "Uniland - Real Estate HTML5 Template",
  keywords:
    "real estate, property, property search, agent, apartments, booking, business, idx, housing, real estate agency, rental",
  authors: [{ name: "unicoder" }],
  title: "Uniland - Real Estate HTML5 Template",
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>

        {/* Script */}
        <Script src="/assets/js/jquery.min.js" />
        <Script src="/assets/js/popper.min.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/js/bootstrap-select.min.js" />
        <Script src="/assets/js/piechart/chart.min.js" />
        <Script src="/assets/js/jquery.fancybox.min.js" />
        <Script src="/assets/js/owl.js" />
        <Script src="/assets/js/range/tmpl.js" />
        <Script src="/assets/js/range/jquery.dependClass.js" />
        <Script src="/assets/js/range/draggable.js" />
        <Script src="/assets/js/range/jquery.slider.js" />
        <Script src="/assets/js/wow.js" />
        <Script src="/assets/js/mixitup.min.js" />
        <Script src="/assets/js/paraxify.js" />
        <Script src="/assets/js/custom.js" />
      </body>
    </html>
  );
}
