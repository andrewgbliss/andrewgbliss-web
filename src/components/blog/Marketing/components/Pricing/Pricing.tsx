import React from "react";
import Checkmark from "~/components/icons/Checkmark";
import Link from "next/link";

type PlanProps = {
  name: string;
  price: string;
  desc: string;
  features: Array<string>;
  className?: string;
  orderClassName?: string;
};

function Plan({
  name,
  price,
  desc,
  features,
  className,
  orderClassName,
}: PlanProps) {
  return (
    <div className={`w-full lg:w-1/3 lg:pr-5 ${orderClassName}`}>
      <div className={className}>
        <div className="flex h-full flex-col justify-between p-10">
          <div className="text-center">
            <h5 className="uppercase">{name}</h5>
            <h2>{price}</h2>
            <p>{desc}</p>
          </div>
          <div className="h-8" />
          <div className="h-36 px-6">
            <dt className="sr-only">Features</dt>
            {features.map((feature, i) => (
              <dd className="flex items-center" key={i}>
                <Checkmark className="mr-3 h-2 w-3 text-teal-400" />
                {feature}
              </dd>
            ))}
          </div>
          <div className="pt-4">
            <Link legacyBehavior href="/register">
              <a className="btn btn-primary-light expand w-full text-center text-white">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <section>
        <div className="lud-container py-16 text-center lg:w-1/3">
          <h2>Upgrades</h2>
          <p className="pt-4 text-xl">
            Basic access is <strong>always free</strong>.
          </p>
          <p className="px-2 py-4 text-lg">
            To get more access to content, such as progress tracking, tips and
            tricks, and videos, you can sign up for a subscription.
          </p>
          <p className="pt-2">Cancel at any time.</p>
        </div>
      </section>
      <section className="bg-gray-400 text-white">
        <div className="lud-container">
          <div className="flex flex-wrap">
            <Plan
              name="Basic"
              price="Free"
              desc="Access"
              features={["Access to articles", "Newsletter"]}
              className="h-full"
              orderClassName="order-2 lg:order-1"
            />
            <Plan
              name="Standard"
              price="$5.00"
              desc="Billed Monthly"
              features={[
                "Access to articles",
                "Access to courses",
                "Access to videos",
                "Track your progress",
                "Newsletter",
              ]}
              className="paper bg-primary h-full transform lg:translate-y-3 lg:scale-110"
              orderClassName="order-1 lg:order-2"
            />
            <Plan
              name="Advanced"
              price="$50.00"
              desc="Billed Yearly"
              features={[
                "$10 Discount",
                "Access to articles",
                "Access to courses",
                "Access to videos",
                "Track your progress",
                "Newsletter",
              ]}
              className="h-full"
              orderClassName="order-3"
            />
          </div>
        </div>
      </section>
    </>
  );
}
