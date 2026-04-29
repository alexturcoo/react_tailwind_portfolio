import Link from "next/link";

export const Bottombar = () => {
  return (
    <footer className="border-t border-gray-800/80 bg-[#05070a]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/">
          <a className="w-fit transition-colors hover:text-teal-300">
            alexander_turco
          </a>
        </Link>

        <span>© {new Date().getFullYear()} · computational genomics</span>
      </div>
    </footer>
  );
};
