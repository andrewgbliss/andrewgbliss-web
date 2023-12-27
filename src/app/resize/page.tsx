import { Resize } from "./components/resize";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-96 w-96 rounded-lg border p-5 shadow-2xl">
        <Resize />
      </div>
    </div>
  );
}
