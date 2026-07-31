"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUser } from "@/utils/auth";

export default function AdminGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        const user = getUser();

        if (user?.role !== "ADMIN") {
            router.replace("/dashboard");
        }
    }, [router]);

    return <>{children}</>;
}
