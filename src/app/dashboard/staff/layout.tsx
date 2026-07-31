"use client";
import { ReactNode } from "react";
import { useRequireRole } from "@/lib/auth/requireRole";
// import Navbar from "@/components/dashboard/Navbar"
// import Sidebar from "@/components/dashboard/Sidebar";

export default function StaffLayout({
    children,
}: {
    children: ReactNode;
}) {
    useRequireRole("STAFF");

    return (
        <div>
            {children}
        </div>
    );
}
