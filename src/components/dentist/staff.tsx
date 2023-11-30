/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xKMqJY2efGs
 */
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";

export function Staff() {
  return (
    <section id="staff" className="w-full py-12 md:py-24 lg:py-32">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet the Staff
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our dedicated team members who strive to provide the best service.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group transform transition-transform duration-200 hover:scale-105">
            <div className="overflow-hidden rounded-lg p-6 shadow-lg ">
              <div className="mb-6 flex justify-center">
                <Avatar className="h-32 w-36">
                  <AvatarImage alt="Staff member" src="/img/dentist-1.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="mb-2 text-xl font-bold">Dr Lewis Thompson</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Dentist</p>
              <p className="text-gray-600 dark:text-gray-400">Brief Bio</p>
            </div>
          </div>
          <div className="group transform transition-transform duration-200 hover:scale-105">
            <div className="overflow-hidden rounded-lg  p-6 shadow-lg ">
              <div className="mb-6 flex justify-center">
                <Avatar className="h-32 w-36">
                  <AvatarImage alt="Staff member" src="/img/dentist-2.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="mb-2 text-xl font-bold">Dr Sarah Katrowski</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Dentist</p>
              <p className="text-gray-600 dark:text-gray-400">Brief Bio</p>
            </div>
          </div>
          <div className="group transform transition-transform duration-200 hover:scale-105">
            <div className="overflow-hidden rounded-lg  p-6 shadow-lg ">
              <div className="mb-6 flex justify-center">
                <Avatar className="h-32 w-36">
                  <AvatarImage alt="Staff member" src="/img/dentist-3.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="mb-2 text-xl font-bold">Dr Micheal Fitsimmons</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Dentist</p>
              <p className="text-gray-600 dark:text-gray-400">Brief Bio</p>
            </div>
          </div>
          <div className="group transform transition-transform duration-200 hover:scale-105">
            <div className="overflow-hidden rounded-lg p-6 shadow-lg ">
              <div className="mb-6 flex justify-center">
                <Avatar className="h-32 w-36">
                  <AvatarImage alt="Staff member" src="/img/dentist-4.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="mb-2 text-xl font-bold">Dr Karen McJohnson</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Dentist</p>
              <p className="text-gray-600 dark:text-gray-400">Brief Bio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
