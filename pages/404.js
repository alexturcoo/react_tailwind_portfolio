import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head><title>Page not found | Alexander Turco</title></Head>
      <section className="page-container standalone-section contact-section">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="page-title">Let’s get you back.</h1>
        <p className="section-description">That page may have moved. You can find my research and projects on the homepage.</p>
        <Link href="/" className="button button-primary recovery-link">Back to home <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
