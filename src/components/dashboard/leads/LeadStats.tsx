"use client";

import {
    Users,
    UserPlus,
    PhoneCall,
    CheckCircle,
} from "lucide-react";

const stats = [
    {
        title: "Total Leads",
        value: 45,
        icon: Users,
        color: "bg-blue-500",
    },
    {
        title: "New Leads",
        value: 12,
        icon: UserPlus,
        color: "bg-yellow-500",
    },
    {
        title: "Contacted",
        value: 20,
        icon: PhoneCall,
        color: "bg-green-500",
    },
    {
        title: "Converted",
        value: 13,
        icon: CheckCircle,
        color: "bg-purple-500",
    },
];

const LeadStats = () => {
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

                            <div className={`${item.color} rounded-full p-4 text-white`}>
                                <Icon size={22} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LeadStats;
