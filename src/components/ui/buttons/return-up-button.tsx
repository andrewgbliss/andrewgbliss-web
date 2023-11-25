"use client";

import { Button } from "../button";

export const ReturnUpButton = () => {
  return (
    <div className="absolute bottom-5 right-5">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          version="1.1"
          viewBox="0 0 358.012 358.012"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g>
            <path d="M179.006,358.012c98.865,0,179.006-80.141,179.006-179.006S277.871,0,179.006,0S0,80.141,0,179.006   S80.141,358.012,179.006,358.012z M84.795,234.54l-8.437-8.437L179,123.455l102.66,102.66l-8.437,8.437L179,140.335L84.795,234.54z   " />
          </g>
        </svg>
      </Button>
    </div>
  );
};
