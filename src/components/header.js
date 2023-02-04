import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
    <nav className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
      <div class="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
      </div>

      <div className="flex justify-between w-full md:w-auto">Let Foo;</div>

      <div class="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/"
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Home
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
