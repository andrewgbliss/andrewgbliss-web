"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hAyy5y6yuUb
 */
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
import React from "react";
import { ScrollSlideUp } from "../ui/animations";

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
    <ScrollSlideUp duration={2000} fadeIn>
      <Card className="flex h-[600px] flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <div className="mx-auto h-64 w-64 overflow-hidden">
          <Image
            alt={title}
            className="w-full object-cover"
            width="200"
            height="300"
            src={img}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <CardContent className="space-y-4 py-2">
          <p className="text-lg">{description}</p>
          <div>{badges}</div>
        </CardContent>
        <CardFooter className="pt-5">
          <Button variant={"action"}>Contact Us</Button>
        </CardFooter>
      </Card>
    </ScrollSlideUp>
  );
};

export function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 pb-12  text-black dark:from-zinc-900 dark:to-zinc-800 dark:text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Services</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceItem
            title="Web Design"
            description="We provide modern and responsive web design services for your
          business."
            img="/img/web-develop.webp"
            badges={
              <>
                <Badge
                  className="border-blue-500m mr-2 text-blue-500"
                  variant="outline"
                >
                  HTML
                </Badge>
                <Badge
                  className="mr-2 border-green-500 text-green-500"
                  variant="outline"
                >
                  CSS
                </Badge>
                <Badge
                  className="border-pink-500 text-pink-500"
                  variant="outline"
                >
                  JavaScript
                </Badge>
              </>
            }
          />
          <ServiceItem
            title="Web Development"
            description="Our team offers comprehensive web development services using the latest technologies."
            img="/img/soft-develop.webp"
            badges={
              <>
                <Badge
                  className="mr-2 border-yellow-500 text-yellow-500"
                  variant="outline"
                >
                  React
                </Badge>
                <Badge
                  className="mr-2 border-blue-500 text-blue-500"
                  variant="outline"
                >
                  Next.js
                </Badge>
                <Badge
                  className="border-green-500 text-green-500"
                  variant="outline"
                >
                  PostgreSQL
                </Badge>
              </>
            }
          />
          <ServiceItem
            title="UI / UX Development"
            description=" User interface design software, wireframes, user flow diagrams, sketchbooks, color swatches, and a creative, inspirational setting."
            img="/img/uiux-develop.webp"
            badges={
              <>
                <Badge
                  className="mr-2 border-red-500 text-red-500"
                  variant="outline"
                >
                  Tailwind
                </Badge>
                <Badge
                  className="border-blue-500 text-blue-500"
                  variant="outline"
                >
                  Image Editing
                </Badge>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
