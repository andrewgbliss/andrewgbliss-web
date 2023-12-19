import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElementById(elementId: string) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // You can also use 'auto' or 'instant'
      block: "start", // You can also use 'end' or 'center'
      inline: "start", // You can also use 'end' or 'center'
    });
  }
}
