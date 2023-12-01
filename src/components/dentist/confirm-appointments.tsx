import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export function ConfirmAppointment() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6  sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-lg" />
        <div className="relative bg-white px-4 py-10 shadow-lg  sm:rounded-3xl sm:p-20">
          <h1 className="mb-6 text-center text-3xl font-bold">
            Appointment Confirmation
          </h1>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-2">
                <div className="font-bold">Date</div>
                <div className="ml-auto">December 10, 2023</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-bold">Time</div>
                <div className="ml-auto">10:00 AM</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-bold">Location</div>
                <div className="ml-auto">123 ABC Street, New York, NY</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-bold">Additional Notes</div>
                <div className="ml-auto">Please arrive 10 minutes early.</div>
              </div>
            </CardContent>
          </Card>
          <div className="h-6" />
          <Link className="mt-6 w-full py-2" href="#">
            <Button className="w-full" variant={"action"}>
              Confirm Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
