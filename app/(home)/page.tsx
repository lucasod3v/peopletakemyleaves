"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main>
            <div className="text-center mt-40">
                <h1 className="text-4xl font-bold">
                    Organize your learning like never before!
                </h1>
                <p className="text-lg mt-4">
                    Create, manage and save your own learning goals with ease.
                </p>
                <div className="space-x-5 font-mono mt-10">
                    <Button className="space-x-2">Sign up</Button>
                    <Button className="space-x-2" variant={"secondary"}>Why?</Button>
                </div>
            </div>

            <div className="lg:container lg:mx-auto px-5 mt-20">
                <h2 className="text-2xl font-bold">Why?</h2>
            </div>
        </main>
    );
}
