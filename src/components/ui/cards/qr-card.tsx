/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

"use client";

import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { CardTitle, CardDescription, Card } from "~/components/ui/card";
import html2canvas from "html2canvas";
import { PrintButton } from "../buttons/print-button";

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
  const saveImg = (el: any) => {
    void html2canvas(el).then(function (canvas) {
      simulateDownloadImageClick(canvas.toDataURL(), title + ".png");
    });
  };

  function simulateDownloadImageClick(uri: string, filename: string) {
    const link = document.createElement("a");
    if (typeof link.download !== "string") {
      window.open(uri);
    } else {
      link.href = uri;
      link.download = filename;
      accountForFirefox(clickLink, link);
    }
  }

  function clickLink(link: any) {
    link.click();
  }

  function accountForFirefox(click: any, link: any) {
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
  }
  return (
    <Card
      id={href}
      className="flex w-full flex-col divide-x shadow-xl sm:flex-row"
    >
      <div className="w-full p-4 sm:w-full">
        <Image
          alt={""}
          src={imgSrc}
          className="w-full"
          height="240"
          width="113"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">
              <Link href={href} target="_blank">
                {title}
              </Link>
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              {tagline}
            </CardDescription>
          </div>
          <PrintButton onClick={() => saveImg(document.getElementById(href))} />
        </div>
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
