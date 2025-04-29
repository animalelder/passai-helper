import Link from "next/link";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            We offer multiple packages to support the individual needs of families.
            You can rest easy that you won&rsquo;t pay for what you don&rsquo;t need.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Free</h2>
                <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
                <p className="text-sm text-muted-foreground">Per child</p>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link href="">Get Started</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Basic Analytics Dashboard",
                  "Scheduling and Calendar",
                  "Weekly Reports",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:bg-muted dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Pro</h2>
                  <span className="my-3 block text-2xl font-semibold">$9 / mo</span>
                  <p className="text-sm text-muted-foreground">Per child</p>
                </div>

                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="">Get Started</Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">Everything you get:</div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    "Everything included in Free Plan",
                    "Bus Tracking",
                    "Access to AI Insights",
                    "Access to Community Forum",
                    "Access to more AI Models",
                    "Dashboard Customization",
                    "SMS Notifications",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Advanced Security Features",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
