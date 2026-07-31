"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.replace("/login");
        }
    }, [router]);


    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Navbar/>
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

