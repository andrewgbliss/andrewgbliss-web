import { resume } from "~/components/resume/types";
import Gravatar from "~/components/ui/gravatar";

export const BusinessCard = ({
  title,
  tagline,
  description,
  call_to_action,
  top_left,
  top_right,
}: {
  title: string;
  tagline: string;
  description: string;
  top_left: React.ReactNode;
  top_right: React.ReactNode;
  call_to_action: React.ReactNode;
}) => {
  return (
    <div className="flex h-full flex-col gap-5 rounded-xl  px-4 py-8 opacity-75  lg:px-8">
      <div className="flex justify-between">
        {top_left}
        {top_right}
      </div>
      <div className="flex h-full flex-col items-start justify-center gap-5 sm:flex-row">
        <div className="w-full sm:w-64">
          <Gravatar email={resume.email} size={256} />
        </div>
        <div className="flex-grow-1 flex h-full flex-col items-start gap-5">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-center text-xl sm:text-3xl">{tagline}</p>
          <p className="text-lg sm:w-96 sm:text-xl">{description}</p>
        </div>
      </div>
      <hr />
      <div className="flex h-full w-full items-center justify-center">
        {call_to_action}
      </div>
    </div>
  );
};
