import "~/styles/globals.css";
import { ThemeProvider } from "~/components/ui/theme-provider";

export const metadata = {
  title: "Github",
  description: "My website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}