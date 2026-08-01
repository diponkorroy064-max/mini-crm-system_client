"use client";

import { Task } from "@/types/task";

interface TaskTableProps {
    tasks: Task[];
    loading: boolean;
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
}

export default function TaskTable({
    tasks,
    loading,
    onEdit,
    onDelete,
}: TaskTableProps) {
    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "HIGH":
                return "bg-red-100 text-red-700";
            case "MEDIUM":
                return "bg-yellow-100 text-yellow-700";
            case "LOW":
                return "bg-green-100 text-green-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "PENDING":
                return "bg-yellow-100 text-yellow-700";
            case "IN_PROGRESS":
                return "bg-blue-100 text-blue-700";
            case "COMPLETED":
                return "bg-green-100 text-green-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow p-8 text-center">
                Loading tasks...
            </div>
        );
    }

    if (!tasks.length) {
        return (
            <div className="bg-white rounded-lg shadow p-8 text-center">
                No tasks found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border bg-white shadow">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-5 py-3 text-left">Title</th>
                        <th className="px-5 py-3 text-left">Description</th>
                        <th className="px-5 py-3 text-left">Priority</th>
                        <th className="px-5 py-3 text-left">Status</th>
                        <th className="px-5 py-3 text-left">Due Date</th>
                        <th className="px-5 py-3 text-left">Assigned To</th>
                        <th className="px-5 py-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className="border-t hover:bg-gray-50">
                            <td className="px-5 py-4 font-medium">
                                {task.title}
                            </td>

                            <td className="px-5 py-4">
                                {task.description || "-"}
                            </td>

                            <td className="px-5 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityBadge(
                                        task.priority
                                    )}`}
                                >
                                    {task.priority}
                                </span>
                            </td>

                            <td className="px-5 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadge(
                                        task.status
                                    )}`}
                                >
                                    {task.status}
                                </span>
                            </td>

                            <td className="px-5 py-4">
                                {task.dueDate
                                    ? new Date(task.dueDate).toLocaleDateString()
                                    : "-"}
                            </td>

                            <td className="px-5 py-4">
                                {task.assignedTo?.name || "Not Assigned"}
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex justify-center gap-3">
                                    <button
                                        onClick={() => onEdit(task)}
                                        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(task)}
                                        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
