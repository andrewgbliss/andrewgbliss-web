import { HeroSection } from "~/components/portfolio/hero-section";
import { TableOfContents } from "~/components/portfolio/table-of-contents";
import type { WebsiteOptions } from "~/components/portfolio/types";
import { Newsletter } from "./newsletter";
import { PricingSection } from "./pricing-section";
import { ReturnUpButton } from "../ui/buttons/return-up-button";
import { ServicesSection } from "./services-section";
import { Footer } from "./footer";
import { Testimonials } from "./testimonials";

export function PortfolioSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      <TableOfContents />
      <Testimonials />
      <ServicesSection />
      <PricingSection />
      <Newsletter />
      <ReturnUpButton />
      <Footer website_name={options.website_name} />
    </main>
  );
}
