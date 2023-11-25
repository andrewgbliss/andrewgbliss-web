import { TopBar } from "~/components/travel-site/top-bar";
import { TravelSearchForm } from "./travel-search-form";
import type { WebsiteOptions } from "./types";

export function HeroSection({ options }: { options: WebsiteOptions }) {
  return (
    <section
      className="relative h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${options.background_cover_url}")`,
      }}
    >
      <header>
        <TopBar options={options} />
      </header>
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 sm:px-6 lg:px-8">
        <h1 className="hidden font-bold text-black dark:text-white sm:block sm:text-6xl">
          {options.website_name}
        </h1>
        <p className="text-center text-3xl text-white">{options.tagline}</p>
        <TravelSearchForm />
      </div>
    </section>
  );
}
