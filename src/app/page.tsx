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
    "Andrew G Bliss is a full-stack developer with a passion for building beautiful websites and applications.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return <PortfolioSite options={options} />;
}
