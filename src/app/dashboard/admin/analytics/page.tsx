"use client";
import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend} from "recharts";

const monthlyCustomers = [
    { month: "Jan", customers: 18 },
    { month: "Feb", customers: 25 },
    { month: "Mar", customers: 31 },
    { month: "Apr", customers: 28 },
    { month: "May", customers: 42 },
    { month: "Jun", customers: 55 },
];

const taskStatus = [
    { name: "Completed", value: 75 },
    { name: "Pending", value: 15 },
    { name: "In Progress", value: 10 },
];

const COLORS = ["#22c55e", "#f59e0b", "#3b82f6"];

export default function AdminAnalyticsPage() {
    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Analytics
                </h1>

                <p className="text-gray-500">
                    Overview of CRM performance.
                </p>
            </div>

            {/* Top Cards */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-xl bg-white p-6 shadow">
                    <h2 className="text-gray-500">Total Customers</h2>

                    <p className="mt-2 text-3xl font-bold text-blue-600">
                        520
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h2 className="text-gray-500">New Leads</h2>

                    <p className="mt-2 text-3xl font-bold text-green-600">
                        84
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h2 className="text-gray-500">Completed Tasks</h2>

                    <p className="mt-2 text-3xl font-bold text-purple-600">
                        132
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h2 className="text-gray-500">Revenue</h2>

                    <p className="mt-2 text-3xl font-bold text-orange-500">
                        $24,500
                    </p>
                </div>

            </div>

            {/* Charts */}

            <div className="grid gap-6 lg:grid-cols-2">

                {/* Customer Growth */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="mb-5 text-xl font-semibold">
                        Customer Growth
                    </h2>

                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={monthlyCustomers}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />

                            <YAxis />

                            <Tooltip />

                            <Legend />

                            <Bar
                                dataKey="customers"
                                fill="#2563eb"
                                radius={[8, 8, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>

                </div>

                {/* Task Status */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="mb-5 text-xl font-semibold">
                        Task Status
                    </h2>

                    <ResponsiveContainer width="100%" height={320}>
                        <PieChart>

                            <Pie
                                data={taskStatus}
                                cx="50%"
                                cy="50%"
                                outerRadius={110}
                                dataKey="value"
                                label
                            >
                                {taskStatus.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />

                            <Legend />

                        </PieChart>
                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}
