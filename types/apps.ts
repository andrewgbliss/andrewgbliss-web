export type App = {
  name: string;
  href: string;
  show?: boolean;
};

export const apps: App[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "login",
    href: "/login",
  },
  {
    name: "register",
    href: "/register",
  },
  {
    name: "terms",
    href: "/terms",
  },
  {
    name: "privacy",
    href: "/privacy",
  },
  {
    name: "travel",
    href: "/travel",
  },
  {
    name: "zero",
    href: "https://www.zerofallstudios.com",
  },
  {
    name: "abybyo",
    href: "https://www.abybyo.com",
  },
  {
    name: "flash-cards",
    href: "/flash-cards",
  },
  {
    name: "memories",
    href: "/memories",
    show: false,
  },
];
