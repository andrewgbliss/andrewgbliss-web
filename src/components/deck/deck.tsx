"use client";

import { Badge } from "~/components/ui/badge";
import { DeckCard } from "./card";
import Image from "next/image";
import { useEffect, useState } from "react";

function IconTag(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

export type CardInfo = {
  title: string;
  tagline: string;
  img: string;
};

const cards: CardInfo[] = [
  {
    title: "Title",
    tagline: "This is a tagline",
    img: "/img/soft-develop.webp",
  },
  {
    title: "Title 2",
    tagline: "This is a tagline",
    img: "/img/web-develop.webp",
  },
  {
    title: "Title 3",
    tagline: "This is a tagline",
    img: "/img/01-beach.webp",
  },
];

export function Deck() {
  const onLeftClick = () => {
    if (cardIndex === 0) {
      return setCardIndex(cards.length - 1);
    }
    setCardIndex(cardIndex - 1);
  };
  const onRightClick = () => {
    if (cardIndex === cards.length - 1) {
      return setCardIndex(0);
    }
    setCardIndex(cardIndex + 1);
  };

  const [mount, setMount] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const card = cards[cardIndex] ?? cards[0];

  const tagline_element = (
    <Badge className="bg-green-500 text-white">
      <IconTag className="mr-2 h-4 w-4" />
      {card?.tagline}
    </Badge>
  );
  const img_element = (
    <Image
      alt="Image"
      className="w-full sm:w-96 sm:p-4"
      width="100"
      height="100"
      src={card?.img ?? "/img/web-develop.webp"}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
  return (
    <DeckCard
      card={{
        title: card?.title ?? "Title",
        tagline: tagline_element,
        img: img_element,
      }}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick}
    />
  );
}
