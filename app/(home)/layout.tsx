import Navbar from "@/components/Navbar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="font-sans">
            <Navbar></Navbar>
            {children}
        </main>
    );
}
