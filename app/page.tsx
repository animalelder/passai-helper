import { NextPage } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen basis-full flex-col">
      <nav className="inline-flex h-[82px] grow basis-full items-center justify-between bg-sky-600 px-[32px] md:h-[92px]">
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
      <main className="flex flex-col">
        {/* Container 1*/}
        <section className="bg-card">
          <div className="flex min-h-[599px] max-w-[1152px] flex-col items-center justify-between gap-24 py-[96px] md:flex-row lg:px-24">
            <div className="font-heading text-6xl font-semibold text-neutral-600">
              <h1 className="">Overwhelmed with</h1>
              <h1 className="text-orange-900">School Communication</h1>
              <p className="font-heading text-2xl font-bold text-neutral-500">
                PASS it to your AI Agent
              </p>
              <Button className="font-bold"> Learn more</Button>
            </div>
            <img
              src="landing/man-walking.svg"
              alt="guy walking"
            />
          </div>
        </section>

        {/* Container 2 */}
        <div className="bg-white p-6 text-center">
          <h1 className="font-heading text-4xl text-[#759EAB]">
            {" "}
            Manage your children’s schedules and activities in one place
          </h1>
          <p>Who is PASS.ai suitable for?</p>
        </div>

        {/* Container 3 */}
        <div className="flex flex-col items-center justify-start gap-5 bg-[#FFF] p-6 text-center text-black lg:flex-row lg:items-start lg:justify-center">
          <Card className="h-[256px] w-[299px] text-base">
            <p>icon</p>
            <h1>Busy Parents</h1>
            <p>
              {" "}
              Parents are overwhelmed by the complexity and fragmentation of managing
              their children’s school-related activities and schedules.
            </p>
          </Card>

          <Card className="h-[256px] w-[299px]">
            <p>icon</p>
            <h1>School Admins</h1>
            <p>
              School admins are overwhelmed by the workload; tracking incidents,
              managing communication and ensuring security.
            </p>
          </Card>
        </div>

        {/* Container 4 */}
        <div className="gap-4 bg-[#FFF] p-6 text-black">
          <img
            src="landing/setup-wizard.png"
            alt="guy @ standing"
          />

          <div className="gap-3">
            <h1>How does PASS.ai help me</h1>
            <ul className="list-disc pl-5">
              <li>Stay organized effortlessly</li>
              <li>Never miss important updates</li>
              <li>No more scheduling conflicts</li>
              <li>No more stress and time wasted on manual tracking</li>
              <li>Reduced stress and improved work-life balance</li>
            </ul>

            <Button>Learn more</Button>
          </div>
        </div>

        {/* Container 5 */}
        <div className="gap-4 bg-[#0e2f1e] p-6 text-white">
          <img
            src="landing/email-illustration.svg"
            alt="guy @ standing"
          />

          <div className="gap-3">
            <h1>
              How we have helped parents and school administrations manage their
              communication
            </h1>
            <p>We reached here with our hard work and dedication</p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <p>icon</p>
                <div className="flex flex-col">
                  <h2>800909</h2>
                  <p>Parents</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p>icon</p>
                <div className="flex flex-col">
                  <h2>800909</h2>
                  <p>Schools</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p>icon</p>
                <div className="flex flex-col">
                  <h2>800909</h2>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p>icon</p>
                <div className="flex flex-col">
                  <h2>800909</h2>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container 6 */}
        <div className="bg-[#FFF] p-6 text-black">
          <img
            src="landing/setup-wizard.png"
            alt="girl board"
          />
          <div className="gap-3 p-4">
            <h1>
              Connect all your child’s school apps and let our AI agent do the
              rest{" "}
            </h1>
            <ol className="list-decimal pl-5">
              <li>Donec a eros justo. Fusce egestas tristique ultrices.</li>
              <li>Nam tempor, augue nec tincidunt molestie, massa nunc varius.</li>
              <li>Donec quis erat at libero ultrices mollis.</li>
              <li>In hac habitasse platea dictumst.</li>
            </ol>
            <Button>Sign up now</Button>
          </div>
        </div>

        {/* Container 7 */}
        <div className="bg-[#FFF] p-6 text-black">
          <img
            src="landing/testimonial-ashley.png"
            alt="mom with child"
          />

          <div>
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
              sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
              Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
              molestie arcu, at hendrerit elit.
            </p>
            <p> Ashley Vee</p>
            <p> Grpahic Designer</p>
          </div>
          <p>See what other parents are saying</p>
        </div>
      </main>
      <footer className="min-h-52 basis-full bg-blue-950">Footer</footer>
    </div>
  );
};

export default Home;
