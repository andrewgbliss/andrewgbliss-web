import { Suspense } from "react";
import { Deck } from "~/components/deck/deck";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Suspense fallback={<>loading...</>}>
        <Deck />
      </Suspense>
    </div>
  );
}
