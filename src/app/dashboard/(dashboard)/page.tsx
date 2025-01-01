"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { useUser } from "@clerk/nextjs";

import Leaf from "@/components/icons/Leaf";

export default function Dashboard() {
    const { user } = useUser();

    return (
        <main className="lg:container lg:mx-auto px-5">
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="">
                    <Card>
                        <CardHeader>
                            <CardTitle>{user?.firstName}'s tree</CardTitle>
                            <CardDescription>
                                Default self-assigned tree
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2 text-sm">
                                <Leaf width={18} height={18} color="#16a34a" /> <p>ENG: Writing an essay</p>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Leaf width={18} height={18} color="#16a34a" /> <p>NOS: Skrive diktanalyse</p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </main>
    );
}
