"use client";

import {
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
  Card,
  CardDescription,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import React from "react";

export type DeckCardInfo = {
  title: string;
  tagline: React.ReactNode;
  img: React.ReactNode;
};

export type DeckCardProps = {
  card: DeckCardInfo;
  onLeftClick: () => void;
  onRightClick: () => void;
};

export function DeckCard({ card, onLeftClick, onRightClick }: DeckCardProps) {
  const { img, title, tagline } = card;
  return (
    <Card className="flex h-screen w-screen flex-col justify-between sm:block sm:h-auto sm:w-96">
      <div>
        <CardContent className="p-0">{img}</CardContent>
        <CardHeader>
          <CardTitle className="mb-2 text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{tagline}</CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="flex justify-between p-4">
        <Button variant="ghost" onClick={() => onLeftClick()}>
          <IconArrowLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" onClick={() => onRightClick()}>
          <IconArrow className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
