/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KQuDDFbeeAY
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
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ShareButton } from "../ui/buttons/share-button";

const CardItem = ({
  title,
  imgSrc,
  badge,
  tagline,
  href,
}: {
  title: string;
  imgSrc: string;
  tagline: string;
  href: string;
  badge: React.ReactNode;
}) => {
  return (
    <Card className="shadow-xl dark:bg-white dark:text-black">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="lg:text-2xl xl:text-3xl">{title}</CardTitle>
          <ShareButton defaultValue={href} />
        </div>
        {badge}
      </CardHeader>
      <CardContent>
        <Image
          alt={title}
          src={imgSrc}
          className="w-full"
          height="240"
          width="113"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <p className="pt-5 text-xl">{tagline}</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center">
          <Link href={href} target="_blank">
            <Button className="text-xl" variant="action">
              Show
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export function TableOfContents() {
  return (
    <section id="portfolio" className="w-full p-6 sm:p-12">
      <div className="py-24 text-center">
        <h2 className="text-5xl font-bold">Portfolio</h2>
      </div>
      <div className="grid gap-4 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <CardItem
            title="Travel Explorer"
            imgSrc="/img/travel-explorer.png"
            tagline="Beach adventures starting at $99."
            href="/travel"
            badge={<Badge className="bg-red-500 text-white">Best Seller</Badge>}
          />
          <CardItem
            title="Zero Fall Studios"
            imgSrc="/img/zero-fall-studios.png"
            tagline="Dont Fall."
            href="https://www.zerofallstudios.com"
            badge={
              <Badge className="bg-blue-500 text-white">New Arrival</Badge>
            }
          />
          <CardItem
            title="Abybyo"
            imgSrc="/img/abybyo-website.png"
            tagline="Study Journal."
            href="https://www.abybyo.com"
            badge={<Badge className="bg-black text-white">Featured</Badge>}
          />
        </div>
      </div>
    </section>
  );
}
