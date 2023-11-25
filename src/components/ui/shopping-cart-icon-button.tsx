/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "~/components/ui/button";

export function ShoppingCartIconButton() {
  return (
    <div className="relative">
      <Button variant="outline">
        <IconShoppingcart className="relative z-10 h-6 w-6" />
        <span className="absolute right-0 top-0 z-20 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-white">
          9
        </span>
      </Button>
    </div>
  );
}

function IconShoppingcart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
