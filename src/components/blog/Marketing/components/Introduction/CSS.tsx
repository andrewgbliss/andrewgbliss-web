import CodeSample from "../CodeSample";
import Image from "next/image";
import Link from "next/link";
import SlideRight from "~/components/ui/animations";

const htmlContent = `1 @media (min-width: 640px) {
2   .container {
3     max-width: 640px;
4   }
5   .padding {
6     padding: 1.25rem;
7   }
8 }
`;

function Content() {
  return (
    <>
      <h3 className="pt-6 xl:pt-0">CSS</h3>
      <div className="py-2">
        <Image
          src="/img/Languages/CSS.png"
          width={100}
          height={100}
          alt=""
          priority
        />
      </div>
      <p className="px-2 py-2">
        CSS (Cascading Style Sheets) is the way to add style to your webpage. It
        defines the styles, colors, sizes, and responsiveness of your webpage.
        Learn CSS to become a front end web developer.
      </p>
      <div className="pt-8">
        <Link legacyBehavior href="/courses/css">
          <a className="btn btn-primary expand cursor-pointer text-white">
            View Courses
          </a>
        </Link>
      </div>
    </>
  );
}

export default function CSSIntroduction() {
  return (
    <>
      <div className="h-24" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16">
        <div className="order-2 text-center lg:order-1">
          <SlideRight>
            <Content />
          </SlideRight>
        </div>
        <div className="order-1 sm:order-2">
          <CodeSample className="css" content={htmlContent} />
        </div>
      </div>
    </>
  );
}
