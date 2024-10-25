"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import HamburgerIcon from "./icons/HamburgerIcon";

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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import ContactIcon from "./icons/ContactIcon";

import CloseCross from "./icons/CloseCross";

import { Button } from "./ui/button";

import { useState } from "react";

export default function NavbarBlack() {
    let [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
        console.log(menuState);
    };

    return (
        <nav>
            <Sheet open={menuState}>
                <div className={`mt-3 w-full pb-2`}>
                    <div className="flex px-5 lg:container justify-between items-center md:justify-normal">
                        <Link href="/" passHref>
                            <div className="flex space-x-2 items-center font-bold">
                                Peopletakemyleaves.uk.to
                            </div>
                        </Link>

                        <div className="mx-auto hidden md:block">
                            <NavigationMenu>
                                <NavigationMenuList className="text-black">
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            XcaPilot
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                XcaPilot
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully
                                                                designed
                                                                components that
                                                                you can copy and
                                                                paste into your
                                                                apps.
                                                                Accessible.
                                                                Customizable.
                                                                Open Source.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem
                                                    href="/docs"
                                                    title="Technologies"
                                                >
                                                    Re-usable components built
                                                    using Radix UI and Tailwind
                                                    CSS.
                                                </ListItem>
                                                <ListItem
                                                    href="/docs/installation"
                                                    title="Features"
                                                >
                                                    How to install dependencies
                                                    and structure your app.
                                                </ListItem>
                                                <ListItem
                                                    href="/docs/primitives/typography"
                                                    title="Timeline"
                                                >
                                                    Styles for headings,
                                                    paragraphs, lists...etc
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link
                                            href="/preview"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Preview
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link
                                            href="/about-us"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                About us
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link
                                            href="/sponsor"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Sponsor!
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <Button
                            variant="secondary"
                            className="font-mono hidden md:flex space-x-2"
                        >
                            <ContactIcon color="white"></ContactIcon>
                            <p>Contact us</p>
                        </Button>

                        <div className="md:hidden flex items-center">
                            <SheetTrigger onClick={toggleMenu}>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-[#000000]/0"
                                >
                                    <HamburgerIcon
                                        width={30}
                                        height={30}
                                        color="black"
                                    ></HamburgerIcon>
                                </Button>
                            </SheetTrigger>
                        </div>
                    </div>
                </div>

                <SheetContent
                    side="right"
                    className="w-screen bg-[#101112] px-5 pt-3 border-none"
                >
                    <div className="">
                        <div className="flex items-center justify-between">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Image
                                    priority
                                    src="/logo_black.svg"
                                    alt="XcaTech Logo"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                            <Button
                                onClick={toggleMenu}
                                variant="ghost"
                                size="icon"
                                className="hover:bg-[#000000]/0 mr-4"
                            >
                                <CloseCross
                                    width={20}
                                    height={20}
                                    color="black"
                                ></CloseCross>
                            </Button>
                            <span className="sr-only">Close</span>
                        </div>

                        <div className="grid text-sm text-black mr-4 mt-5">
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="border-y border-y-[#FFFFFF]/10"
                                >
                                    <AccordionTrigger className="py-2">
                                        XcaPilot
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul>
                                            <li>Link 1</li>
                                            <li>Link 1</li>
                                            <li>Link 1</li>
                                            <li>Link 1</li>
                                            <li>Link 1</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Preview
                            </Link>
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                About us
                            </Link>
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Jobs!
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
