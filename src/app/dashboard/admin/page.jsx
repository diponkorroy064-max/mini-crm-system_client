"use client";
import { Users, UserPlus, Briefcase, ClipboardList, CheckCircle, Clock3 } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Chart from "@/components/dashboard/Chart";
import RecentTasks from "@/components/dashboard/RecentTasks";
import TaskTable from "@/components/dashboard/TaskTable";
// import { Toaster } from "react-hot-toast";


export default function AdminDashboardPage() {
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
                    value={25}
                    icon={Users}
                    color="bg-blue-600" />

                <DashboardCard
                    title="Customers"
                    value={145}
                    icon={Briefcase}
                    color="bg-green-600" />

                <DashboardCard
                    title="Leads"
                    value={38}
                    icon={UserPlus}
                    color="bg-orange-500" />

                <DashboardCard
                    title="Tasks"
                    value={82}
                    icon={ClipboardList}
                    color="bg-purple-600" />
            </div>

            {/* Task Summary */}
            <div className="grid gap-6 md:grid-cols-2">
                <DashboardCard
                    title="Completed Tasks"
                    value={64}
                    icon={CheckCircle}
                    color="bg-emerald-600" />

                <DashboardCard
                    title="Pending Tasks"
                    value={18}
                    icon={Clock3}
                    color="bg-red-500" />
            </div>

            
            {/* Analytics */}
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Chart />
                </div>

                <RecentTasks />
            </div>

            {/* Recent Tasks Table */}
            <TaskTable />
        </div>
    );
}
