import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
  { href: "/cv.pdf", label: "cv" },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 border-b border-gray-800/80 bg-[#05070a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/">
          <a className="w-fit text-sm tracking-wide text-white">
            alexander_turco
          </a>
        </Link>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400 sm:gap-x-8">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <a className="transition-colors hover:text-teal-300">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
