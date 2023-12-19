"use client";

import { Carousel } from "../carousel/carousel";
import { portfolio_items } from "./portfolio-items";
import { type EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import QRCode from "react-qr-code";

const options: EmblaOptionsType = { axis: "y", loop: true, dragThreshold: 10 };

export function TableOfContentsQrCodes() {
  return (
    <div className="">
      <Carousel options={options}>
        {portfolio_items.map((slide) => (
          <div className="embla__slide" key={slide.title}>
            <Image
              alt={slide.title}
              className="w-full object-cover object-center sm:h-full"
              width="100"
              height="100"
              src={slide.img_src}
              sizes="(max-width: 768px) 100vw, 100vw"
              priority
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white p-5 sm:bottom-0 sm:left-auto sm:right-0 sm:top-auto sm:transform-none">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={
                  slide.href.startsWith("/")
                    ? `${process.env.NEXTAUTH_URL}${slide.href}`
                    : slide.href
                }
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
