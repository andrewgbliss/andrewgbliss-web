import "~/styles/globals.css";
import { ThemeProvider } from "~/components/ui/theme-provider";

const title = "Parallel Routes";

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({
  children,
  audience,
  views,
}: {
  children: React.ReactNode;
  audience: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="space-y-6">
        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {children}
          <div>Layout</div>
          <div className="space-y-6">
            {audience}
            {views}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
