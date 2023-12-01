import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export function CartSummary() {
  return (
    <div className="grid gap-4 px-4 py-6 dark:text-white md:gap-8">
      <Card className="grid items-start gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            alt="Sale Item 1"
            className="aspect-square w-full rounded-lg object-cover"
            height="64"
            src="/img/01-neck-pillow.webp"
            width="64"
            sizes="(max-width: 768px) 33vw, 33vw"
          />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Product Name</span>
            <span className="text-base">
              Quantity: <Badge>1</Badge>
            </span>
            <span className="text-base">Price: $99</span>
          </div>
          <Button className="ml-auto" size="sm" variant="destructive">
            Remove
          </Button>
        </div>
      </Card>
      <Card className="grid items-start gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            alt="Sale Item 2"
            className="aspect-square w-full rounded-lg object-cover"
            height="64"
            src="/img/02-luggage.webp"
            width="64"
            sizes="(max-width: 768px) 33vw, 33vw"
          />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Product Name</span>
            <span className="text-base">
              Quantity: <Badge>2</Badge>
            </span>
            <span className="text-base">Price: $199</span>
          </div>
          <Button className="ml-auto" size="sm" variant="destructive">
            Remove
          </Button>
        </div>
      </Card>
      <Card className="mt-4 p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-xl font-bold">$298</span>
        </div>
      </Card>
      <Link href="/ecommerce/checkout">
        <Button
          className=" mt-4 w-full rounded-lg bg-green-500 p-2 text-lg font-bold text-white hover:bg-green-600"
          variant="action"
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
}
