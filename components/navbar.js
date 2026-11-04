import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import styles from "../styles/Navbar.module.css";

const links = [
  { href: "/#about", label: "About", section: "about" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "https://nerdvana.blog/", label: "Blog", external: true },
  { href: "/contact", label: "Contact", section: "contact" },
];

// Keep links available in the server-rendered page when JavaScript is disabled.
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const Navbar = () => {
  const router = useRouter();
  const enhanced = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const close = () => setOpen(false);
    const desktop = window.matchMedia("(min-width: 761px)");
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    desktop.addEventListener("change", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
      desktop.removeEventListener("change", close);
    };
  }, [router.events]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (router.pathname !== "/") return;
    const sections = ["home", "about", "skills", "projects"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let frame;
    const update = () => {
      frame = undefined;
      // Use the closed header height, so opening the mobile menu does not
      // change which section the reader is currently in.
      const offset = window.innerWidth > 760 ? 114 : 96;
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) current = section.id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [router.pathname]);

  const currentSection = router.pathname === "/" ? activeSection : router.pathname.slice(1);
  const closeMenu = () => {
    if (open) {
      // Collapse the inline menu before Next.js measures a hash destination.
      // Otherwise its height shifts the section after the browser scrolls.
      flushSync(() => setOpen(false));
    }
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <nav
        className={`page-container ${styles.nav}`}
        aria-label="Main navigation"
        onBlur={(event) => {
          if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
        }}
      >
        <Link href="/" className={`wordmark ${styles.wordmark}`} onClick={closeMenu}>
          Alexander Turco<span className="accent">.</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          data-enhanced={enhanced}
          aria-controls="main-navigation-links"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? <path d="m4 4 10 10M14 4 4 14" /> : <path d="M3 6h12M3 12h12" />}
          </svg>
        </button>
        <div id="main-navigation-links" className={styles.links} data-enhanced={enhanced} data-open={open}>
          {links.map((link) => link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={styles.link} onClick={closeMenu}>
              {link.label}<span className={styles.external} aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              aria-current={currentSection === link.section ? (router.pathname === "/" ? "location" : "page") : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a href="/cv.pdf" className={`${styles.link} ${styles.cv}`} onClick={closeMenu}>
            CV <span className={styles.fileType}>PDF</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
