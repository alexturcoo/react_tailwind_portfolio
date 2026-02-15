import Link from "next/link"

export const Navbar = () => {
    return (
  <nav className="border-b border-gray-800 bg-black">
    <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
      
      <Link href="/">
        <a className="text-white text-sm tracking-wide">
          alexander_turco
        </a>
      </Link>

      <div className="flex space-x-8 text-sm text-gray-400">
        <Link href="/">
          <a className="hover:text-white transition-colors">
            home
          </a>
        </Link>

        <Link href="/projects">
          <a className="hover:text-white transition-colors">
            projects
          </a>
        </Link>

        <Link href="/contact">
          <a className="hover:text-white transition-colors">
            contact
          </a>
        </Link>

        <Link href="/cv.pdf">
          <a className="hover:text-white transition-colors">
            cv
          </a>
        </Link>
      </div>

    </div>
  </nav>
);
}
