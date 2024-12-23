import Navbar from "@/components/DashNavbar";
import Footer from "@/components/Footer";
import BottomDashNavbar from "@/components/BottomDashNavbar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    const links = [
        { name: "Sites", href: "/dashboard/sites" },
        { name: "Account settings", href: "/dashboard/account-setting" },
    ];

    const currentPage = "/dashboard/sites";
    return (
        <main className="font-sans">
            <Navbar></Navbar>
            <BottomDashNavbar links={links} currentPage={currentPage} />
            {children}
            <Footer></Footer>
        </main>
    );
}
