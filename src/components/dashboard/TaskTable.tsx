import { Eye, Pencil, Trash2 } from "lucide-react";

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
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                    Task List
                </h2>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    + Add Task
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="border-b bg-gray-100 text-left">
                            <th className="px-4 py-3">Task</th>
                            <th className="px-4 py-3">Assigned To</th>
                            <th className="px-4 py-3">Priority</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Due Date</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task) => (
                            <tr
                                key={task.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="px-4 py-4 font-medium">
                                    {task.title}
                                </td>

                                <td className="px-4 py-4">
                                    {task.assignedTo}
                                </td>

                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${getPriorityColor(
                                            task.priority
                                        )}`}
                                    >
                                        {task.priority}
                                    </span>
                                </td>

                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                                            task.status
                                        )}`}
                                    >
                                        {task.status}
                                    </span>
                                </td>

                                <td className="px-4 py-4">
                                    {task.dueDate}
                                </td>

                                <td className="px-4 py-4">
                                    <div className="flex justify-center gap-3">

                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        <button className="rounded-lg bg-green-100 p-2 text-green-600 hover:bg-green-200">
                                            <Pencil size={18} />
                                        </button>

                                        <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">
                                            <Trash2 size={18} />
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
