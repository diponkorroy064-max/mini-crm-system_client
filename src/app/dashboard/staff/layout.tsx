"use client";
import { ReactNode } from "react";
import { useRequireRole } from "@/lib/auth/requireRole";


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
