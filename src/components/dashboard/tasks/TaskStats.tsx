"use client";

import {
    ClipboardList,
    Clock3,
    CheckCircle,
    AlertTriangle,
} from "lucide-react";

const stats = [
    {
        title: "Total Tasks",
        value: 32,
        icon: ClipboardList,
        color: "bg-blue-600",
    },
    {
        title: "Pending",
        value: 10,
        icon: Clock3,
        color: "bg-yellow-500",
    },
    {
        title: "Completed",
        value: 18,
        icon: CheckCircle,
        color: "bg-green-600",
    },
    {
        title: "High Priority",
        value: 4,
        icon: AlertTriangle,
        color: "bg-red-500",
    },
];

const TaskStats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-xl bg-white p-6 shadow"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {item.value}
                                </h2>
                            </div>

                            <div
                                className={`${item.color} rounded-full p-4 text-white`}
                            >
                                <Icon size={22} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskStats;
