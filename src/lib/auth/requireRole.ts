"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "./getUser";

export function useRequireRole(role: "ADMIN" | "STAFF") {
    const router = useRouter();

    useEffect(() => {
        const user = getUser();

        if (!user) {
            router.replace("/login");
            return;
        }

        if (user.role !== role) {
            router.replace("/unauthorized");
        }
    }, [router, role]);
}
