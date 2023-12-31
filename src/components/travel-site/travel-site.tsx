import { ContactSection } from "~/components/travel-site/contact-section";
import { HeroSection } from "~/components/travel-site/hero-section";
import { SaleBannerSection } from "~/components/travel-site/sale-banner-section";
import { TableOfContents } from "~/components/travel-site/table-of-contents";
import { TaglineSection } from "~/components/travel-site/tagline-section";
import type { WebsiteOptions } from "~/components/travel-site/types";

export function TravelSite({ options }: { options: WebsiteOptions }) {
  return (
    <main>
      <HeroSection options={options} />
      <SaleBannerSection />
      <TaglineSection options={options} />
      <TableOfContents />
      <ContactSection />
    </main>
  );
}
