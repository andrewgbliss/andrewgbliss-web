/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/

import useLayoutEffect from "./useIsoMorphicLayoutEffect";

const useResizeBackground = (ref: any, multiplier = 0.25, offset = 500) => {
  useLayoutEffect(() => {
    const onScroll = () => {
      const distanceY =
        window.pageYOffset || document.documentElement.scrollTop;
      if (ref && ref.current) {
        ref.current.style.backgroundPosition = `0px -${Math.round(
          (distanceY - offset) * multiplier,
        )}px`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
};

export default useResizeBackground;
