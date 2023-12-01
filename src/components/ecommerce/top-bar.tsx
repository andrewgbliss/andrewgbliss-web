/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { WebsiteOptions } from "./types";
import { AButton } from "../ui/buttons/a-button";
import { SheetSide } from "./cart-sheet";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Logo = ({ options }: { options: WebsiteOptions }) => {
  return (
    <div className="flex items-center gap-5">
      <Link className="text-lg font-bold text-blue-500" href="#"></Link>
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
          <div className="p-3">
            <SheetSide>
              <Button size="icon" variant="ghost">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <Badge className="absolute right-1 top-1 bg-red-500 text-sm text-white">
                  0
                </Badge>
              </Button>
            </SheetSide>
          </div>
        </div>
      </nav>
    </div>
  );
}
