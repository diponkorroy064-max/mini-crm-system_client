"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUser } from "./getUser";

export function useRequireAuth() {
    const router = useRouter();

    useEffect(() => {
        const user = getUser();

        if (!user) {
            router.replace("/login");
        }
    }, [router]);
}
