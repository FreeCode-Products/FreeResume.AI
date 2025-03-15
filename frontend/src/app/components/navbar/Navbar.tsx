"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI Resume Builder",
    href: "/features/ai-resume-builder",
    description:
      "Generate a professional resume instantly using AI-powered suggestions.",
  },
  {
    title: "ATS Score Checker",
    href: "/features/ats-checker",
    description:
      "Ensure your resume passes ATS filters with our advanced analysis.",
  },
  {
    title: "Cover Letter Generator",
    href: "/features/cover-letter",
    description:
      "Craft the perfect cover letter tailored to your job application.",
  },
  {
    title: "Resume Templates",
    href: "/features/templates",
    description:
      "Choose from a variety of modern, ATS-friendly resume templates.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" flex  lg:flex-row justify-center items-center  gap-2">
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink  className={navigationMenuTriggerStyle() }>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <Button>Create my Resume</Button>
                 
                  </Link>
                </NavigationMenuLink>
              </li>
                 {/* <p className="text-xs leading-tight text-muted-foreground text-center pt-2">
                      AI-powered resume with ATS optimization.
                    </p> */}
              <ListItem
                href="/features/templates"
                title="Resume & Cover Letter Templates"
              >
                Explore our professionally designed templates to stand out.
              </ListItem>
              <ListItem href="/features/ats-checker" title="ATS Score Checker">
                Test your resume against Applicant Tracking Systems (ATS).
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger  className="bg-transparent">Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {features.map((feature) => (
                <ListItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                  className="mr-9 lg:mr-0"
                >
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
