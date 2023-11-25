/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

"use client";

import { Backdrop } from "~/components/ui/backdrop";
import { CircularProgress } from "~/components/ui/circular-progress";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import photos from "./photos.json";
import useImageLoaded from "~/hooks/useImageLoaded";
import { ScrollFadeIn as FadeIn } from "~/components/ui/animations";

interface PhotoProps {
  src: string;
  className?: string;
  expandedClassName?: string;
  objectPosition?: string;
  caption?: string;
}

function Photo(props: PhotoProps) {
  const { src, className = "", expandedClassName = "", caption = "" } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div
      className={`hover-expand cursor-pointer rounded-xl border bg-white p-3 shadow-2xl ${className} ${
        expanded ? `expanded-photo ${expandedClassName}` : ""
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Image
        src={src}
        width="300"
        height="200"
        className="rounded-xl"
        priority={true}
        alt=""
      />
      <div className="text-center">{caption}</div>
    </div>
  );
}

interface Photo {
  src: string;
  caption: string;
  objectPosition: string;
}

interface CoverProps {
  dir?: string;
  title: string;
  photos: Array<Photo>;
}

function Cover(props: CoverProps) {
  const { dir = "left", title = "", photos = [] } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === "right" ? "190deg" : "164deg"
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="flex min-h-screen justify-center sm:items-center">
        <div
          className={`flex flex-wrap justify-center ${
            dir === "right" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="p-5 pt-10 sm:w-1/3 sm:pt-20">
            <h2 className="label text-5xl">{title}</h2>
            <div className="flex justify-between px-10 pt-10 sm:pt-20">
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3">
              <Photo
                src={photos[0]?.src || ""}
                className="-rotate-6 transform"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[0]?.objectPosition}
                caption={photos[0]?.caption}
              />
              <Photo
                src={photos[1]?.src || ""}
                className="rotate-6 transform sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[1]?.objectPosition}
                caption={photos[1]?.caption}
              />
              <Photo
                src={photos[2]?.src || ""}
                className="translate-y-4 -rotate-6 transform"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[2]?.objectPosition}
                caption={photos[2]?.caption}
              />
              <Photo
                src={photos[3]?.src || ""}
                className=" translate-y-4 rotate-6 transform sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[3]?.objectPosition}
                caption={photos[3]?.caption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="mb-20 h-12 w-12 rounded-full bg-purple-400" />
      </FadeIn>
    </div>
  );
}

function MediumDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="mb-20 h-8 w-8 rounded-full bg-purple-400" />
      </FadeIn>
    </div>
  );
}

function SmallDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="mb-20 h-6 w-6 rounded-full bg-purple-400" />
      </FadeIn>
    </div>
  );
}
interface SteppingDotsProps {
  dir?: string;
}

function SteppingDots(props: SteppingDotsProps) {
  const { dir = "left" } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === "right" ? "7deg" : "-18deg"
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="flex justify-center">
        <div>
          <BigDot />
          <div
            className={`transform ${
              dir === "left" ? "-translate-x-14" : "translate-x-14"
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === "left" ? "-translate-x-24" : "translate-x-24"
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === "left" ? "-translate-x-28" : "translate-x-28"
            }`}
          >
            <MediumDot />
          </div>
          <div
            className={`transform ${
              dir === "left" ? "-translate-x-24" : "translate-x-24"
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === "left" ? "-translate-x-14" : "translate-x-14"
            }`}
          >
            <SmallDot />
          </div>
          <BigDot />
        </div>
      </div>
    </div>
  );
}

export const Memories: React.FC = () => {
  const loaded = useImageLoaded();
  return (
    <>
      <Backdrop open={!loaded}>
        <div>
          <div className="flex justify-center">
            <CircularProgress />
          </div>
          <div className="flex justify-center">Loading</div>
        </div>
      </Backdrop>
      {photos.map((row, i) => {
        const dir = i % 2 === 0 ? "left" : "right";
        return (
          <Fragment key={i}>
            <Cover dir={dir} title={row.title} photos={row.photos} />
            <SteppingDots dir={dir} />
          </Fragment>
        );
      })}
      <footer>
        <div className="flex items-center justify-center">
          <div className="p-5 pt-10 sm:w-1/3 sm:pt-20">
            <h2 className="label text-5xl">Happy Memories!</h2>
            <div className="flex justify-between px-10 pt-10 sm:pt-10">
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-10">
            <div className="flex flex-col gap-5">
              <div className="btn">
                <Link href="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32" />
      </footer>
    </>
  );
};
