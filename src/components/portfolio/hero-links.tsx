import Link from "next/link";
import Script from "next/script";
import { HamburgerMenu } from "../ui/buttons/hamburger-menu";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "box-icon": any;
    }
  }
}

export function HeroLinks() {
  return (
    <>
      <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      <div className="">
        <nav className="relative flex h-16 items-center justify-between">
          <div className="block items-center px-2 lg:hidden lg:px-0 xl:w-2/4">
            <HamburgerMenu />
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              <div className="flex space-x-3">
                <Link
                  href="/"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/resume"
                  target="_blank"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Resume
                </Link>
                <Link
                  href="#contact"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
