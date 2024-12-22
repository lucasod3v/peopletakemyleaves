"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import HamburgerIcon from "./icons/HamburgerIcon";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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
} from "@/components/CustomSheet";

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
                <div className={`mt-5 w-full pb-2`}>
                    <div className="flex px-5 lg:container lg:mx-auto justify-between items-center md:justify-normal">
                        <Link href="/" passHref>
                            <div className="items-center font-bold">
                                <p>Peopletakemyleaves</p>
                                <p className="font-normal text-sm">.uk.to</p>
                            </div>
                        </Link>

                        <div className="mx-auto hidden md:block">
                            <NavigationMenu>
                                <NavigationMenuList className="text-black">
                                    <NavigationMenuItem>
                                        <Link
                                            href="/preview"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Blog
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
                                                Documentation
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
                            variant="default"
                            className="font-mono hidden md:flex space-x-2"
                        >
                            <p>Dashboard</p>
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
                    className="w-screen px-5 pt-3 border-none"
                >
                    <SheetTitle>
                        <VisuallyHidden.Root>
                            Navbar menu sheet
                        </VisuallyHidden.Root>
                    </SheetTitle>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-bold"
                            >
                                <p>Peopletakemyleaves.uk.to</p>
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
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Blog
                            </Link>
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Documentation
                            </Link>
                            <Link
                                href="#"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Sponsor!
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
