import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-gray-100 text-black md:py-16">
      <div className="paper-form">
        <form>
          <h6 className="text-center">Register to Website</h6>
          <div className="py-6">
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="pb-6">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="pb-6">
            <Input
              id="password2"
              name="password2"
              type="password"
              placeholder="Re-enter Password"
            />
          </div>
          <div className="flex items-center pb-6">
            <input id="newsletter" type="checkbox" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
              Newsletter?
            </label>
          </div>
          <div className="pb-6">
            <Button className="w-full" variant={"secondary"} type="submit">
              Register
            </Button>
          </div>
          <div className="text-center">
            <Link
              href="/authentication"
              className="hover:text-primary-light text-primary"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
