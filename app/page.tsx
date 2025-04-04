import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";

import caring_1 from "@/assets/landing/caring-1.png";
import caring_2 from "@/assets/landing/caring-2.png";
import caring_3 from "@/assets/landing/caring-3.png";
import emailGuy from "@/assets/landing/email-guy.png";
import manWalking from "@/assets/landing/man-walking.svg";
import parents from "@/assets/landing/parents.svg";
import logo from "@/assets/landing/passai-logo.svg";
import paymentsIcon from "@/assets/landing/payments.svg";
import peopleIcon from "@/assets/landing/people-icon.png";
import quoteIcon from "@/assets/landing/quote.svg";
import schoolsIcon from "@/assets/landing/schools-icon.svg";
import setupWizard from "@/assets/landing/setup-wizard.svg";
import ashley from "@/assets/landing/testimonial-ashley.png";
import trendingUp from "@/assets/landing/trending-up.svg";

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen w-dvw basis-full flex-col">
      <NavBar />
      <main className="flex flex-col gap-20">
        {/* Container 1 Overwhelmed? */}
        <section className="bg-card">
          <div className="mx-auto flex min-h-[599px] max-w-[1152px] min-w-fit flex-col items-center justify-center gap-y-6 px-4 py-[96px] md:gap-x-14 md:px-6 lg:flex-row xl:justify-between xl:gap-x-24 xl:px-36">
            <div className="font-heading space-y-5 -tracking-tighter xl:tracking-normal">
              <h1 className="text-darkblue text-4xl font-semibold md:text-5xl lg:text-7xl">
                Overwhelmed with
                <span className="text-alert-104 block">School</span>
                <span className="text-alert-104 block">Communication</span>
              </h1>

              <p className="text-darkblue-102 text-lg font-bold md:text-xl lg:text-2xl">
                PASS it to your AI Agent
              </p>
              <Button className="cursor-pointer">Learn more</Button>
            </div>
            <Image
              src={manWalking}
              width={481}
              height={407}
              className="h-[229px] w-[271px] md:h-auto md:w-[300px] xl:h-[407px] xl:w-[481px]"
              priority
              quality={90}
              alt="guy walking"
            />
          </div>
        </section>

        {/* Container 2 Manage your children  */}
        <section className="mx-auto max-w-[542px] space-y-2 bg-white text-center">
          <h1 className="font-heading text-darkblue-102 text-2xl font-bold xl:text-[32px]">
            Manage your children&apos;s schedules and activities in one place
          </h1>
          <h2 className="text-secondary font-heading xl:text-2xlxl text-xl font-extrabold">
            Who is PASS.ai suitable for?
          </h2>
        </section>

        {/* Container 3 Busy Parents and School Admins  */}
        <section className="m-6 flex flex-col items-center justify-start gap-5 gap-y-8 bg-[#FFF] text-center xl:flex-row xl:items-start xl:justify-center xl:gap-80">
          <Card className="shadow-landcard flex h-[256px] w-[299px] flex-col items-center justify-center text-base">
            <Image
              src={peopleIcon}
              width="65"
              height="56"
              alt="parents icon"
            />
            <h1 className="font-heading text-neutral-dgrey text-3xl font-bold">
              Busy Parents
            </h1>
            <p className="text-black-200 mx-4 text-base font-normal">
              {" "}
              Parents are overwhelmed by the complexity and fragmentation of managing
              their children&apos;s school-related activities and schedules.
            </p>
          </Card>

          <Card className="shadow-landcard flex h-[256px] w-[299px] flex-col items-center justify-center">
            <Image
              src={peopleIcon}
              width="65"
              height="56"
              alt="admins icon"
            />
            <h1 className="font-heading text-neutral-dgrey text-3xl font-bold">
              School Admins
            </h1>
            <p className="text-black-200 mx-4 text-base font-normal">
              School admins are overwhelmed by the workload: tracking incidents,
              managing communication and ensuring security.
            </p>
          </Card>
        </section>

        {/* Container 4 How does PASSai help me*/}
        <section className="flex flex-col items-center justify-center gap-4 p-6 xl:flex-row">
          <Image
            src={emailGuy}
            width="454"
            height="408"
            className="h-[310px] w-[346px] md:h-[408px] md:w-[454px]"
            alt="guy standing"
          />

          <div className="space-y-3">
            <h1 className="font-heading text-xl font-bold text-neutral-800 xl:text-3xl">
              Why Choose PASS.ai?
            </h1>
            <ul className="font-heading list-disc self-stretch pl-5 text-sm text-neutral-800 xl:text-base">
              <li>Intelligent Calendar Management</li>
              <li>Unified Communication Hub</li>
              <li>Smart Child Progress Tracking</li>
              <li>Secure & Customizable Access</li>
            </ul>

            <Button className="cursor-pointer">
              <Link href="#">Learn more</Link>
            </Button>
          </div>
        </section>

        {/* Container 5 Connect all your child's school apps */}
        <section className="bg-darkblue font-heading text-offwhite flex flex-col items-center justify-center gap-4 py-7 max-sm:px-4 xl:flex-row xl:justify-between xl:px-40">
          <div className="font-heading h-full max-w-[540px] basis-1/2 gap-3 space-y-2 md:space-y-4 lg:space-y-6">
            <h1 className="text-offwhite text-2xl font-bold lg:text-3xl xl:text-4xl">
              Let the Numbers Talk
            </h1>
            <p className="indent-4 text-base font-semibold text-pretty md:text-lg">
              Whether it&apos;s managing school schedules, tracking assignments, or
              improving parent-teacher communication, PASS.ai streamlines everything
              into a single, intuitive dashboard.
            </p>
          </div>
          <div className="flex h-full max-w-[540px] flex-wrap justify-between gap-4">
            <div className="grow basis-full">
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src={parents}
                  width={48}
                  height={48}
                  alt="parents icon"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">2,245,341</h2>
                  <p>Parents</p>
                </div>
              </div>
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src={schoolsIcon}
                  width={48}
                  height={49}
                  alt="schools icon"
                  className="object-fill"
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
                  src={trendingUp}
                  width={48}
                  height={48}
                  alt="trending-up icon"
                />
                <div className="font-heading font-semibold">
                  <h2 className="text-2xl font-bold">828,867</h2>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="inline-flex min-w-1/2 gap-2">
                <Image
                  src={paymentsIcon}
                  width={48}
                  height={48}
                  className="object-cover- object-center"
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
        <section className="m-6 flex max-h-fit flex-col items-center justify-center space-x-3 xl:flex-row">
          <Image
            src={setupWizard}
            width={456}
            height={408}
            alt="girl board"
          />
          <div className="flex max-w-[600px] flex-col items-start gap-4 space-y-3.5 py-4">
            <h1 className="font-heading text-3xl font-bold text-neutral-800 xl:text-4xl">
              Seamless Scheduling, Smarter Communication, and Effortless Organization
            </h1>
            <ol className="list-inside list-none space-y-1 lg:space-y-0.5">
              <li>🚀 &nbsp;&nbsp;Effortless Family Management</li>
              <li>📅 &nbsp;&nbsp;Smart Calendar & AI-powered Reminders</li>
              <li>📩 &nbsp;&nbsp;School Emails...Sorted</li>
              <li>📊 &nbsp;&nbsp;Track Grades & Attendance</li>
              <li>🔒 &nbsp;&nbsp;Safe & Secure Access</li>
            </ol>
            <Link
              href="/signup"
              className="cursor-pointer"
            >
              <Button className="cursor-pointer">Sign up now</Button>
            </Link>
          </div>
        </section>

        {/* Container 7  Ashley Vee Testimonial */}
        <section className="bg-offwhite flex min-h-[438px] flex-col items-center justify-center gap-x-16 p-6 px-4 py-8 xl:flex-row xl:px-36 xl:py-8">
          <Image
            src={ashley}
            width={358}
            height={359}
            alt="mom with child"
          />

          <div className="flex min-h-[288px] max-w-[748px] flex-col items-start justify-center gap-4 px-4">
            <Image
              src={quoteIcon}
              width={98}
              height={81}
              alt="quote icon"
              className="py-2 max-lg:block lg:-mt-20"
            />
            <p className="xl:text-black-200 indent-3 font-sans text-blue-950">
              PASS.ai has been a game-changer for our family. I can now manage my
              children&apos;s schedules and school activities in one place. It has
              made our lives so much easier!
            </p>
            <p className="text-darkblue-104 font-heading text-2xl font-bold">
              Ashley Vee
            </p>
            <p className="font-heading text-darkblue-102 -mt-3.5 mb-2 font-semibold">
              Graphic Designer
            </p>

            <Link
              href="#"
              className="font-heading text-darkblue text-xl/relaxed font-semibold"
            >
              See what other customers have said
            </Link>
          </div>
        </section>
        {/* Container 8  Caring is the new marketing  */}
        <section className="flex flex-col items-center justify-start gap-3 xl:px-36">
          <h1 className="font-heading text-secondary text-shadow-neutral-dgrey/25 text-3xl font-bold tracking-tighter text-shadow-xs md:text-4xl lg:text-5xl xl:tracking-tight">
            PASS.ai Features
          </h1>
          <p className="text-black-200 font-heading max-w-xl px-3 indent-9 text-sm text-pretty first-letter:text-black max-md:mx-10 md:text-base xl:px-4">
            PASS.ai helps families stay on top of their busy lives. Keep track of
            school events, homework, and important updates—all in one simple
            dashboard.
          </p>
          <div className="my-4 flex min-h-[565px] flex-row flex-wrap items-center justify-center gap-6 gap-y-10">
            <div className="grid max-h-[417px] grid-cols-1 xl:w-[368px]">
              <Image
                src={caring_1}
                width={368}
                height={287}
                alt="caring 1"
              />
              <Card className="shadow-landcard -mt-24 flex h-[227px] w-[310px] flex-col items-center justify-between justify-self-center px-2 duration-500 ease-in-out hover:drop-shadow-lg">
                <h1 className="font-heading text-neutral-grey mx-8 text-2xl font-bold text-pretty">
                  Family Calendar
                </h1>
                <p className="indent-2">Make scheduling simple and stress-free.</p>
                <Link
                  href="#"
                  className="text-darkblue-102 hover:text-darkblue-106 mx-auto leading-none font-semibold transition-colors"
                >
                  Read more
                </Link>
              </Card>
            </div>
            <div className="grid h-[417px] w-[368px] grid-cols-1">
              <Image
                src={caring_2}
                width={368}
                height={283}
                alt="caring 2"
              />
              <Card className="shadow-landcard -mt-24 flex h-[227px] w-[310px] flex-col items-center justify-between justify-self-center px-2 duration-500 ease-in-out hover:drop-shadow-lg">
                <h1 className="font-heading text-neutral-grey mx-8 text-center text-2xl font-bold text-pretty">
                  School Communication
                </h1>
                <p className="indent-2">Never miss an important message again.</p>
                <Link
                  href="#"
                  className="text-darkblue-102 hover:text-darkblue-106 mx-auto leading-none font-semibold transition-colors"
                >
                  Read more
                </Link>
              </Card>
            </div>
            <div className="grid h-[417px] w-[368px] grid-cols-1">
              <Image
                src={caring_3}
                width={368}
                height={287}
                alt="caring 3"
              />
              <Card className="shadow-landcard -mt-24 flex h-[227px] w-[310px] flex-col items-center justify-between justify-self-center px-2 duration-500 ease-in-out hover:drop-shadow-lg">
                <h1 className="font-heading text-neutral-grey mx-8 text-center text-2xl font-bold text-pretty">
                  Track Academic Progress
                </h1>
                <p className="indent-2">
                  Stay updated on schoolwork and attendance.
                </p>
                <Link
                  href="#"
                  className="text-darkblue-102 hover:text-darkblue-106 mx-auto leading-none font-semibold transition-colors"
                >
                  Read more
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-darkblue flex min-h-52 basis-full max-sm:flex-col xl:px-4">
        <div className="flex basis-full items-start justify-between self-stretch p-10 max-sm:flex-col xl:inline-flex">
          <div className="inline-flex flex-col items-start justify-center gap-5">
            <div className="relative h-24 w-20">
              <Image
                width={73}
                height={96}
                className="h-auto w-20"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="font-heading text-offwhite w-80 justify-center text-sm font-semibold">
              Parent Agent x School Support
            </div>
            <div className="inline-flex grow basis-full flex-row flex-wrap gap-4 xl:flex-nowrap xl:gap-10">
              <span className="text-offwhite justify-center text-center font-sans text-base leading-normal font-bold">
                © 2025
              </span>
              <span className="text-offwhite justify-center text-center font-sans text-base leading-normal font-semibold">
                PASS.ai
              </span>
            </div>
          </div>
          <Link
            href="#"
            className="inline-flex h-full w-full flex-col items-start justify-center gap-2"
          >
            <div className="text-offwhite justify-center text-center font-sans text-sm leading-none font-bold uppercase">
              GET CONNECTED
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              About us
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Services
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Contact us
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex h-full w-full flex-col items-start justify-center gap-2"
          >
            <div className="text-offwhite justify-center text-center font-sans text-sm leading-none font-bold uppercase">
              Product
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Pricing
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Features
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Customers
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex h-full w-full flex-col items-start justify-center gap-2"
          >
            <div className="text-offwhite justify-center text-center font-sans text-sm leading-none font-bold uppercase">
              Help
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Getting started
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              FAQs
            </div>
            <div className="text-offwhite justify-center text-center font-sans text-base leading-normal font-normal">
              Referral program
            </div>
          </Link>
          <div className="inline-flex w-full flex-row items-center justify-center gap-2">
            <Link
              href="https://www.facebook.com"
              className="size-8 hover:drop-shadow-lg"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="http://www.instagram.com"
              className="size-8"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="http://www.x.com"
              className="size-8"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

const FacebookIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_199_1129)">
        <path
          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
          fill="#1877F2"
        />
        <path
          d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_199_1129">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_199_1134)">
        <path
          d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
          fill="#000100"
        />
        <path
          d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
          fill="#000100"
        />
        <path
          d="M19.8469 5.5922C19.8469 6.38908 19.2 7.03127 18.4078 7.03127C17.6109 7.03127 16.9688 6.38439 16.9688 5.5922C16.9688 4.79533 17.6156 4.15314 18.4078 4.15314C19.2 4.15314 19.8469 4.80001 19.8469 5.5922Z"
          fill="#000100"
        />
      </g>
      <defs>
        <clipPath id="clip0_199_1134">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.54752 21.7507C16.6042 21.7507 21.5578 14.2473 21.5578 7.74046C21.5578 7.52734 21.5578 7.31518 21.5434 7.10398C22.507 6.40693 23.3389 5.54386 24 4.55518C23.1014 4.95358 22.148 5.21473 21.1718 5.3299C22.1998 4.71459 22.9692 3.74668 23.3366 2.60638C22.3701 3.17999 21.3126 3.58421 20.2099 3.80158C19.4675 3.01216 18.4856 2.48942 17.4162 2.31426C16.3468 2.13911 15.2494 2.32129 14.294 2.83263C13.3385 3.34397 12.5782 4.15595 12.1307 5.14293C11.6833 6.1299 11.5735 7.23684 11.8186 8.29246C9.8609 8.19426 7.94576 7.68549 6.19745 6.79918C4.44915 5.91288 2.90676 4.66884 1.6704 3.14782C1.04073 4.23181 0.847872 5.51505 1.1311 6.73624C1.41433 7.95744 2.15234 9.02477 3.19488 9.72094C2.41123 9.69798 1.64465 9.48657 0.96 9.10462V9.16702C0.960311 10.3039 1.35385 11.4056 2.07387 12.2854C2.79389 13.1652 3.79606 13.7688 4.9104 13.9939C4.18548 14.1916 3.42487 14.2205 2.68704 14.0784C3.00181 15.0567 3.61443 15.9122 4.43924 16.5253C5.26405 17.1384 6.25983 17.4785 7.28736 17.4979C6.26644 18.3004 5.09731 18.8937 3.84687 19.2439C2.59643 19.5941 1.28921 19.6943 0 19.5389C2.25183 20.9839 4.87192 21.7504 7.54752 21.7469"
        fill="#1DA1F2"
      />
    </svg>
  );
};
