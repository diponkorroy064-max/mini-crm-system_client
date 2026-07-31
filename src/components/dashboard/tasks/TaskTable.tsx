"use client";

import {
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

const tasks = [
    {
        id: 1,
        title: "Call John Doe",
        customer: "John Doe",
        priority: "High",
        status: "Pending",
        dueDate: "15 Aug 2026",
    },
    {
        id: 2,
        title: "Prepare Sales Report",
        customer: "ABC Company",
        priority: "Medium",
        status: "Completed",
        dueDate: "20 Aug 2026",
    },
];

const TaskTable = () => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
            <table className="w-full">

                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-6 py-4 text-left">
                            Task
                        </th>

                        <th className="px-6 py-4 text-left">
                            Customer
                        </th>

                        <th className="px-6 py-4 text-left">
                            Priority
                        </th>

                        <th className="px-6 py-4 text-left">
                            Status
                        </th>

                        <th className="px-6 py-4 text-left">
                            Due Date
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task) => (
                        <tr
                            key={task.id}
                            className="border-t"
                        >
                            <td className="px-6 py-4">
                                {task.title}
                            </td>

                            <td className="px-6 py-4">
                                {task.customer}
                            </td>

                            <td className="px-6 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm
                                    ${task.priority === "High"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm
                                    ${task.status === "Completed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {task.status}
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                {task.dueDate}
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex justify-center gap-3">

                                    <button className="text-blue-600">
                                        <Eye size={18} />
                                    </button>

                                    <button className="text-green-600">
                                        <Pencil size={18} />
                                    </button>

                                    <button className="text-red-600">
                                        <Trash2 size={18} />
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default TaskTable;
