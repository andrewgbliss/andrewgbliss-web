import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export function HeroLinks() {
  return (
    <>
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
                    window.open(
                      "https://www.youtube.com/@andrewgbliss",
                      "_blank",
                    );
                  }}
                >
                  Youtube
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    window.open("/merch", "_blank");
                  }}
                >
                  Merch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              <div className="flex space-x-3">
                <Link
                  href="https://www.youtube.com/@andrewgbliss"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Youtube
                </Link>
                <Link
                  href="/merch"
                  className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Merch
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
