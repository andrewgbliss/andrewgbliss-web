import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { QrCodeButtonDialog } from "../ui/buttons/qr-code-button";
import { portfolio_items } from "./portfolio-items";
import { ScrollFadeIn } from "../ui/animations";

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
    <div>
      <ScrollFadeIn>
        <Card className="shadow-xl dark:bg-white dark:text-black">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="lg:text-2xl xl:text-3xl">
                <Link href={href} target="_blank">
                  {title}
                </Link>
              </CardTitle>
              {top_right}
            </div>
            {badge}
          </CardHeader>
          <CardContent>
            <div className="h-48 overflow-hidden">{img}</div>
            <p className="pt-5 text-xl">{tagline}</p>
          </CardContent>
        </Card>
      </ScrollFadeIn>
    </div>
  );
};

export function TableOfContents() {
  return (
    <section
      id="portfolio"
      className="parallax  h-screen w-full p-6 sm:p-12"
      style={{
        backgroundImage: `url('img/pexels-luis-gomes.jpg')`,
      }}
    >
      {/* <div className="parallax absolute inset-0 bg-cover"></div> */}
      <div className="grid gap-4 pb-24">
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
    </section>
  );
}
