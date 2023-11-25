/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/R0KDHa9zR8h
 */
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import Image from "next/image";

export function SaleBannerSection() {
  return (
    <section className="w-screen bg-black p-6 sm:p-12">
      <div className="grid gap-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-50">
              Limited Time Sale
            </h1>
            <div className="flex gap-1">
              <p className="text-xl text-zinc-500 dark:text-zinc-400 sm:text-3xl">
                Hurry up! Offer ends in
              </p>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 sm:text-3xl">
                <span className="font-semibold">00:59:58</span>.
              </p>
            </div>
          </div>
          <Button
            className="w-full shrink-0 text-xl sm:w-96 md:ml-auto"
            size="lg"
            variant="default"
          >
            Buy Now
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <Card>
            <div className="relative">
              <Badge>25% Off</Badge>
              <Image
                alt="Sale Item 1"
                className="aspect-square w-full rounded-lg object-cover"
                height="300"
                src="/img/01-neck-pillow.webp"
                width="300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Neck Pillow</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">$99.99</p>
            </div>
          </Card>
          <Card>
            <div className="relative">
              <Badge>30% Off</Badge>
              <Image
                alt="Sale Item 2"
                className="aspect-square w-full rounded-lg object-cover"
                height="300"
                src="/img/02-luggage.webp"
                width="300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Luggage</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">$79.99</p>
            </div>
          </Card>
          <Card>
            <div className="relative">
              <Badge>20% Off</Badge>
              <Image
                alt="Sale Item 3"
                className="aspect-square w-full rounded-lg object-cover"
                height="300"
                src="/img/03-backpack.webp"
                width="300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Backpack</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">$89.99</p>
            </div>
          </Card>
          <Card>
            <div className="relative">
              <Badge>15% Off</Badge>
              <Image
                alt="Sale Item 4"
                className="aspect-square w-full rounded-lg object-cover"
                height="300"
                src="/img/04-headphones.webp"
                width="300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Headphones</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">$69.99</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
