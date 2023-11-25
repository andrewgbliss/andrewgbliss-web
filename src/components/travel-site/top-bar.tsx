/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { HeroLinks } from "./hero-links";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import type { WebsiteOptions } from "./types";

const Logo = ({ options }: { options: WebsiteOptions }) => {
  return (
    <div className="flex items-center gap-5">
      <Link className="text-lg font-bold text-blue-500" href="#">
        <Image
          src={options.logo.img_src}
          width={60}
          height={60}
          alt="Logo"
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
        />
      </Link>
      <Link className="text-lg font-bold text-blue-500" href="#">
        <Label className="text-xl text-white">
          {options.logo.website_name}
        </Label>
      </Link>
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
        opaque ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between bg-transparent px-4 py-2">
        <div>
          <Logo options={options} />
        </div>
        <div className="flex">
          <HeroLinks />
          <IconShoppingcart className="h-6 w-6" />
        </div>
      </nav>
    </div>
  );
}

function IconShoppingcart(props: any) {
  return (
    <div className="relative p-3">
      <Button
        className="flex items-center text-blue-500"
        size="icon"
        variant="ghost"
      >
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <Badge className="absolute right-1 top-0 bg-blue-500 text-sm text-white">
          3
        </Badge>
      </Button>
    </div>
  );
}
