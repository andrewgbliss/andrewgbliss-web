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

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 pb-12 text-black text-black dark:from-zinc-900 dark:to-zinc-800 dark:text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Services</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Web Design</CardTitle>
          </CardHeader>
          <div className="h-64 overflow-hidden">
            <Image
              alt="Web Design"
              className="w-full object-cover"
              width="200"
              height="300"
              src="/img/web-develop.webp"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <CardContent className="space-y-4 py-2">
            <p className="text-xl">
              We provide modern and responsive web design services for your
              business.
            </p>
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
            <Badge className="border-pink-500 text-pink-500" variant="outline">
              JavaScript
            </Badge>
          </CardContent>
          <CardFooter className="pt-5">
            <Button variant={"action"}>Contact Us</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Web Development</CardTitle>
          </CardHeader>
          <div className="h-64 overflow-hidden">
            <Image
              alt="Web Development"
              className="w-full object-cover"
              height="200"
              src="/img/soft-develop.webp"
              sizes="(max-width: 768px) 100vw, 33vw"
              width="200"
            />
          </div>
          <CardContent className="space-y-4 py-2">
            <p className="text-xl">
              Our team offers comprehensive web development services using the
              latest technologies.
            </p>
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
          </CardContent>
          <CardFooter className="pt-5">
            <Button variant={"action"}>Contact Us</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">UI / UX Development</CardTitle>
          </CardHeader>
          <div className="h-64 overflow-hidden">
            <Image
              alt="UI / UX Development"
              className="w-full object-cover"
              height="200"
              src="/img/uiux-develop.webp"
              sizes="(max-width: 768px) 100vw, 33vw"
              width="200"
            />
          </div>
          <CardContent className="space-y-4 py-2">
            <p className="text-xl">
              User interface design software, wireframes, user flow diagrams,
              sketchbooks, color swatches, and a creative, inspirational
              setting.
            </p>
            <Badge
              className="mr-2 border-red-500 text-red-500"
              variant="outline"
            >
              Tailwind
            </Badge>
            <Badge className="border-blue-500 text-blue-500" variant="outline">
              Image Editing
            </Badge>
          </CardContent>
          <CardFooter className="pt-5">
            <Button variant={"action"}>Contact Us</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
