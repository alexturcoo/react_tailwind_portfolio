import Link from "next/link";

const links = [
  { href: "/#home", label: "home" },
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#projects", label: "projects" },
  { href: "/contact", label: "contact" },
  { href: "/cv.pdf", label: "cv" },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 border-b border-teal-950/80 bg-[#08120f]/85 shadow-[0_10px_35px_rgba(3,12,10,0.28)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/">
          <a className="w-fit bg-gradient-to-r from-teal-200 via-white to-amber-100 bg-clip-text text-sm tracking-wide text-transparent">
            alexander_turco
          </a>
        </Link>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-300 sm:gap-x-8 sm:text-sm">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <a className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-teal-300 after:to-amber-200 after:transition-transform after:duration-300 hover:text-amber-100 hover:after:scale-x-100">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
