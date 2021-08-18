import "../styles/globals.css";
import { useEffect } from "react";
import ReactGa from "react-ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGa.initialize("G-L3PF4208K7");
    //to report Page view
    ReactGa.pageview("/");
    // ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
