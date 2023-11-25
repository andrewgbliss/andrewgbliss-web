import { ContactSection } from "~/components/contact-section";
import { HeroSection } from "~/components/hero-section";
import { PricingSection } from "~/components/pricing-section";
import { SaleBannerSection } from "~/components/sale-banner-section";
import { TableOfContents } from "~/components/table-of-contents";
import { TaglineSection } from "~/components/tagline-section";
import type { MarketingSite } from "~/lib/marketing-site";
import { Newsletter } from "../newsletter";

export function MarketingPage({ options }: { options: MarketingSite }) {
  return (
    <main>
      <HeroSection options={options} />
      <SaleBannerSection />
      <TaglineSection options={options} />
      <TableOfContents />
      <PricingSection />
      <ContactSection />
      <Newsletter />
    </main>
  );
}
