import { PortfolioSite } from "~/components/portfolio/portfolio";
import type { WebsiteOptions } from "~/components/portfolio/types";
import { ThemeProvider } from "~/components/ui/theme-provider";

const options: WebsiteOptions = {
  logo: {
    img_src: "/img/travel-logo.webp",
    website_name: "Andrew G Bliss",
  },
  website_name: "Andrew G Bliss",
  background_cover_url: "/img/jumbotron.jpg",
  tagline: "Software Engineer",
  headline: "Andrew G Bliss",
  description:
    "Professional with more than 15 plus years of experience. Current stack is React, Next.js, Typescript, Postgres.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PortfolioSite options={options} />
    </ThemeProvider>
  );
}
