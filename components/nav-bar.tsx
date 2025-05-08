"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo_elepehant from "@/components/logo";

const menuItems = [
  { name: "What is PASS.ai?", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "About Us", href: "/" },
];

// Remove the catch-all transition and duration classes, as they are slowing down the webpage
// and causing the menu to flicker when opening and closing.
const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className="mx-w-[1440px] fixed inset-0 z-20 mx-auto max-h-[82px] w-dvw basis-full md:max-h-[92px]">
      <nav
        data-state={menuState && "active"}
        className="inline-flex w-full grow items-center justify-between overflow-x-clip overflow-y-visible bg-lightblue px-[32px] py-2 shadow-2xl data-[state=active]:bg-card"
      >
        {/* <Link href="/">
          <Image
            width={150}
            height={60}
            className={cn(
              "isolate z-30 -mb-7 w-20 overflow-y-visible slide-in-from-left in-data-[state=active]:hidden in-data-[state=active]:opacity-0 in-data-[state=active]:slide-out-to-left"
            )}
            src={logo_elepehant}
            priority
            alt="logo"
          />
        </Link> */}
        <span className="group inline-flex items-center gap-2">
          <Logo_elepehant />
          <span className="font-logo text-2xl font-bold text-darkblue-103">
            PASS.AI
          </span>
        </span>

        <ul className="hidden gap-2 font-medium lg:inline-flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                className="px-2 text-lg font-semibold text-primary-foreground hover:text-accent-foreground"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto p-2 lg:hidden">
          <button
            onClick={() => {
              setMenuState(!menuState);
            }}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            className="relative z-20 block cursor-pointer p-2.5 in-data-[state=active]:hidden lg:hidden"
          >
            <Menu className="size-6 duration-200 in-data-[state=active]:hidden in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
          </button>
        </div>
        <div className="slide-out-from-bottom mix isolate z-50 mx-auto mt-10 hidden h-fit w-full rounded-3xl border-2 border-white bg-lightblue p-5 backdrop-blur-lg transition-all in-data-[state=active]:isolate in-data-[state=active]:flex in-data-[state=active]:flex-col in-data-[state=active]:slide-in-from-top lg:hidden">
          <div className="contents lg:hidden">
            <button
              onClick={() => {
                setMenuState(!menuState);
              }}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="z-50 ml-auto cursor-pointer place-self-end justify-self-end p-2.5 lg:hidden"
            >
              <X className="hidden size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:block in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
            </button>
            <ul className="group mt-5 space-y-6 text-base transition-colors">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group-hover:darkblue-106 block font-semibold text-darkgreen-105 duration-150"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className="inline-flex w-full justify-around gap-2">
                <Button
                  variant="secondary"
                  asChild
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>

                <Button
                  variant="secondary"
                  asChild
                >
                  {/* <Link href="/signin">Sign In</Link> */}
                  <Link href="/onboarding/sign-in">Sign In</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Button
          variant="secondary"
          className="hidden lg:inline-flex"
          asChild
        >
          {/* <Link href="/signin">Sign In</Link> */}
          <Link href="/onboarding/sign-in">Sign In</Link>
        </Button>
      </nav>
    </header>
  );
};

export { NavBar };