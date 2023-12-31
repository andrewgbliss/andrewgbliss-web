/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "~/components/ui/button";
import { ScrollFadeIn } from "../ui/animations";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex min-h-screen w-full items-center justify-center py-12"
    >
      <div className="container px-4 md:px-6">
        <ScrollFadeIn offsetScroll={300}>
          <h2 className="pb-5 text-center text-5xl font-bold">Pricing</h2>
        </ScrollFadeIn>
        <ScrollFadeIn offsetScroll={300}>
          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3 md:gap-8">
            <div className="dark:bg-zinc-850 flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-6 text-black shadow-lg">
              <div>
                <h3 className="text-center text-2xl font-bold">Basic</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">$100</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Website Setup
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    1 page design and development
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    1 template
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="dark:bg-zinc-850 relative flex flex-col justify-between rounded-lg border border-purple-500 bg-white p-6 text-black shadow-lg">
              <div className="absolute left-1/2 top-0 inline-block -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 text-sm text-white">
                Popular
              </div>
              <div>
                <h3 className="text-center text-2xl font-bold">Pro</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">$500</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <IconCheck className="text-2xs mr-2 rounded-full bg-green-500 p-1 text-white" />
                    Website Setup
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    5 page design and development
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    1 template
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Support
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="dark:bg-zinc-850 flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-6 text-black shadow-lg">
              <div>
                <h3 className="text-center text-2xl font-bold">Enterprise</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">$1000</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <IconCheck className="text-2xs mr-2 rounded-full bg-green-500 p-1 text-white" />
                    Website Setup
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Many page designs and development
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Many templates
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Support
                  </li>
                  <li className="flex items-center">
                    <IconCheck className="mr-2 rounded-full bg-green-500 p-1 text-xs text-white" />
                    Enterprise features
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function IconCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
