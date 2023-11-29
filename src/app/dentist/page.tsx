import { DentistSite } from "~/components/dentist/dentist";
import type { WebsiteOptions } from "~/components/dentist/types";

const options: WebsiteOptions = {
  logo: {
    img_src: "/img/travel-logo.webp",
    website_name: "Andrew G Bliss",
  },
  website_name: "Dentist Website",
  background_cover_url: "/img/dentist.jpg",
  tagline: "Software Engineer",
  headline: "Local Dental",
  description:
    "Dental website for local dentist. This is a demo site for a dentist.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return <DentistSite options={options} />;
}
