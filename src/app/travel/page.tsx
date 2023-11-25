import { MarketingPage } from "~/components/pages/marketing";
import type { MarketingSite } from "~/lib/marketing-site";

const options: MarketingSite = {
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
  return <MarketingPage options={options} />;
}
