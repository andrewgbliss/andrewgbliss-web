/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { QrCodeButtonDialog } from "../ui/buttons/qr-code-button";
import { portfolio_items } from "./portfolio-items";
import { ScrollFadeIn } from "../ui/animations";
import { NextButton, PrevButton } from "../carousel/carousel";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";

const CardItem = ({
  title,
  badge,
  tagline,
  href,
  top_right,
  img,
}: {
  title: string;
  tagline: string;
  href: string;
  badge: React.ReactNode;
  top_right: React.ReactNode;
  img: React.ReactNode;
}) => {
  return (
    <ScrollFadeIn offsetScroll={400}>
      <Card className="shadow-xl dark:bg-white dark:text-black">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-2xl xl:text-3xl">
              <Link href={href} target="_blank">
                {title}
              </Link>
            </CardTitle>
            {top_right}
          </div>
          {badge}
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden sm:h-48">{img}</div>
          <p className="pt-5 text-lg">{tagline}</p>
        </CardContent>
      </Card>
    </ScrollFadeIn>
  );
};

const options: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};

function TableOfContentsMobile() {
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
    <div className="relative py-12">
      <div className={`embla__services_full sm:embla__services_half`}>
        <div className={`embla__services__viewport`} ref={emblaRef}>
          <div className={`embla__services__container`}>
            {portfolio_items.map((item, i) => {
              return (
                <div className="embla__services__slide" key={i}>
                  <CardItem
                    key={item.title}
                    title={item.title}
                    tagline={item.tagline}
                    href={item.href}
                    badge={
                      <Badge className={`${item.badge.color} text-white`}>
                        {item.badge.text}
                      </Badge>
                    }
                    top_right={<QrCodeButtonDialog value={item.href} />}
                    img={
                      <Image
                        alt={item.title}
                        src={item.img_src}
                        className="w-full"
                        height="240"
                        width="113"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}

export function TableOfContents() {
  return (
    <section
      id="portfolio"
      className="parallax  w-full p-6 sm:p-12"
      style={{
        backgroundImage: `url('img/pexels-luis-gomes.jpg')`,
      }}
    >
      {/* <div className="parallax absolute inset-0 bg-cover"></div> */}
      <div className="block sm:hidden">
        <TableOfContentsMobile />
      </div>
      <div className="hidden sm:block">
        <div className="container mx-auto grid gap-4 pb-24">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolio_items.map((item) => {
              return (
                <CardItem
                  key={item.title}
                  title={item.title}
                  tagline={item.tagline}
                  href={item.href}
                  badge={
                    <Badge className={`${item.badge.color} text-white`}>
                      {item.badge.text}
                    </Badge>
                  }
                  top_right={<QrCodeButtonDialog value={item.href} />}
                  img={
                    <Image
                      alt={item.title}
                      src={item.img_src}
                      className="w-full"
                      height="240"
                      width="113"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
