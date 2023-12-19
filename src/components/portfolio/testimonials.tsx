"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { CardContent, Card } from "~/components/ui/card";
import { useRef, useState } from "react";
import useTriggerOnScroll from "~/hooks/useTriggerOnScroll";
import { Fade } from "../ui/animations";
import { faker } from "@faker-js/faker";

const testimonials = [
  {
    quote:
      "The customer service I received was exceptional. The support team went above and beyond to address my concerns.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "JW",
    avatar: faker.internet.avatar(),
  },
  {
    quote:
      "The site looks great and the team was a pleasure to work with. They were very responsive and accommodating.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "AT",
    avatar: faker.internet.avatar(),
  },
  {
    quote:
      "The team was very professional and delivered a great product. I would definitely recommend them to others.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "GH",
    avatar: faker.internet.avatar(),
  },
  {
    quote:
      "The customer service I received was exceptional. The support team went above and beyond to address my concerns.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "JW",
    avatar: faker.internet.avatar(),
  },
  {
    quote:
      "The site looks great and the team was a pleasure to work with. They were very responsive and accommodating.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "AT",
    avatar: "",
  },
  {
    quote:
      "The team was very professional and delivered a great product. I would definitely recommend them to others.",
    name: faker.person.fullName(),
    title: faker.company.name(),
    initials: "GH",
    avatar: faker.internet.avatar(),
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [showTile, setShowTitle] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(
    ref,
    (triggered: boolean) => {
      setShow(triggered);
      setShowTitle(triggered);
    },
    200,
  );
  const testimonial = testimonials[selectedIndex];
  const handleNext = () => {
    setShow(false);
    setTimeout(() => {
      setSelectedIndex((selectedIndex + 1) % testimonials.length);
      setShow(true);
    }, 1000);
  };

  return (
    <section className="container mx-auto py-24">
      <div className="grid items-center justify-center gap-4 text-center">
        <div className="space-y-3">
          <Fade show={showTile}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What our customers are saying
            </h2>
          </Fade>
        </div>
        <div className="h-[400px] w-full">
          <div ref={ref}>
            <Fade show={show}>
              <Card className="w-full py-12">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={testimonial?.avatar} />
                      <AvatarFallback>{testimonial?.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial?.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial?.title}
                      </div>
                    </div>
                  </div>
                  <blockquote className="h-16 overflow-hidden py-3 text-lg font-semibold leading-snug sm:h-32 lg:text-2xl lg:leading-normal xl:text-3xl">
                    &quot;{testimonial?.quote}&quot;
                  </blockquote>
                  <Button
                    variant={"action"}
                    className="text-bold w-full text-2xl md:w-auto"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
