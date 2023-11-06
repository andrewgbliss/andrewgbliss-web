import { CommandPrompt } from "./_components/command-prompt";
import { promises as fs } from "fs";

export default async function Page() {
  // const file = await fs.readFile(process.cwd() + "/lib/logo.txt", "utf8");
  const file = await fs.readdir(process.cwd());
  return <CommandPrompt logo={file.join(",")} />;
}
