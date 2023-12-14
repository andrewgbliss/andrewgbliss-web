"use client";

import { useEffect, useState, useRef } from "react";
import Highlight from "react-highlight";
import useTriggerOnScroll from "~/hooks/useTriggerOnScroll";

type Props = {
  className: string;
  content: string;
};

export default function CodeSample({ className, content }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentRamp, setContentRamp] = useState("");
  const [start, setStart] = useState(false);
  useTriggerOnScroll(scrollRef, () => {
    setStart(true);
  });
  useEffect(() => {
    if (!start) {
      return;
    }
    let index = 0;
    // eslint-disable-next-line prefer-const
    let timer: NodeJS.Timeout;
    const type = () => {
      setContentRamp(content.substr(0, index++));
      if (index >= content.length) {
        clearInterval(timer);
      }
    };
    timer = setInterval(type, 100);
    return () => {
      clearInterval(timer);
    };
  }, [start, content]);
  return (
    <div ref={scrollRef} className="highlight md:text-md text-xs sm:text-sm">
      <div className="flex pl-4 pt-4">
        <div className="mr-2 h-3 w-3 rounded-full bg-red-500" />
        <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <Highlight className={className}>{contentRamp}</Highlight>
    </div>
  );
}
