"use client";

import { useState } from "react";

type Priority = "HIGH" | "MEDIUM" | "LOW";
type Status = "PENDING" | "IN_PROGRESS" | "COMPLETED";

interface CreateTaskModalProps {
    open: boolean;
    onClose: () => void;
    onCreate: (data: {
        title: string;
        description: string;
        assignedToId: number;
        dueDate: string;
        priority: Priority;
        status: Status;
    }) => Promise<void> | void;
}

export default function CreateTaskModal({
    open,
    onClose,
    onCreate,
}: CreateTaskModalProps) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        assignedToId: "",
        dueDate: "",
        priority: "MEDIUM" as Priority,
        status: "PENDING" as Status,
    });

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await onCreate({
            title: formData.title,
            description: formData.description,
            assignedToId: Number(formData.assignedToId),
            dueDate: formData.dueDate,
            priority: formData.priority,
            status: formData.status,
        });

        setFormData({
            title: "",
            description: "",
            assignedToId: "",
            dueDate: "",
            priority: "MEDIUM",
            status: "PENDING",
        });

        onClose();
    };

    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl">
                <h2 className="mb-5 text-2xl font-bold">
                    Create New Task
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Task Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full rounded-lg border p-2"
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
                            className="w-full rounded-lg border p-2"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Staff ID */}
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Assign Staff ID
                            </label>

                            <input
                                type="number"
                                name="assignedToId"
                                required
                                value={formData.assignedToId}
                                onChange={handleChange}
                                className="w-full rounded-lg border p-2"
                                placeholder="Enter Staff ID"
                            />
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Due Date
                            </label>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full rounded-lg border p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Priority */}
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full rounded-lg border p-2"
                            >
                                <option value="HIGH">HIGH</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="LOW">LOW</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-lg border p-2"
                            >
                                <option value="PENDING">PENDING</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg bg-gray-300 px-4 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
