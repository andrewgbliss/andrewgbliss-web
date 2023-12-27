import { DataTableDemo } from "./components/demo";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-96 w-1/2 rounded-lg border p-5 shadow-2xl">
        <DataTableDemo />
      </div>
    </div>
  );
}
