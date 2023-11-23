/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

"use client";

import { useEffect } from "react";

export const HubspotForm = ({
  region,
  portalId,
  formId,
}: {
  region: string;
  portalId: string;
  formId: string;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region,
          portalId,
          formId,
          target: "#hubspotForm",
        });
      }
    });
  }, [region, portalId, formId]);
  return <div id="hubspotForm"></div>;
};
