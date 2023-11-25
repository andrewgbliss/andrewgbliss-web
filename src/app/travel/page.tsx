import { TravelSite } from "~/components/travel-site/travel-site";
import type { WebsiteOptions } from "~/components/travel-site/types";

const options: WebsiteOptions = {
  logo: {
    img_src: "/img/travel-logo.webp",
    website_name: "Travel Explorer",
  },
  website_name: "Travel Explorer",
  background_cover_url: "/img/travel-hero-cover.webp",
  tagline: "Discover your next adventure with us",
  headline: "Travel Explorer",
  description:
    "Travel Explorer is a travel booking website that allows you to book flights, hotels, and car rentals. We offer a wide range of destinations and activities to choose from. Our goal is to make your travel experience as easy and enjoyable as possible.",
};

export default function Page() {
  return <TravelSite options={options} />;
}
