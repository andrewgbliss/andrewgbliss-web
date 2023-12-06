"use client";

import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import React from "react";

export const Carousel = ({
  options,
  children,
}: {
  options: EmblaOptionsType;
  children: React.ReactNode;
}) => {
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </div>
  );
};
