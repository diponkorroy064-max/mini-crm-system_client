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

interface ChartProps {
    title: string;
    data: {
        name: string;
        value: number;
    }[];
}

const Chart = ({
    title,
    data,
}: ChartProps) => {
    console.log("Chart data:", data);
    console.log("Chart title:", title);
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-xl font-bold text-gray-800">
                {title}
            </h2>

            <div className="h-80">

                <ResponsiveContainer
                    width="100%"
                    height="100%">

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="value"
                            fill="#2563eb"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default Chart;
