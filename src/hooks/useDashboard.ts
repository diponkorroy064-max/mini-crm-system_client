"use client";
import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboard";

export interface DashboardStats {
    totalUsers: number;
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    inProgressTasks: number;
    totalLeads: number;
    newLeads: number;
    contactedLeads: number;
    qualifiedLeads: number;
    proposalSentLeads: number;
    wonLeads: number;
    lostLeads: number;

    taskChartData: {
        name: string;
        value: number;
    }[];

    leadChartData: {
        name: string;
        value: number;
    }[];
}


export const useDashboard = () => {
    const [stats, setStats] =
        useState<DashboardStats | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const fetchStats = async () => {
        try {
            setLoading(true);

            const data =
                await getDashboardStats();

            setStats(data.data);

            setError("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return {
        stats,
        loading,
        error,
        refetch: fetchStats,
    };
};
