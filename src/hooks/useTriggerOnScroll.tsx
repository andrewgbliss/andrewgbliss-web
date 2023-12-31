/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { type RefObject, useEffect, useState } from "react";

function getOffset(el: RefObject<HTMLDivElement> | undefined | null) {
  let _x = 0;
  let _y = 0;
  while (
    el &&
    !isNaN(el?.current?.offsetLeft || 0) &&
    !isNaN(el?.current?.offsetTop || 0)
  ) {
    _x += (el?.current?.offsetLeft || 0) - (el?.current?.scrollLeft || 0);
    _y += (el?.current?.offsetTop || 0) - (el?.current?.scrollTop || 0);
    el = el?.current?.offsetParent as any;
  }
  return { top: _y, left: _x };
}

function hasScrolledTo(
  el: RefObject<HTMLDivElement> | undefined | null,
  offsetScroll = 0,
) {
  if (!el) return false;
  const top = getOffset(el).top;
  const offset = window.innerHeight / 2;
  return top - offset - offsetScroll <= window.pageYOffset;
}

export default function useTriggerOnScroll(
  el: RefObject<HTMLDivElement> | undefined | null,
  onTrigger: (value: boolean) => void,
  offset = 0,
) {
  const [triggered, setTriggered] = useState<boolean>(false);
  useEffect(() => {
    function onScroll() {
      const viewed = hasScrolledTo(el, offset);
      if (viewed && !triggered) {
        window.removeEventListener("scroll", onScroll);
        setTriggered(true);
        onTrigger(true);
      } else if (!viewed && triggered) {
        window.removeEventListener("scroll", onScroll);
        setTriggered(false);
        onTrigger(false);
      }
    }
    setTimeout(() => {
      window.addEventListener("scroll", onScroll, {
        passive: true,
      });
    }, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [el, onTrigger, triggered, offset]);
}
