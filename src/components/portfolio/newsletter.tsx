import { HubspotForm } from "~/components/hubspot/hubspot-form";

export function Newsletter() {
  return (
    <div
      className=" bg-black"
      style={{
        background: `linear-gradient(170deg, #000 50%, #fff 0)`,
      }}
    >
      <hr />
      <div className="container mx-auto flex h-[500px] w-full items-center justify-center  p-12">
        <div className=" bg-white  p-5">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black sm:pb-12 sm:text-5xl">
              Stay Updated
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Get the latest news and articles straight to your inbox. The
              latest tech news is always changing, so let us keep you up to date
              on the latest trends.
            </p>
          </div>
          <div className="flex h-64 w-full justify-center py-5">
            <HubspotForm
              region="na1"
              portalId="44484670"
              formId="7827cd87-fa6e-46dd-a431-2ab97e4b70c7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
