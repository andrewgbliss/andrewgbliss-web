import Link from "next/link";
import { SlideUp } from "~/components/ui/animations";

export default function Cover() {
  return (
    <section className="bg-brand overflow-y-hidden text-white">
      <div className="mx-auto py-10 md:w-2/4 md:py-24">
        <div className="h-8" />
        <SlideUp show>
          <div>
            <p className="px-4 pb-6 pt-12 text-center text-4xl uppercase leading-normal md:px-0 md:py-6">
              Anyone can become a <strong>strong developer.</strong>
            </p>
            <p className="px-4 py-6 text-center text-xl md:px-0">
              It&apos;s time to <strong>level up</strong> your development
              skills, track your progress, and receive mentoring from skilled
              professionals.
            </p>
            <div className="pt-6 text-center">
              <Link legacyBehavior href="/register">
                <a className="btn btn-primary expand w-64 cursor-pointer text-white">
                  Sign Up For Free
                </a>
              </Link>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
