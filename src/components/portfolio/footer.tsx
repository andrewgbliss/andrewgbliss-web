"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 px-4 py-6 text-white md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-center">
        <div className="space-x-4 md:space-x-8">
          <Link className="text-sm hover:underline" href="/">
            Home
          </Link>
          <Link className="text-sm hover:underline" href="/terms">
            Terms
          </Link>
          <Link className="text-sm hover:underline" href="/privacy">
            Privacy
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-center text-sm">
            © 2023 Andrew G Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
