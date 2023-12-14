import CodeSample from "../CodeSample";
import Image from "next/image";
import htmlImg from "./HTML5.png";
import Link from "next/link";
import { SlideLeft } from "~/components/ui/animations";

const htmlContent = `1 <html lang="en">
2  <head>
3   <title>Level Up Dev</title>
4  </head>
5  <body>
6   <h1>Anyone can become a developer.</h1>
7   <p>Start building your skills today.</p>
8  </body>
9 </html>
`;

export default function HTMLIntroduction() {
  return (
    <>
      <div className="h-24" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16">
        <div>
          <CodeSample className="html" content={htmlContent} />
        </div>
        <div className="text-center">
          <SlideLeft>
            <div>
              <h3 className="pt-6 md:pt-0">HTML</h3>
              <div className="py-2">
                <Image
                  src={htmlImg}
                  width={100}
                  height={100}
                  placeholder="blur"
                  alt=""
                  priority
                />
              </div>
              <p className="px-2 py-2">
                HTML (Hyper Text Markup Language) is the language of the
                internet. It defines the building blocks of displaying a web
                page. Learn HTML to become a front end web developer.
              </p>
              <div className="pt-8">
                <Link legacyBehavior href="/courses/html">
                  <a className="btn btn-primary expand cursor-pointer text-white">
                    View Courses
                  </a>
                </Link>
              </div>
            </div>
          </SlideLeft>
        </div>
      </div>
    </>
  );
}
