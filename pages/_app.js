import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Bottombar } from "../components/bottombar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="site-shell">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#151918" />
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Component {...pageProps} />
      </main>
      <Bottombar />
    </div>
  );
}

export default MyApp;
