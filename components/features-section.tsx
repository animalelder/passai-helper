// components/features-section.tsx
// This component is used in the placeholder landing page

import Image from "next/image";
import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                Built for parents who want to stay connected
              </h2>
              <p className="mt-6">
                With our app, you can easily manage your child&rsquo;s academic
                progress and stay connected with their teachers.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Mail className="size-5" />
                as a Progressive Web App
              </li>
              <li>
                <Zap className="size-5" />
                Fast Response Time
              </li>
              <li>
                <Activity className="size-5" />
                Around the Clock Monitoring
              </li>
              <li>
                <DraftingCompass className="size-5" />
                Daily & Weekly Review
              </li>
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
