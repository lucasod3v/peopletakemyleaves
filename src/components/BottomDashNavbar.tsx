"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BottomDashNavbarProps {
  links: { name: string; href: string }[];
  currentPage: string;
}

export default function BottomDashNavbar({ links, currentPage }: BottomDashNavbarProps) {
  return (
    <div className="lg:container lg:mx-auto p-5">
      <div className="border-b border-border">
        {links.map((link) => (
          <Button
            key={link.href}
            className={`rounded-none ${currentPage === link.href ? "border-b border-grey-100": "border-none"}`}
            variant="ghost"
            asChild
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}