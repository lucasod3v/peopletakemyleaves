"use client";

import Link from "next/link";

// ShadCN UI Imports
import { Button } from "@/components/ui/button";

// Local imports
import Alert from "@/components/Alert";

export default function Docs() {
    return (
        <main className="font-sans">
            <div className="text-center mt-40">
                <h1 className="text-4xl font-bold">Project Documentation</h1>
                <p className="text-lg mt-4">
                    Learn more about the project, its license, and how to
                    contribute.
                </p>
                <div className="space-x-5 font-mono mt-10">
                    <Button asChild className="space-x-2">
                        <Link href="https://github.com/lucasod3v/peopletakemyleaves">
                            GitHub
                        </Link>
                    </Button>
                    <Button asChild className="space-x-2" variant={"secondary"}>
                        <Link href="/">Home</Link>
                    </Button>
                </div>
            </div>

            <div id="docs" className="lg:container lg:mx-auto px-5 mt-20">
                <h2 className="text-3xl font-bold">📄 Documentation</h2>

                <article className="prose prose-slate my-4">
                    <Alert type="info" title="Note">
                        This project is a Work In Progress (WIP). More documentation wil come.
                    </Alert>

                    <h3 className="text-2xl font-bold">License</h3>
                    <p>
                        This project is licensed under the MIT License. Here is
                        a copy of the license:
                    </p>
                    <pre>
                        <code>
                            {`MIT License

Copyright (c) 2024 Lucas Nguyen (lucasod3v) <lucas.nguyen@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`}
                        </code>
                    </pre>

                    <h3 className="text-2xl font-bold">Open Source</h3>
                    <p>
                        This project is open source and available on GitHub. You
                        can find the repository and contribute to the project
                        at:
                    </p>
                    <Button asChild className="space-x-2 font-mono">
                        <Link href="https://github.com/lucasod3v/peopletakemyleaves">
                            GitHub
                        </Link>
                    </Button>
                </article>
            </div>
        </main>
    );
}
