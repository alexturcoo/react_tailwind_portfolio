import Link from "next/link";

export const Bottombar = () => (
  <footer className="site-footer">
    <div className="page-container footer-content">
      <Link href="/" className="wordmark">Alexander Turco<span className="accent">.</span></Link>
      <span>© {new Date().getFullYear()} · Computational genomics</span>
      <a href="mailto:alexander.turco@mail.utoronto.ca" className="text-link">Let’s connect <span aria-hidden="true">↗</span></a>
    </div>
  </footer>
);
