import { TopBar } from "~/components/ecommerce/top-bar";
import type { WebsiteOptions } from "./types";
import { Button } from "../ui/button";
import Image from "next/image";
export function HeroSection({ options }: { options: WebsiteOptions }) {
  return (
    <section className="relative h-[500px] w-full">
      <TopBar options={options} />
      <div className="flex">
        <Image
          alt="Product Image"
          className="object-cover object-center"
          width="500"
          height="500"
          src="/img/web-develop.webp"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <Image
          alt="Product Image"
          className="object-cover object-center"
          width="500"
          height="500"
          src="/img/soft-develop.webp"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
      <div className="absolute inset-0 flex h-[500px] flex-col items-center justify-center space-y-6 bg-black/30 p-6 sm:items-end">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Amazing Product
        </h1>
        <p className="text-center text-xl text-white md:text-2xl">
          Experience the best quality at an affordable price.
        </p>
        <Button className="text-lg md:text-xl">Shop Now</Button>
      </div>
    </section>
  );
}
