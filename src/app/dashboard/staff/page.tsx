"use client";
import DashboardCard from "@/components/dashboard/DashboardCard";
import RecentTasks from "@/components/dashboard/RecentTasks";
import TaskTable from "@/components/dashboard/TaskTable";
import {
    ClipboardList,
    Clock3,
    CheckCircle,
} from "lucide-react";

export default function StaffDashboardPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">
                Staff Dashboard
            </h1>

            <div className="grid gap-6 md:grid-cols-3">
                <DashboardCard
                    title="My Tasks"
                    value={20}
                    icon={ClipboardList}
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Pending"
                    value={5}
                    icon={Clock3}
                    color="bg-yellow-500"
                />

                <DashboardCard
                    title="Completed"
                    value={15}
                    icon={CheckCircle}
                    color="bg-purple-600"
                />
            </div>

            <RecentTasks />

            <TaskTable />
        </div>
    );
}
