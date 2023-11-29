import { ContactSection } from "~/components/portfolio/contact-section";
import { HeroSection } from "~/components/portfolio/hero-section";
import { TableOfContents } from "~/components/portfolio/table-of-contents";
import type { WebsiteOptions } from "~/components/portfolio/types";
import { Newsletter } from "./newsletter";
import { PricingSection } from "./pricing-section";
import { ReturnUpButton } from "../ui/buttons/return-up-button";
import { ServicesSection } from "./services-section";
import { Footer } from "./footer";

export function PortfolioSite({ options }: { options: WebsiteOptions }) {
  return (
    <main className="relative">
      <HeroSection options={options} />
      {/* <section className="relative flex h-64 items-center justify-center sm:h-96">
        <div
          className="parallax absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url('img/pexels-luis-gomes.jpg')`,
          }}
        ></div>
      </section> */}
      <TableOfContents />
      <ServicesSection />
      <PricingSection />
      <section className="relative flex h-screen items-center justify-center">
        <div
          className="parallax absolute inset-0 z-0 flex items-center justify-center bg-cover "
          style={{
            backgroundImage: `url('img/pexels-mikael-blomkvist.jpg')`,
          }}
        >
          <ContactSection />
        </div>
      </section>

      <Newsletter />
      <ReturnUpButton />
      <Footer website_name={options.website_name} />
    </main>
  );
}
