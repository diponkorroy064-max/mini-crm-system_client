"use client";

import { Plus } from "lucide-react";

const TaskHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Tasks
                </h1>

                <p className="mt-1 text-gray-500">
                    Manage your daily tasks and deadlines.
                </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                <Plus size={18} />
                Add Task
            </button>
        </div>
    );
};

export default TaskHeader;
