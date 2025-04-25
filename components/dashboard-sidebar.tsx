import React from "react";
import Link from "next/link";

import { Bell, CircleUserRound, House, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "My Kids",
      url: "/kids",
      icon: Users,
      isActive: false,
    },
    {
      title: "Alerts",
      url: "/alerts",
      icon: Bell,
      isActive: false,
    },
    {
      title: "Account",
      url: "/account",
      icon: CircleUserRound,
      isActive: false,
    },
  ],
};

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}

        <SidebarGroup>
          <SidebarGroupLabel>Title</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default function Logo() {
  return (
    <svg
      fill="none"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30z"
        fill="#FCAA2F"
      />
      <path
        d="M51.974 24.047l-1.628-10.795a1.554 1.554 0 00-.448-.884L35.826 33.462h8.02c.694 0 1.353-.304 1.81-.833l5.736-6.596c.474-.542.687-1.27.581-1.986zm-2.806-12.082c.055-.094-3.971-.019-4.068-.042-.303-.001-.595.11-.822.311l-5.72 5.074a.298.298 0 01-.083.059L35.86 31.914l13.307-19.95zm-11.49 5.166l-3.686-2.07a2.422 2.422 0 00-1.18-.311h-5.877c-.384 0-.762.092-1.104.269l-3.72 1.944 2.998 16.5h9.638l2.93-16.332zm-16.43-.017l-5.529-4.88c-.228-.2-.52-.31-.822-.311h-3.354a1.485 1.485 0 00-.846.26l13.324 19.95c-.057-.034-2.629-15.058-2.773-15.019zm-11.224-3.913L8.04 24.123a2.49 2.49 0 00.548 2.053l5.53 6.445c.457.533 1.12.84 1.817.841h7.978L10.14 12.84s-.095.236-.116.361zm19.883 34.086c.389.556 1.145.802 1.818.799h4.317a2.089 2.089 0 001.627-.8l3.18-4.08-13.933-.167 2.99 4.248zm13.59-7.935l-6.077 3.012h4.085l2.175-2.784a.15.15 0 00.003-.192.145.145 0 00-.186-.036zm-8.907-5.048h-9.324l1.403 7.758c.022.102.05.203.084.303h6.384l1.453-8.061z"
        fill="#587882"
      />
    </svg>
  );
}
