import { EcommerceSite } from "~/components/ecommerce/ecommerce";
import type { WebsiteOptions } from "~/components/ecommerce/types";

const options: WebsiteOptions = {
  logo: {
    img_src: "/img/travel-logo.webp",
    website_name: "Ecommerce Site",
  },
  website_name: "Ecommerce Site",
  background_cover_url: "/img/jumbotron.jpg",
  tagline: "Software Engineer",
  headline: "Ecommerce Site",
  description:
    "Ecommerce Site is a website template for a business that sells products online.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return <EcommerceSite options={options} />;
}
