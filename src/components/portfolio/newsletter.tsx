import { HubspotForm } from "~/components/hubspot/hubspot-form";

export function Newsletter() {
  return (
    <div>
      <hr />
      <div className="flex w-full items-center justify-center bg-white py-12">
        <div className=" bg-white  p-5">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Newsletter</h2>
          </div>
          <div className="h-64 w-72 py-5 sm:w-96">
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
