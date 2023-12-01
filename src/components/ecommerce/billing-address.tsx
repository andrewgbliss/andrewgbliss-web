import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function BillingAddress() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Billing Address</CardTitle>
        <CardDescription>
          Enter your billing address information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Recipient&apos;s Name</Label>
          <Input
            className="border-red-500 focus:border-transparent"
            id="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input
            className="border-red-500 focus:border-transparent"
            id="address"
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              className="border-red-500 focus:border-transparent"
              id="city"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              className="border-red-500 focus:border-transparent"
              id="state"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">Zip Code</Label>
            <Input
              className="border-red-500 focus:border-transparent"
              id="zip"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            className="border-red-500 focus:border-transparent"
            id="country"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="border-red-500 focus:border-transparent"
            id="email"
            required
            type="email"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" variant={"action"} type="submit">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
