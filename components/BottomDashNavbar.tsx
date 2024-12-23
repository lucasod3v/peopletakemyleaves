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
    <div className="border-b border-border">
      <div className="lg:container p-5 pb-0">
        {links.map((link) => (
          <Button
            key={link.href}
            className={`rounded-none ${currentPage === link.href ? "border-b border-grey-100" : "hover:border-b border-grey-100"}`}
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