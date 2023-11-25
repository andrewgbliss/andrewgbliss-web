import { ContactSection } from "~/components/portfolio/contact-section";
import { HeroSection } from "~/components/portfolio/hero-section";
import { SaleBannerSection } from "~/components/portfolio/sale-banner-section";
import { TableOfContents } from "~/components/portfolio/table-of-contents";
import type { WebsiteOptions } from "~/components/portfolio/types";
import { Newsletter } from "./newsletter";
import { PricingSection } from "./pricing-section";
import { ReturnUpButton } from "../ui/buttons/return-up-button";

export function PortfolioSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      <SaleBannerSection />
      <TableOfContents />
      <PricingSection />
      <ContactSection />
      <Newsletter />
      <ReturnUpButton />
    </main>
  );
}
