"use client";

import Link from "next/link";

// ShadCN UI Imports
import { Button } from "@/components/ui/button";

// Local imports
import Alert from "@/components/Alert";

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
                    <Button className="space-x-2">GitHub</Button>
                    <Button asChild className="space-x-2" variant={"secondary"}>
                        <Link href="/blog/timeline">Development timeline</Link>
                    </Button>
                </div>
            </div>

            <div id="overview" className="lg:container lg:mx-auto px-5 mt-20">
                <h2 className="text-3xl font-bold">📚 Overview</h2>

                <article className="prose prose-slate my-4">
                    <p className="lead">
                        People take my leaves all the time... so I made this.
                    </p>

                    <Alert type="warning" title="Disclaimer">
                        This is a WORK IN PROGRESS project, and it is NOT
                        finished.
                    </Alert>

                    <p>
                        At my school, we’ve got this nifty system we like to
                        call "Montessori 2.0," because why not slap a version
                        number on everything? Naturally, this follows the
                        Montessori method of education, but with a few changes
                        and more standardization. This system encourages
                        students to be independent, responsible, etc. A part of
                        this system is a knowledge tree (no: "Kunnskapstreet"),
                        which, in simple terms, is based on that pupils get to
                        choose what learning goal they want to learn within a
                        subject. New learning goals must be chosen every 2 weeks
                        in every subject, and if the work presented by the
                        student is of above average (no: "over middels")
                        quality, the student receives a leaf. The leaf can be
                        hung up on a poster on a wall as a part of a tree, your
                        knowledge being the whole tree, every subject being a
                        branch, and the learning goals the leaves.
                    </p>

                    <p>
                        The problem is that the leaves, almost always, gets
                        lost, stolen or simply... god damn disappears. This
                        results in teachers having to use their valuable time,
                        to cut out pieces of plastic and paper, instead of
                        helping us students.
                    </p>

                    <p>So... naturally, I decided to make this.</p>
                    <Alert type="info" title="Note">
                        As of 2024, I attend{" "}
                        <a
                            href="https://akademiet.no"
                            className="underline text-blue-600"
                        >
                            Akademiet Realfagsskole Drammen
                        </a>
                        . This project? It’s totally independent and not
                        affiliated with{" "}
                        <a
                            href="https://www.akademiet.no/grunnskole/drammen/"
                            className="underline text-blue-600"
                        >
                            Akademiet Norge AS
                        </a>
                        .
                    </Alert>
                </article>
            </div>
        </main>
    );
}
