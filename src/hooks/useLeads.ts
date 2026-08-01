"use client";

import { useEffect, useState } from "react";
import { getLeads } from "@/services/lead";
import { Lead } from "@/types/lead";

export const useLeads = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchLeads = async () => {
        try {
            setLoading(true);

            const data = await getLeads();

            setLeads(data.data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return {
        leads,
        setLeads,
        loading,
        setLoading,
        error,
        setError,
        refetch: fetchLeads,
    };
};

