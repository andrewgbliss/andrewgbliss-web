import { BillingAddress } from "~/components/ecommerce/billing-address";
import { Checkout } from "~/components/ecommerce/checkout";
import { Footer } from "~/components/ecommerce/footer";

export default function Page() {
  return (
    <>
      <div className="container mx-auto py-12">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="py-12">
            <h1 className="text-6xl">Checkout</h1>
          </div>
          <div className="grid grid-cols-2">
            <BillingAddress />
            <Checkout />
          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <Footer website_name="Ecommerce Site" />
    </>
  );
}
