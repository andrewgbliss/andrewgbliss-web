import { Layout } from "~/components/bid-calculator/Layout";

export const metadata = {
  title: "Andrew G Bliss",
  description: "My website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
