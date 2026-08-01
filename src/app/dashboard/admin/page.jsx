"use client";
import { Users, UserPlus, ClipboardList, CheckCircle, Clock3 } from "lucide-react";
import DashboardCard from "@/components/dashboard/admin-dashboard/DashboardCard";
import RecentTasks from "@/components/dashboard/admin-dashboard/RecentTasks";
import TaskTable from "@/components/dashboard/admin-dashboard/TaskTable";
import Chart from "@/components/dashboard/admin-dashboard/Chart";
import { useDashboard } from "@/hooks/useDashboard";


export default function AdminDashboardPage() {
    const {
        stats,
        loading,
        error,
    } = useDashboard();


    return (
        <div className="space-y-8">
            {/* Page Heading */}
            <div>
                <h1 className="text-3xl font-bold text-slate-800">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                    Manage users, customers, leads, tasks and monitor CRM performance.
                </p>
            </div>

            
            {/* Statistics */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <DashboardCard
                    title="Total Users"
                    value={stats?.totalUsers ?? 0}
                    icon={Users}
                    color="bg-blue-600" />

                <DashboardCard
                    title="New Leads"
                    value={stats?.newLeads ?? 0}
                    icon={UserPlus}
                    color="bg-green-600"/>

                <DashboardCard
                    title="Leads"
                    value={stats?.totalLeads ?? 0}
                    icon={UserPlus}
                    color="bg-orange-500" />

                <DashboardCard
                    title="Tasks"
                    value={stats?.totalTasks ?? 0}
                    icon={ClipboardList}
                    color="bg-purple-600" />
            </div>

            {/* Task Summary */}
            <div className="grid gap-6 md:grid-cols-2">
                <DashboardCard
                    title="Completed Tasks"
                    value={stats?.completedTasks ?? 0}
                    icon={CheckCircle}
                    color="bg-emerald-600" />

                <DashboardCard
                    title="Pending Tasks"
                    value={stats?.pendingTasks ?? 0}
                    icon={Clock3}
                    color="bg-red-500" />
            </div>

            
            {/* Analytics */}
            <div className="grid gap-6 lg:grid-cols-2">

                <Chart
                    title="Lead Status Overview"
                    data={stats?.leadChartData ?? []}
                />

                <Chart
                    title="Task Status Overview"
                    data={stats?.taskChartData ?? []}
                />
            </div>
            <RecentTasks />

            {/* Recent Tasks Table */}
            <TaskTable />
        </div>
    );
}
