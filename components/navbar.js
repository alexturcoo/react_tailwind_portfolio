import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link"
import { useState } from "react";
import Head from "next/head";

export const Navbar = () => {
    return (
      <nav class=" p-3 s:pr-10 dark:bg-gray-900 dark:border-gray-700">
          <ul class=" flex px-10 mt-4 border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/">
              <a class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
              <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
              <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </Link>
            </li>
          </ul>
    </nav>
    );
}
