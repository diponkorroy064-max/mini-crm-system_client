"use client";

import AdminGuard from "@/components/guards/AdminGuard";

export default function AnalyticsPage() {
    return (
        <AdminGuard>
            <div>
                <h1 className="text-3xl font-bold">
                    Analytics
                </h1>
            </div>
        </AdminGuard>
    );
}
