import { CommandPrompt } from "./_components/command-prompt";
import { promises as fs } from 'fs';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/logo.txt', 'utf8');
  return <CommandPrompt logo={file} />;
}