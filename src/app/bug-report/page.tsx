import { BugReportForm } from "~/components/bug-report-form";
import { Footer } from "~/components/portfolio/footer";
import { TopBar } from "~/components/portfolio/top-bar";
import type { WebsiteOptions } from "~/components/portfolio/types";

const options: WebsiteOptions = {
  logo: {
    img_src: "/img/uiux-develop.webp",
    website_name: "Bug Reporters.com",
  },
  website_name: "Bug Reporters.com",
  background_cover_url: "/img/jumbotron.jpg",
  tagline: "Software Engineer",
  headline: "Bug reporting made easy.",
  description:
    "Professional with more than 15 plus years of experience in bug reporting.",
  website_url: "andrewgbliss.com",
};

export default function Page() {
  return (
    <>
      <div className="hidden sm:block">
        <TopBar options={options} />
      </div>
      <section
        className="parallax relative bg-cover bg-no-repeat dark:filter"
        style={{
          backgroundImage: `url("/img/uiux-develop.webp")`,
          // filter: "saturate(50%) brightness(80%)",
        }}
      >
        <div className="mx-auto flex-col items-center justify-center sm:w-full sm:pt-12 md:w-full md:px-8 lg:w-full xl:w-1/2">
          <div className="w-full sm:p-12">
            <div className="h-screen bg-white sm:h-auto sm:rounded-2xl">
              <BugReportForm />
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </section>

      <div className="hidden sm:block">
        <Footer website_name="Bug Reporters.com" />
      </div>
    </>
  );
}
