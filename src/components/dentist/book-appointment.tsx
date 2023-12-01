import Link from "next/link";
import { Button } from "~/components/ui/button";

const AvailableButton = () => {
  return (
    <Link href="/dentist/confirm-appointment">
      <Button
        className="w-full bg-green-500 text-white"
        size="sm"
        variant="action"
      >
        Available
      </Button>
    </Link>
  );
};

export function BookAppointment() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Schedule Appointment
        </h1>
        <p className="md:text-xl">
          We provide comprehensive and compassionate dental care. Your smile is
          our top priority.
        </p>
      </div>
      <hr />
      <div className="grid grid-cols-8 gap-4 px-4 py-6">
        <div className="space-y-4">
          <p className="text-lg font-semibold">Time</p>
          <div className="grid gap-4">
            <Button className="w-full" size="sm" variant="outline">
              8:00 AM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              9:00 AM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              10:00 AM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              11:00 AM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              12:00 PM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              1:00 PM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              2:00 PM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              3:00 PM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              4:00 PM
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              5:00 PM
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Monday</p>
          <div className="grid gap-4">
            <AvailableButton />
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Tuesday</p>
          <div className="grid gap-4">
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Wednesday</p>
          <div className="grid gap-4">
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Thursday</p>
          <div className="grid gap-4">
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <AvailableButton />
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Friday</p>
          <div className="grid gap-4">
            <AvailableButton />
            <AvailableButton />
            <AvailableButton />
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Saturday</p>
          <div className="grid gap-4">
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <Button className="w-full bg-gray-300" size="sm" variant="outline">
              -
            </Button>
            <AvailableButton />
          </div>
        </div>
      </div>
    </>
  );
}
