"use client";

import { TopBar } from "~/components/portfolio/top-bar";
import type { WebsiteOptions } from "./types";
import Link from "next/link";
import { BusinessCard } from "./cards/business-card";
import { FadeIn } from "../ui/animations";
import { DownButton } from "../ui/buttons/down-button";
import { scrollToElementById } from "~/lib/utils";
export function HeroSection({ options }: { options: WebsiteOptions }) {
  return (
    <section
      className="relative h-screen bg-cover bg-no-repeat dark:filter"
      style={
        {
          // backgroundImage: `url("${options.background_cover_url}")`,
          // filter: "saturate(50%) brightness(80%)",
        }
      }
    >
      <header>
        <TopBar options={options} />
      </header>
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 sm:px-6 lg:px-8">
        <FadeIn show>
          <div className="rounded-xl">
            <BusinessCard
              title={options.website_name}
              tagline={options.tagline}
              description={options.description}
              top_left={
                <div></div>
                // <Link
                //   className="hidden text-lg font-bold text-blue-500 sm:block"
                //   href={"/"}
                // >
                //   <Label className="text-xl">{options.website_url}</Label>
                // </Link>
              }
              top_right={<></>}
              call_to_action={
                <div>
                  <div className="flex h-full flex-col items-center justify-center space-y-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-5">
                      <Link
                        href="/portfolio"
                        className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Portfolio
                      </Link>
                      <Link
                        href="/resume"
                        className="rounded-md bg-gray-700 px-3 py-2 text-xl  font-medium hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Resume
                      </Link>
                    </div>
                    <div>
                      <DownButton
                        onClick={() => {
                          scrollToElementById("portfolio");
                        }}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
