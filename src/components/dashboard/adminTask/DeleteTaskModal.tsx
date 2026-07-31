"use client";

import React from "react";
import { Task } from "@/types/task";

interface DeleteTaskModalProps {
    open: boolean;
    task: Task | null;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteTaskModal = ({
    open,
    task,
    onClose,
    onDelete,
}: DeleteTaskModalProps) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-lg">

                <h2 className="text-lg font-bold text-gray-900">
                    Delete Task
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">
                        {task?.title}
                    </span>
                    ?
                </p>

                <div className="flex justify-end space-x-2 pt-6">

                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default DeleteTaskModal;
