import { HubspotForm } from "../_components/hubspot-form";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen items-center justify-center">
        <div className=" bg-white p-5">
          <h2 className="text-lg text-black">Newsletter</h2>
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
