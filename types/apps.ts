export type App = {
  name: string;
  href: string;
  show?: boolean;
};

export const apps: App[] = [
  {
    name: "marketing",
    href: "/marketing",
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
    name: "t3-stack",
    href: "/t3-stack",
  },
  {
    name: "t3-stack",
    href: "/t3-stack",
  },

  {
    name: "authentication",
    href: "/authentication",
  },
  {
    name: "newsletter",
    href: "/newsletter",
  },
  {
    name: "flash-cards",
    href: "/flash-cards",
  },
  {
    name: "register",
    href: "/register",
  },
  {
    name: "memories",
    href: "/memories",
    show: false,
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "pricing",
    href: "/pricing",
  },
];
