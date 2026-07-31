'use client'
import { useState, type ReactNode } from "react";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
    }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login");
        } else {
            setLoading(false);
        }
        
        if (!isAuthenticated()) {
            router.replace("/login");
        }
    }, [router]);

    // if (!isAuthenticated()) {
    //     return null;
    // }


    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Navbar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
