/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wWucSv5w4hk
 */
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function AButton() {
  return (
    <Link href={"/"}>
      <Button
        className="bg-transparent transition-colors duration-150 hover:bg-gray-200 dark:hover:bg-gray-700"
        variant="secondary"
      >
        <span className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
          A
        </span>
      </Button>
    </Link>
  );
}
