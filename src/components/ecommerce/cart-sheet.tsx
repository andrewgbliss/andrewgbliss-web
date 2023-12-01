"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { CartSummary } from "./cart-summary";
import { ModeToggle } from "../ui/mode-toggle";

export function SheetSide({ children }: { children?: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={"right"} className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Your cart has 1 item. </SheetDescription>
        </SheetHeader>
        <CartSummary />
        <div className="p-3 dark:text-white">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
