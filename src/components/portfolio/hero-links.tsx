import Link from "next/link";
import Script from "next/script";
// import { HamburgerMenu } from "../ui/buttons/hamburger-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { scrollToElementById } from "~/lib/utils";

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 18L20 18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 12L20 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    scrollToElementById("pricing");
                  }}
                >
                  Pricing
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    scrollToElementById("contact");
                  }}
                >
                  Contact
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    window.open("/cli", "_blank");
                  }}
                >
                  CLI
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              <div className="flex space-x-3">
                <Link
                  href="#pricing"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/cli"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  CLI
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
