import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export const TravelSearchForm = () => {
  return (
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
  );
};
