import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "https://nerdvana.blog/", label: "Blog", external: true },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => (
  <header className="site-header">
    <nav className="page-container nav-content" aria-label="Main navigation">
      <Link href="/" className="wordmark">Alexander Turco<span className="accent">.</span></Link>
      <div className="nav-links">
        {links.map((link) => link.external ? <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a> : <Link href={link.href} key={link.href}>{link.label}</Link>)}
        <a href="/cv.pdf" className="nav-cv">CV <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>
);
