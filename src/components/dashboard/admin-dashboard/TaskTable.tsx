import { Eye, Pencil } from "lucide-react";

const tasks = [
    {
        id: 1,
        title: "Design Login Page",
        assignedTo: "John Doe",
        priority: "High",
        status: "Completed",
        dueDate: "2026-07-30",
    },
    {
        id: 2,
        title: "Create User API",
        assignedTo: "Sarah Smith",
        priority: "Medium",
        status: "Pending",
        dueDate: "2026-08-02",
    },
    {
        id: 3,
        title: "Build Dashboard",
        assignedTo: "Alex Johnson",
        priority: "High",
        status: "In Progress",
        dueDate: "2026-08-05",
    },
    {
        id: 4,
        title: "Deploy Project",
        assignedTo: "Emma Wilson",
        priority: "Low",
        status: "Completed",
        dueDate: "2026-08-10",
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "Completed":
            return "bg-green-100 text-green-700";

        case "Pending":
            return "bg-red-100 text-red-700";

        default:
            return "bg-yellow-100 text-yellow-700";
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "High":
            return "bg-red-100 text-red-700";

        case "Medium":
            return "bg-yellow-100 text-yellow-700";

        default:
            return "bg-green-100 text-green-700";
    }
};

const TaskTable = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b bg-gray-50 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    My Tasks
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    View and manage your assigned tasks.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full">

                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Task
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Assigned To
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Priority
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Status
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Due Date
                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task) => (
                            <tr
                                key={task.id}
                                className="border-t transition hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {task.title}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            Task ID #{task.id}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {task.assignedTo}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityColor(task.priority)}`}
                                    >
                                        {task.priority}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(task.status)}`}
                                    >
                                        {task.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {task.dueDate}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">

                                        {/* View */}
                                        <button
                                            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-100 hover:scale-105"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        {/* Edit */}
                                        <button
                                            className="rounded-lg p-2 text-green-600 transition hover:bg-green-100 hover:scale-105"
                                        >
                                            <Pencil size={18} />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default TaskTable;
