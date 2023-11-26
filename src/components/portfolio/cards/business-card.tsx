import { FadeIn } from "~/components/ui/animations";

export const BusinessCard = ({
  title,
  tagline,
  call_to_action,
  top_left,
  top_right,
}: {
  title: string;
  tagline: string;
  top_left: React.ReactNode;
  top_right: React.ReactNode;
  call_to_action: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col space-y-6 rounded-xl  px-4 py-8 opacity-75 sm:px-6 sm:shadow-2xl lg:px-8">
      <div className="flex justify-between">
        {top_left}
        {top_right}
      </div>

      <div className="h-72 w-64 sm:w-96">
        <FadeIn wait={1500}>
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl font-bold sm:text-6xl">{title}</h1>
            <p className="text-center text-xl sm:text-3xl">{tagline}</p>
            {call_to_action}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
