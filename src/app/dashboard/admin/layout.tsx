"use client";

import { ReactNode } from "react";
import { useRequireRole } from "@/lib/auth/requireRole";
// import AdminSidebar from "@/components/dashboard/AdminSidebar";
// import Navbar from "@/components/dashboard/Navbar";

export default function AdminLayout({
    children,
}: {
    children: ReactNode;
}) {
    useRequireRole("ADMIN");

    return (
        <div>
            {children}
        </div>
    );
}
