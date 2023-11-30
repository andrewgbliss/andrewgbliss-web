import { HeroSection } from "~/components/ecommerce/hero-section";
import type { WebsiteOptions } from "~/components/ecommerce/types";
import { Newsletter } from "./newsletter";
import { ReturnUpButton } from "../ui/buttons/return-up-button";
import { Footer } from "./footer";
import { SaleBannerSection } from "./sale-banner-section";

export function EcommerceSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      <SaleBannerSection />
      <Newsletter />
      <ReturnUpButton />
      <Footer website_name={options.website_name} />
    </main>
  );
}
