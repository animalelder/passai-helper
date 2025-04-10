// components/card-wrapper.tsx
// This component is a wrapper for the Card component. It accepts the following props:
// - children: React.ReactNode
// - cardTitle: string
// - cardDescription: string
// - cardFooterLinkTitle: string
// - cardFooterDescription: string
// - cardFooterLink: string
// - className: string
// It returns a Card component with the children, cardTitle, cardDescription, and cardFooterLinkTitle props.
// If the cardFooterLink prop is provided, it also returns a CardFooter component with the cardFooterDescription and cardFooterLinkTitle props.
// The CardFooter component contains a Link component that links to the cardFooterLink prop.

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardWrapperType {
  children: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  cardFooterLinkTitle?: string;
  cardFooterDescription?: string;
  cardFooterLink?: string;
  className?: string;
}

const CardWrapper = ({
  children,
  cardTitle,
  cardDescription,
  cardFooterLinkTitle = "Learn More", // Default value
  cardFooterDescription = "",
  cardFooterLink,
  className = "",
}: CardWrapperType) => {
  return (
    <Card
      className={cn(
        `relative flex w-full flex-col justify-between border-0 shadow-md max-sm:h-full md:w-[400px]`,
        className
      )}
    >
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {cardFooterLink && (
        <CardFooter className="flex items-center justify-center gap-x-1">
          {cardFooterDescription && <span>{cardFooterDescription}</span>}
          <Link
            href={cardFooterLink}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {cardFooterLinkTitle}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
