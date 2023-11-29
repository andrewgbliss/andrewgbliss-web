import { TopBar } from "~/components/dentist/top-bar";
import type { WebsiteOptions } from "./types";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
export function HeroSection({ options }: { options: WebsiteOptions }) {
  return (
    <section
      className="parallax relative h-screen bg-cover bg-no-repeat dark:filter"
      style={{
        backgroundImage: `url("${options.background_cover_url}")`,
        // filter: "saturate(50%) brightness(80%)",
      }}
    >
      <header>
        <TopBar options={options} />
      </header>
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6  px-4 sm:px-6 lg:px-8">
        <section className="w-full bg-gray-50  py-12 backdrop-invert backdrop-opacity-10 dark:bg-gray-800/30 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Dental Clinic
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-100 md:text-xl">
                  We provide comprehensive and compassionate dental care. Your
                  smile is our top priority.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-blue-500"
                  href="#"
                >
                  Book Appointment
                </Link>
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
