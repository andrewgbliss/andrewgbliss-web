/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { HeroLinks } from "./hero-links";
import { useEffect, useState } from "react";
import type { WebsiteOptions } from "./types";
import { ShoppingcartButton } from "../ui/buttons/shopping-cart";
import { AButton } from "../ui/buttons/a-button";

const Logo = ({ options }: { options: WebsiteOptions }) => {
  return (
    <div className="flex items-center gap-5">
      <Link className="text-lg font-bold text-blue-500" href="#">
        {/* <Image
          src={options.logo.img_src}
          width={60}
          height={60}
          alt="Logo"
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
        /> */}
      </Link>
      <Link className="hidden text-xl sm:block sm:text-3xl" href={"/"}>
        {options.website_name}
      </Link>
      <div className="block sm:hidden">
        <AButton />
      </div>
    </div>
  );
};

export function TopBar({ options }: { options: WebsiteOptions }) {
  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isOpaque = window.scrollY > 0;
      setOpaque(isOpaque);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 z-20 w-full transition-colors duration-300 ${
        opaque ? "bg-black bg-opacity-80 text-white" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between bg-transparent px-4 py-2">
        <div>
          <Logo options={options} />
        </div>
        <div className="flex">
          <HeroLinks />
          <div className="p-3">
            <ShoppingcartButton badge={"0"} />
          </div>
        </div>
      </nav>
    </div>
  );
}
