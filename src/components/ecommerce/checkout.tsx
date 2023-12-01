import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export function Checkout() {
  return (
    <div className="grid gap-0 bg-slate-100 px-4 py-6 text-gray-400 md:gap-8">
      <Card className="grid items-start gap-4 md:gap-6">
        <div className="flex items-center gap-4 bg-white p-5">
          <Image
            alt="Sale Item 1"
            className="w-64 rounded-lg"
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
        <div className="flex items-center gap-4 bg-white p-5">
          <Image
            alt="Sale Item 2"
            className="w-64 rounded-lg"
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
      <Card className="mt-4 bg-white p-4">
        <div className="flex items-center justify-between ">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-xl font-bold">$298</span>
        </div>
      </Card>
      <Button
        className="mt-4 rounded-lg bg-green-500 p-2 text-lg font-bold text-white hover:bg-green-600"
        variant="action"
      >
        PAY NOW
      </Button>
    </div>
  );
}
