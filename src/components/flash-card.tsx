"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function FlashCard() {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <div className="h-screen w-screen  text-black md:py-16">
      <div className="flex w-full justify-center px-16 pb-32">
        <div className={`flip-card h-96 w-96`}>
          <div
            className={`flip-card-inner h-full w-full ${
              flip ? "flip-card-flip" : ""
            }`}
          >
            <div className="flip-card-front h-full w-full">
              <div className="h-full w-full rounded-xl bg-white shadow-2xl">
                <div
                  className="h-full w-full overflow-y-auto p-4"
                  onClick={() => handleFlip()}
                >
                  <div className="break-words text-2xl">Front Card</div>
                </div>
              </div>
            </div>
            <div className="flip-card-back h-full w-full">
              <div className="h-full w-full rounded-xl bg-white shadow-2xl">
                <div
                  className="h-full w-full overflow-y-auto p-4"
                  onClick={() => handleFlip()}
                >
                  <div className="break-words text-2xl">Back Card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-slate-50 py-5 shadow-2xl">
        <div className="flex items-center justify-center gap-5 ">
          <Button variant={"destructive"}>Prev</Button>
          <Button variant={"outline"}>Hint</Button>
          <Button variant={"secondary"}>Next</Button>
        </div>
      </div>
    </div>
  );
}
