import {
    CheckCircle2,
    Clock3,
    AlertCircle,
} from "lucide-react";

const recentTasks = [
    {
        id: 1,
        title: "Design Login Page",
        assignedTo: "John Doe",
        status: "Completed",
    },
    {
        id: 2,
        title: "Create User API",
        assignedTo: "Sarah Smith",
        status: "Pending",
    },
    {
        id: 3,
        title: "Build Dashboard",
        assignedTo: "Alex Johnson",
        status: "In Progress",
    },
    {
        id: 4,
        title: "Fix Authentication",
        assignedTo: "Emma Wilson",
        status: "Completed",
    },
];

const getStatus = (status: string) => {
    switch (status) {
        case "Completed":
            return {
                icon: <CheckCircle2 className="text-green-600" size={18} />,
                color: "bg-green-100 text-green-700",
            };

        case "Pending":
            return {
                icon: <AlertCircle className="text-red-600" size={18} />,
                color: "bg-red-100 text-red-700",
            };

        default:
            return {
                icon: <Clock3 className="text-yellow-600" size={18} />,
                color: "bg-yellow-100 text-yellow-700",
            };
    }
};

const RecentTasks = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-bold text-gray-800">
                Recent Tasks
            </h2>

            <div className="space-y-4">
                {recentTasks.map((task) => {
                    const status = getStatus(task.status);

                    return (
                        <div
                            key={task.id}
                            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-gray-50"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    {task.title}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Assigned to: {task.assignedTo}
                                </p>
                            </div>

                            <div
                                className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${status.color}`}
                            >
                                {status.icon}
                                {task.status}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentTasks;
