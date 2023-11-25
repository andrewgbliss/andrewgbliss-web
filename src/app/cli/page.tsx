import { CommandPrompt } from "~/app/_components/command-prompt";
import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const file = path.join(process.cwd(), "lib", "logo.txt");
  const logo = await fs.readFile(file, "utf8");
  return <CommandPrompt logo={logo} />;
}
