import { MusicSite } from "~/components/music/music";
import type { WebsiteOptions } from "~/components/music/types";

const options: WebsiteOptions = {
  logo: {
    img_src: "",
    website_name: "Andrew G Bliss",
  },
  website_name: "Andrew G Bliss",
  background_cover_url: "",
  tagline: "Software Engineer",
  headline: "Andrew G Bliss",
  description:
    "Professional with more than 15 plus years of experience. Current stack is React, Next.js, Typescript, Postgres.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return (
    <>
      <MusicSite options={options} />
    </>
  );
}
