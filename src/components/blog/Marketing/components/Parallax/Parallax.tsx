"use client";

import React, { useRef } from "react";
import useResizeBackground from "~/hooks/useResizeBackground";

const Parallax: React.FC = () => {
  const parallax = useRef<HTMLDivElement>(null);
  useResizeBackground(parallax, 0.25, 3000);
  return (
    <div
      style={{
        backgroundImage: `url(img/laptop.jpeg)`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      ref={parallax}
      className="h-72"
    />
  );
};

export default Parallax;
