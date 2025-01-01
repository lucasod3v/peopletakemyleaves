"use client";

import * as React from "react";
import Link from "next/link";

import HamburgerIcon from "./icons/HamburgerIcon";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/CustomSheet";

import CloseCross from "./icons/CloseCross";

import { Button } from "./ui/button";

import { useState } from "react";

export default function NavbarBlack() {
    const [menuState, setMenuState] = useState(false);

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
                                <p className="font-normal text-sm">
                                    lucasod3v/
                                </p>
                                <p>Peopletakemyleaves</p>
                            </div>
                        </Link>

                        <div className="mx-auto hidden md:block">
                            <NavigationMenu>
                                <NavigationMenuList className="text-black">
                                    <NavigationMenuItem>
                                        <Link href="/blog/timeline" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Timeline
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link
                                            href="/docs"
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
                                            href="/feedback"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Feedback
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <Button
                            asChild
                            variant="default"
                            className="font-mono hidden md:flex space-x-2"
                        >
                            <Link href="/dashboard">Dashboard</Link>
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
                                <div className="items-center font-bold">
                                    <p className="font-normal text-sm">
                                        lucasod3v/
                                    </p>
                                    <p>Peopletakemyleaves</p>
                                </div>
                            </Link>
                            <Button
                                onClick={toggleMenu}
                                variant="ghost"
                                size="icon"
                                className="hover:bg-[#000000]/0"
                            >
                                <CloseCross
                                    width={20}
                                    height={20}
                                    color="black"
                                ></CloseCross>
                            </Button>
                            <span className="sr-only">Close</span>
                        </div>

                        <div className="grid text-sm text-black mt-5">
                            <Link
                                href="/blog/timeline"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Timeline
                            </Link>
                            <Link
                                href="/docs"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Documentation
                            </Link>
                            <Link
                                href="/feedback"
                                className="border-b border-b-[#FFFFFF]/10 py-2"
                            >
                                Feedback
                            </Link>
                            <div className="flex my-2 w-full space-x-2">
                                <Button
                                    asChild
                                    variant="secondary"
                                    className="font-mono flex  w-full"
                                >
                                    <Link href="/dashboard">Sign in</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="default"
                                    className="font-mono flex w-full"
                                >
                                    <Link href="/dashboard">Get started</Link>
                                </Button>
                            </div>
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
