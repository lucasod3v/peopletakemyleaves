"use client";

import { usePathname} from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/components/DashNavbar";
import Footer from "@/components/Footer";
import BottomDashNavbar from "@/components/BottomDashNavbar";

const links = [
    { name: "Trees", href: "/dashboard" },
    { name: "Account settings", href: "/dashboard/account" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(pathname);

    useEffect(() => {
        setCurrentPage(pathname);
    }, [pathname]);

    return (
        <main className="font-sans min-h-screen flex flex-col">
            <Navbar />
            <BottomDashNavbar links={links} currentPage={currentPage} />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </main>
    );
}