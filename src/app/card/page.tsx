import { PortfolioSite } from "~/components/portfolio/portfolio";
import type { WebsiteOptions } from "~/components/portfolio/types";

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
    "Professional with more than 15 plus years of software development in a variety of industries including: healthcare, finance, and travel.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return <PortfolioSite options={options} />;
}
