import type { MarketingSite } from "~/lib/marketing-site";

export function TaglineSection({ options }: { options: MarketingSite }) {
  return (
    <section className="flex h-96 flex-col items-center justify-center space-y-6 p-4 py-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold">{options.headline}</h2>
        <p className="mt-2 text-3xl text-gray-600 dark:text-gray-400">
          {options.tagline}
        </p>
      </div>
      <p className="mx-auto max-w-prose text-center text-gray-500 dark:text-gray-300">
        {options.description}
      </p>
    </section>
  );
}
