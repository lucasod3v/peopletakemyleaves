"use client";

import Alert from "@/components/Alert";

export default function Footer() {
    return (
        <footer>
            <section className="block mb-5">
                <div className="lg:flex space-y-5 md:space-y-0 w-full lg:container lg:mx-auto px-5 mt-20 justify-between">
                    <div className="my-4 lg:my-0">
                        <Alert type="info" title="License">
                            This project is licensed under the {" "}
                            <a
                                href="https://github.com/lucasod3v/peopletakemyleaves/blob/main/LICENSE"
                                className="underline text-blue-600"
                            >
                                MIT License
                            </a>
                            .
                        </Alert>
                    </div>
                    <div className="grid grid-cols-2 sm:gap-16 gap-6 sm:grid-cols-3 pt-5 sm:pt-0">
                        <div className="space-y-2">
                            <h3 className="font-bold">RESOURCES</h3>
                            <ul>
                                <li>Blog</li>
                                <li>Documentation</li>
                                <li>Feedback</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">LUCASOD3V</h3>
                            <ul>
                                <li>GitHub</li>
                                <li>LinkedIn</li>
                                <li>Website</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">LEGAL</h3>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Credits</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-200 my-5 lg:container lg:mx-auto px-5"></hr>
                <div className="lg:container lg:mx-auto px-5">
                    <span>
                        Copyright © 2024{" "}
                        <a href="https://lucasodev.net.eu.org">
                            Lucas Nguyen (lucasod3v).
                        </a>{" "}
                        All rights Reserved. By using this site, you agree to
                        the Terms of Use and Privacy Policy.
                    </span>
                </div>
            </section>
        </footer>
    );
}
