"use client";
import { useEffect, useState } from "react";
import { Task } from "@/types/task";

interface TaskFormData {
    title: string;
    description: string;
    assignedToId: number;
    dueDate: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

interface EditTaskModalProps {
    open: boolean;
    task: Task | null;
    onClose: () => void;
    onUpdate: (data: TaskFormData) => void;
}

const EditTaskModal = ({
    open,
    task,
    onClose,
    onUpdate,
}: EditTaskModalProps) => {
    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
        description: "",
        assignedToId: 0,
        dueDate: "",
        priority: "MEDIUM",
        status: "PENDING",
    });

    useEffect(() => {
        if (!open || !task) return;

        setFormData({
            title: task.title ?? "",
            description: task.description ?? "",
            assignedToId: task.assignedToId ?? 0,
            dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
            priority: task.priority,
            status: task.status,
        });

    }, [open, task]);

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                name === "assignedToId"
                    ? Number(value)
                    : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

                <div className="flex items-center justify-between border-b p-5">
                    <h2 className="text-xl font-bold">
                        Edit Task
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-red-500">
                        ×
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-6"
                >
                    {/* Title */}
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Task Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Assigned Staff ID
                            </label>

                            <input
                                type="number"
                                name="assignedToId"
                                value={formData.assignedToId}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Due Date
                            </label>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            >
                                <option value="LOW">LOW</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HIGH">HIGH</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            >
                                <option value="PENDING">Pending</option>
                                <option value="IN_PROGRESS">
                                    In Progress
                                </option>
                                <option value="COMPLETED">
                                    Completed
                                </option>
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
                        >
                            Update Task
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
