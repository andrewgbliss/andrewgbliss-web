import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { CardTitle, CardDescription, Card } from "~/components/ui/card";

export function QrCard({
  title,
  tagline,
  href,
  imgSrc,
}: {
  title: string;
  tagline: string;
  href: string;
  imgSrc: string;
}) {
  return (
    <Card className="flex w-full flex-col-reverse divide-x shadow-xl sm:flex-row">
      <div className="w-full p-4 sm:w-2/3">
        <Image
          alt={""}
          src={imgSrc}
          className="w-full"
          height="240"
          width="113"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <CardTitle className="text-xl font-bold">
          <Link href={href} target="_blank">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {tagline}
        </CardDescription>
      </div>
      <div className="flex w-full items-center bg-slate-100 p-4 sm:w-1/3">
        <div className="w-full">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={href}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </Card>
  );
}
