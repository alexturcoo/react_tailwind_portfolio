import Link from "next/link"

export const Bottombar = () => {
    return (
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500">
          
          <Link href="/">
            <a className="hover:text-white transition-colors">
              alexander_turco
            </a>
          </Link>

          <span>
            © {new Date().getFullYear()} · computational genomics
          </span>

        </div>
      </footer>
    );
}