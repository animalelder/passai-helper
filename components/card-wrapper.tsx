import React from "react";
import Link from "next/link";

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
    <Card className={`relative w-[400px] ${className} border-2 shadow-md`}>
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
