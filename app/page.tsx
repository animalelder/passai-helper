import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen basis-full flex-col">
      <nav className="bg-lightblue inline-flex h-[82px] grow basis-full items-center justify-between px-[32px] py-2 md:h-[92px]">
        <span>Logo</span>
        <span className="hidden gap-2 md:inline-flex">
          <Link
            className="px-2"
            href="#"
          >
            What is PASS.ai?
          </Link>
          <Link
            className="px-2"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="px-2"
            href="#"
          >
            About Us
          </Link>
        </span>
        <div className="md:hidden">Hamburger</div>
        <Link href="/signin">
          <Button
            variant="secondary"
            size="lg"
            className="text-xl font-bold"
          >
            Sign In
          </Button>
        </Link>
      </nav>
      <main className="flex flex-col gap-20">
        {/* Container 1 Overwhelmed? */}
        <section className="bg-card">
          <div className="mx-auto flex min-h-[599px] max-w-[1152px] flex-col items-center justify-between gap-24 py-[96px] md:flex-row">
            <div className="font-heading text-6xl font-semibold text-neutral-600">
              <h1 className="">Overwhelmed with</h1>
              <h1 className="text-orange-900">School Communication</h1>
              <p className="font-heading text-2xl font-bold text-neutral-500">
                PASS it to your AI Agent
              </p>
              <Button className="font-bold"> Learn more</Button>
            </div>
            <Image
              src="/landing/man-walking.svg"
              width={481}
              height={407}
              alt="guy walking"
            />
          </div>
        </section>

        {/* Container 2 Manage your children  */}
        <section className="mx-auto max-w-[542px] bg-white text-center">
          <h1 className="font-heading text-2xl font-bold text-[#759EAB] lg:text-3xl">
            Manage your children&apos;s schedules and activities in one place
          </h1>
          <h2 className="text-secondary text-xl font-bold lg:text-2xl">
            Who is PASS.ai suitable for?
          </h2>
        </section>

        {/* Container 3 Busy Parents and School Admins  */}
        <section className="m-6 flex flex-col items-center justify-start gap-5 bg-[#FFF] text-center text-black lg:flex-row lg:items-start lg:justify-center lg:gap-80">
          <Card className="flex h-[256px] w-[299px] flex-col items-center justify-center text-base shadow-md">
            <Image
              src="/landing/people-icon.png"
              width="65"
              height="56"
              alt="parents icon"
            />
            <h1 className="font-heading text-3xl font-bold text-neutral-600">
              Busy Parents
            </h1>
            <p className="mx-4 text-base font-normal text-neutral-800">
              {" "}
              Parents are overwhelmed by the complexity and fragmentation of managing
              their children’s school-related activities and schedules.
            </p>
          </Card>

          <Card className="flex h-[256px] w-[299px] flex-col items-center justify-center shadow-md">
            <Image
              src="/landing/people-icon.png"
              width="65"
              height="56"
              alt="admins icon"
            />
            <h1 className="font-heading text-3xl font-bold text-neutral-600">
              School Admins
            </h1>
            <p className="mx-4 text-base font-normal text-neutral-800">
              School admins are overwhelmed by the workload; tracking incidents,
              managing communication and ensuring security.
            </p>
          </Card>
        </section>

        {/* Container 4 How does PASSai help me*/}
        <section className="m-6 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Image
            src="/landing/email-guy.png"
            width="454"
            height="408"
            alt="guy standing"
          />

          <div className="space-y-3">
            <h1 className="font-heading text-xl font-bold text-neutral-800 lg:text-3xl">
              How does PASS.ai help me
            </h1>
            <ul className="list-disc self-stretch pl-5 text-base font-normal text-neutral-800">
              <li>Stay organized effortlessly</li>
              <li>Never miss important updates</li>
              <li>No more scheduling conflicts</li>
              <li>No more stress and time wasted on manual tracking</li>
              <li>Reduced stress and improved work-life balance</li>
            </ul>

            <Button
              size="lg"
              className="h-14 text-xl font-bold"
            >
              Learn more
            </Button>
          </div>
        </section>

        {/* Container 5 Connect all your child's school apps */}
        <section className="bg-darkblue font-heading text-offwhite flex flex-col items-center justify-center gap-4 py-7 lg:flex-row lg:justify-between lg:px-40">
          <div className="font-heading text-alert-100 h-full max-w-[540px] basis-1/2 gap-3">
            <h1 className="text-2xl font-bold text-neutral-200 lg:text-4xl">
              How we have helped parents and school administrations manage their
              communication
            </h1>
            <p className="font-semibold">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex h-full max-w-[540px] flex-wrap justify-between gap-4">
            <div className="grow basis-full">
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src="/landing/parents.svg"
                  width={34}
                  height={31}
                  alt="parents icon"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">2,245,341</h2>
                  <p>Parents</p>
                </div>
              </div>
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src="/landing/schools-icon.png"
                  width={42}
                  height={34}
                  alt="schools icon"
                  className="object-contain"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">46,328</h2>
                  <p>Schools</p>
                </div>
              </div>
            </div>
            <div className="grow basis-full">
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src="/landing/trending-up.svg"
                  width={34}
                  height={31}
                  alt="trending-up icon"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">828,867</h2>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src="/landing/payments.svg"
                  width={34}
                  height={31}
                  alt="payments icon"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">1,926,436</h2>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Container 6  How have we helped parents and school admins  */}
        <section className="m-6 flex max-h-fit flex-col items-center justify-center space-x-3 lg:flex-row">
          <Image
            src="/landing/setup-wizard.png"
            width={456}
            height={408}
            alt="girl board"
          />
          <div className="flex max-w-[600px] flex-col items-start gap-4 space-y-3.5 py-4">
            <h1 className="font-heading text-3xl font-bold text-neutral-800 lg:text-4xl">
              Connect all your child&apos;s school apps and let our AI agent do the
              rest
            </h1>
            <ol className="list-decimal pl-5">
              <li>Donec a eros justo. Fusce egestas tristique ultrices.</li>
              <li>Nam tempor, augue nec tincidunt molestie, massa nunc varius.</li>
              <li>Donec quis erat at libero ultrices mollis.</li>
              <li>In hac habitasse platea dictumst.</li>
            </ol>
            <Button
              size="lg"
              className="font-bold"
            >
              Sign up now
            </Button>
          </div>
        </section>

        {/* Container 7  Ashley Vee Testimonial */}
        <section className="bg-offwhite flex flex-col items-center justify-center gap-x-4 p-6 px-4 py-8 lg:flex-row lg:px-36 lg:py-8">
          <Image
            src="/landing/testimonial-ashley.png"
            width={358}
            height={359}
            alt="mom with child"
          />

          <div className="flex min-h-[288px] max-w-[748px] flex-col items-start justify-center gap-4">
            <Image
              src="/landing/quote.svg"
              width={98}
              height={78}
              alt="quote icon"
              className="-mt-20"
            />
            <p className="font-normal text-slate-950">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
              sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
              Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
              molestie arcu, at hendrerit elit.
            </p>
            <p className="text-darkblue-101 font-heading text-2xl font-bold">
              {" "}
              Ashley Vee
            </p>
            <p className="font-heading text-neutral-lgrey font-semibold">
              {" "}
              Graphic Designer
            </p>

            <Link
              href="#"
              className="font-heading text-darkblue text-xl/relaxed font-semibold"
            >
              See what our customers said
            </Link>
          </div>
        </section>
        {/* Container 8  Caring is the new marketing  */}
        <section className="flex flex-col items-center justify-start gap-3">
          <h1 className="font-heading text-5xl font-bold text-neutral-800">
            Caring is the new marketing
          </h1>
          <p className="text-small max-w-lg text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
          </p>
          <div className="my-14 flex flex-row items-center justify-center gap-3">
            <div className="grid max-h-[417px] w-[368px] grid-cols-1">
              <Image
                src="/landing/caring-1.png"
                width={368}
                height={287}
                alt="caring 1"
              />
              <Card className="-mt-24 h-[227px] w-[310px] justify-self-center">
                <h1 className="font-heading mx-8 text-center text-2xl font-bold text-neutral-500">
                  Helping busy parents who are stressed with school communication
                </h1>
                <Link
                  href="#"
                  className="text-darkblue-102 mx-auto leading-none font-semibold"
                >
                  Read more
                </Link>
              </Card>
            </div>
            <div className="grid h-[417px] w-[368px] grid-cols-1">
              <Image
                src="/landing/caring-2.png"
                width={368}
                height={287}
                alt="caring 1"
              />
              <Card className="-mt-24 h-[227px] w-[310px] justify-self-center">
                <h1 className="font-heading mx-8 text-center text-2xl font-bold text-neutral-500">
                  Improve work-life balance so you enjoy quality time with family
                </h1>
                <Link
                  href="#"
                  className="text-darkblue-102 mx-auto leading-none font-semibold"
                >
                  Read more
                </Link>
              </Card>
            </div>
            <div className="grid h-[417px] w-[368px] grid-cols-1">
              <Image
                src="/landing/caring-3.png"
                width={368}
                height={287}
                alt="caring 1"
              />
              <Card className="-mt-24 h-[227px] w-[310px] justify-self-center">
                <h1 className="font-heading mx-8 text-center text-2xl font-bold text-neutral-500">
                  Improve work-life balance so you enjoy quality time with family
                </h1>
                <Link
                  href="#"
                  className="text-darkblue-102 mx-auto leading-none font-semibold hover:font-bold"
                >
                  Read more
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="min-h-52 basis-full bg-blue-950">Footer</footer>
    </div>
  );
};

export default Home;
