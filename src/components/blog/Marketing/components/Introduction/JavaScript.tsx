import CodeSample from "../CodeSample";
import Image from "next/image";
import Link from "next/link";
import { SlideLeft } from "~/components/ui/animations";

const jsContent = `1 function add(num1, num2) {
2   return num1 + num2;
3 }
4 
5 console.log(add(1, 2)); // output 3
6 console.log(add(3, 3)); // output 6
7 console.log(add(3, add(1, 2))); // output 6
`;

function Content() {
  return (
    <>
      <h3 className="pt-6 md:pt-0">JavaScript</h3>
      <div className="py-2">
        <Image
          src="/img/Languages/JavaScript.png"
          width={100}
          height={100}
          alt=""
          priority
        />
      </div>
      <p className="px-2 py-2">
        JavaScript in a programming language that makes your website
        interactive. It can also be used in the backend to create APIs. Learn
        JavaScript to become a full stack developer.
      </p>
      <div className="pt-8">
        <Link legacyBehavior href="/courses/javascript">
          <a className="btn btn-primary expand cursor-pointer text-white">
            View Courses
          </a>
        </Link>
      </div>
    </>
  );
}

export default function JavaScriptIntroduction() {
  return (
    <>
      <div className="h-24" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16">
        <div>
          <CodeSample className="javascript" content={jsContent} />
        </div>
        <div className="text-center">
          <SlideLeft>
            <Content />
          </SlideLeft>
        </div>
      </div>
    </>
  );
}
