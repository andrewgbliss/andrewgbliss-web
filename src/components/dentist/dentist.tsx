import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import type { WebsiteOptions } from "./types";
import { ReturnUpButton } from "../ui/buttons/return-up-button";
// import { ServicesSection } from "./services-section";
import { Footer } from "./footer";
import { Staff } from "./staff";

export function DentistSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      {/* <ServicesSection /> */}
      <Staff />
      <ContactSection />
      <ReturnUpButton />
      <Footer website_name={options.website_name} />
    </main>
  );
}
