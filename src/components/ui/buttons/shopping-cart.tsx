import { Badge } from "../badge";
import { Button } from "../button";

export function ShoppingcartButton({ badge }: { badge: string }) {
  return (
    <Button size="icon" variant="ghost">
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <Badge className="absolute right-1 top-1 bg-red-500 text-sm text-white">
        {badge}
      </Badge>
    </Button>
  );
}
