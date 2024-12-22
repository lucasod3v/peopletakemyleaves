"use client";

import Link from "next/link";

// ShadCN UI Imports
import { Button } from "@/components/ui/button";

// Local imports
import Alert from "@/components/Alert";

export default function Timeline() {
    return (
        <main>
            <div className="text-center mt-40">
                <h1 className="text-4xl font-bold">
                    Product Development Timeline
                </h1>
                <p className="text-lg mt-4">
                    Follow the journey of our product development. This project is open source on GitHub.
                </p>
                <div className="space-x-5 font-mono mt-10">
                    <Button asChild className="space-x-2">
                        <Link href="https://github.com/lucasod3v/peopletakemyleaves">
                            GitHub
                        </Link>
                    </Button>
                    <Button asChild className="space-x-2" variant={"secondary"}>
                        <Link href="/blog/timeline">Development timeline</Link>
                    </Button>
                </div>
            </div>

            <div id="timeline" className="lg:container lg:mx-auto px-5 mt-20">
                <h2 className="text-3xl font-bold">📅 Timeline</h2>

                <article className="prose prose-slate my-4">
                    <p className="lead">
                        Here is the timeline of our product development journey.
                    </p>

                    <Alert type="info" title="Note">
                        This timeline is a work in progress and will be updated
                        regularly.
                    </Alert>

                    <ul className="list-disc pl-5">
                        <li>
                            <strong>July-November 2024:</strong> Initial idea and
                            brainstorming sessions.
                        </li>
                        <li>
                            <strong>December 2024:</strong> Development start and research about techonologies that should be used.
                        </li>
                        <li>
                            <strong>January-February 2024:</strong> Basic functionalities development.
                        </li>
                        <li>
                            <strong>March-April:</strong> Nice-to-have features developement.
                        </li>
                        <li>
                            <strong>May 2024:</strong> Testing and feedback
                            collection. Release of the first version.
                        </li>
                    </ul>
                </article>
            </div>
        </main>
    );
}
