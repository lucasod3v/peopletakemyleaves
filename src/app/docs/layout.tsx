import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="font-sans">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
}
