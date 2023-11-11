import Link from "next/link";
import Script from "next/script";

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
          <div className="block items-center px-2 dark:text-white lg:hidden lg:px-0 xl:w-2/4">
            <box-icon name="menu" color="white"></box-icon>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              <div className="flex space-x-6">
                <Link legacyBehavior href="#">
                  <a
                    aria-current="page"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
                <Link legacyBehavior href="#">
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    About
                  </a>
                </Link>
                <Link legacyBehavior href="#">
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Services
                  </a>
                </Link>
                <Link legacyBehavior href="#">
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
