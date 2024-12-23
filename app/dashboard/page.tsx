"use client";

// Local imports
import Alert from "@/components/Alert";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main>
            <Alert type="info" title="Dashboard">You are now in the dashboard.</Alert>
        </main>
    );
}
