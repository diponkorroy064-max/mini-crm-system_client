"use client";

import {
    Users,
    UserCheck,
    UserPlus,
    UserX,
} from "lucide-react";

const stats = [
    {
        title: "Total Customers",
        value: 120,
        icon: Users,
        color: "bg-blue-500",
    },
    {
        title: "Active",
        value: 100,
        icon: UserCheck,
        color: "bg-green-500",
    },
    {
        title: "New",
        value: 12,
        icon: UserPlus,
        color: "bg-yellow-500",
    },
    {
        title: "Inactive",
        value: 8,
        icon: UserX,
        color: "bg-red-500",
    },
];

const CustomerStats = () => {
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

export default CustomerStats;
