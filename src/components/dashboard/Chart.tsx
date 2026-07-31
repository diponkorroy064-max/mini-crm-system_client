"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const data = [
    {
        month: "Jan",
        completed: 20,
        pending: 8,
    },
    {
        month: "Feb",
        completed: 30,
        pending: 12,
    },
    {
        month: "Mar",
        completed: 28,
        pending: 10,
    },
    {
        month: "Apr",
        completed: 40,
        pending: 15,
    },
    {
        month: "May",
        completed: 38,
        pending: 9,
    },
    {
        month: "Jun",
        completed: 45,
        pending: 6,
    },
];

const Chart = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-bold text-gray-800">
                Task Overview
            </h2>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="completed"
                            fill="#2563eb"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey="pending"
                            fill="#f59e0b"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
