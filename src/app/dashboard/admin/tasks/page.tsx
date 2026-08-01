"use client";
import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import { Task } from "@/types/task";
import SearchBar from "@/components/dashboard/admin-task/SearchBar";
import TaskTable from "@/components/dashboard/admin-task/TaskTable";
import CreateTaskModal from "@/components/dashboard/admin-task/CreateTaskModal";
import EditTaskModal from "@/components/dashboard/admin-task/EditTaskModal";
import DeleteTaskModal from "@/components/dashboard/admin-task/DeleteTaskModal";
import { createTask, deleteTask, updateTask } from "@/services/task";


type TaskFormData = {
    title: string;
    description: string;
    assignedToId: number;
    dueDate: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
};


export default function TasksPage() {
    const { tasks, loading, error, refetch} = useTasks();
    const [search, setSearch] = useState("");
    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    // Open Edit Modal
    const openEditModal = (task: Task) => {
        setSelectedTask(task);
        setEditOpen(true);
    };

    // Open Delete Modal
    const openDeleteModal = (task: Task) => {
        setSelectedTask(task);
        setDeleteOpen(true);
    };

    // Create Task
    const handleCreateTask = async (data: TaskFormData) => {
        console.log(data);
        await createTask(data);
        refetch();
    };

    // Update Task
    const handleUpdateTask = async (data: TaskFormData) => {
        if (!selectedTask) return;
        console.log(selectedTask.id, data);
        await updateTask(selectedTask.id, data);
        refetch();
        setEditOpen(false);
    };

    // Delete Task
    const handleDeleteTask = async () => {
        if (!selectedTask) return;
        console.log(selectedTask.id);
        await deleteTask(selectedTask.id);
        refetch();
        setDeleteOpen(false);
        setSelectedTask(null);
    };

    // Search Filter
    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Task Management
                    </h1>

                    <p className="text-gray-500">
                        Manage all daily tasks
                    </p>
                </div>

                <button
                    onClick={() => setCreateOpen(true)}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                    + Create Task
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
                    {error}
                </div>
            )}

            {/* Search */}
            <SearchBar
                search={search}
                setSearch={setSearch}/>

            {/* Table */}
            <TaskTable
                tasks={filteredTasks}
                loading={loading}
                onEdit={openEditModal}
                onDelete={openDeleteModal}/>

            {/* Create */}
            <CreateTaskModal
                open={createOpen}
                onClose={() => setCreateOpen(false)}
                onCreate={handleCreateTask}/>

            {/* Edit */}
            <EditTaskModal
                open={editOpen}
                task={selectedTask}
                onClose={() => setEditOpen(false)}
                onUpdate={handleUpdateTask}/>

            {/* Delete */}
            <DeleteTaskModal
                open={deleteOpen}
                task={selectedTask}
                onClose={() => setDeleteOpen(false)}
                onDelete={handleDeleteTask}/>
        </div>
    );
}
