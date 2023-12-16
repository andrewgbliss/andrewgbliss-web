import { GoogleMapContainer } from "../google-map/google-map";
import { HeroSection } from "./hero-section";
import type { WebsiteOptions } from "./types";

export function MusicSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      <div className=" flex flex-col items-center justify-center bg-black p-12">
        <h2 className="pb-5 text-3xl text-white">Venue</h2>
        <GoogleMapContainer />
      </div>
    </main>
  );
}
