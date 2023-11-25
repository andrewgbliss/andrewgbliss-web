import { Button } from "../button";

export const HamburgerMenu = () => {
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
        <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Button>
  );
};
