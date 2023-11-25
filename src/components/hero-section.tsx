import { TopBar } from "~/components/top-bar";
import { H1 } from "./ui/h1";
import { TravelSearchForm } from "./travel-search-form";
import { Tagline } from "./ui/tagline";
import type { MarketingSite } from "~/lib/marketing-site";

export function HeroSection({ options }: { options: MarketingSite }) {
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
        <H1>{options.website_name}</H1>
        <Tagline>{options.tagline}</Tagline>
        <TravelSearchForm />
      </div>
    </section>
  );
}
