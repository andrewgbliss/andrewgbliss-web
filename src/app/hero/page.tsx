import Image from "next/image";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { HeroLinks } from "~/components/hero-links";

export default function Page() {
  return (
    <section
      className="relative h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/img/travel-hero-cover.webp")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between bg-transparent p-6">
        <Image
          src="/img/travel-logo.webp"
          width={60}
          height={60}
          alt="Logo"
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
        />
        <nav className="flex space-x-6">
          <HeroLinks />
        </nav>
      </header>
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white">Travel Explorer</h1>
        <p className="text-2xl text-white">
          Discover your next adventure with us
        </p>
        <div className="w-full max-w-md">
          <form className="grid gap-4 rounded-lg bg-white p-6 shadow-lg">
            <Input
              className="rounded-md border border-gray-300 px-4 py-2"
              placeholder="Destination"
              type="text"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                className="rounded-md border border-gray-300 px-4 py-2"
                placeholder="Check-in Date"
                type="date"
              />
              <Input
                className="rounded-md border border-gray-300 px-4 py-2"
                placeholder="Check-out Date"
                type="date"
              />
            </div>
            <Button
              className="transform text-white transition-all duration-300 ease-in-out hover:scale-105"
              variant={"destructive"}
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
