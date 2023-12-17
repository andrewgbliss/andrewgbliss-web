/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

"use client";

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import { NextButton, PrevButton } from "../carousel/carousel";

const options: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};

const ServiceItem = ({
  title,
  description,
  img,
  badges,
}: {
  title: string;
  description: string;
  img: string;
  badges: React.ReactNode;
}) => {
  return (
    <Card className="flex flex-col justify-between">
      <div className="mx-auto w-full overflow-hidden bg-cover">
        <Image
          alt={title}
          className="h-full w-full rounded-xl"
          width="400"
          height="300"
          src={img}
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 py-2">
        <p className="h-16 overflow-hidden text-lg">{description}</p>
        <div>{badges}</div>
      </CardContent>
      <CardFooter className="pt-5">
        <Button variant={"action"}>Contact Us</Button>
      </CardFooter>
    </Card>
  );
};

const serviceItems = [
  {
    title: "Web Design",
    description:
      "We provide modern and responsive web design services for your business.",
    img: "/img/web-develop.webp",
    badges: [
      { className: "border-blue-500m mr-2 text-blue-500", text: "HTML" },
      { className: "mr-2 border-green-500 text-green-500", text: "CSS" },
      { className: "border-pink-500 text-pink-500", text: "JavaScript" },
    ],
  },
  {
    title: "Web Development",
    description:
      "Our team offers comprehensive web development services using the latest technologies.",
    img: "/img/soft-develop.webp",
    badges: [
      { className: "mr-2 border-yellow-500 text-yellow-500", text: "React" },
      { className: "mr-2 border-blue-500 text-blue-500", text: "Next.js" },
      { className: "border-green-500 text-green-500", text: "PostgreSQL" },
    ],
  },
  {
    title: "UI / UX Development",
    description:
      "User interface design software, wireframes, user flow diagrams, sketchbooks, color swatches, and a creative, inspirational setting.",
    img: "/img/uiux-develop.webp",
    badges: [
      { className: "mr-2 border-red-500 text-red-500", text: "Tailwind" },
      { className: "border-blue-500 text-blue-500", text: "Image Editing" },
    ],
  },
  {
    title: "Web Design",
    description:
      "We provide modern and responsive web design services for your business.",
    img: "/img/web-develop.webp",
    badges: [
      { className: "border-blue-500m mr-2 text-blue-500", text: "HTML" },
      { className: "mr-2 border-green-500 text-green-500", text: "CSS" },
      { className: "border-pink-500 text-pink-500", text: "JavaScript" },
    ],
  },
  {
    title: "Web Development",
    description:
      "Our team offers comprehensive web development services using the latest technologies.",
    img: "/img/soft-develop.webp",
    badges: [
      { className: "mr-2 border-yellow-500 text-yellow-500", text: "React" },
      { className: "mr-2 border-blue-500 text-blue-500", text: "Next.js" },
      { className: "border-green-500 text-green-500", text: "PostgreSQL" },
    ],
  },
  {
    title: "UI / UX Development",
    description:
      "User interface design software, wireframes, user flow diagrams, sketchbooks, color swatches, and a creative, inspirational setting.",
    img: "/img/uiux-develop.webp",
    badges: [
      { className: "mr-2 border-red-500 text-red-500", text: "Tailwind" },
      { className: "border-blue-500 text-blue-500", text: "Image Editing" },
    ],
  },
];

export function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 pb-24  text-black dark:from-zinc-900 dark:to-zinc-800 dark:text-white">
      <div className="text-center">
        <h2 className="py-10 text-5xl font-bold">Services</h2>
      </div>
      <div className="container relative mx-auto min-h-screen py-5">
        <div className={`embla__services_full sm:embla__services_half`}>
          <div className={`embla__services__viewport`} ref={emblaRef}>
            <div className={`embla__services__container`}>
              {serviceItems.map((item, i) => (
                <div className="embla__services__slide" key={i}>
                  <ServiceItem
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    badges={
                      <>
                        {item.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            className={badge.className}
                            variant="outline"
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
}
