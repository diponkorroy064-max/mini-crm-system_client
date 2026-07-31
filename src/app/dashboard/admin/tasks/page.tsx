'use client';

import React, { useState, useEffect } from 'react';

// --- Types ---
type Priority = 'HIGH' | 'MEDIUM' | 'LOW';
type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

interface Task {
    id: number;
    taskName: string;
    description: string;
    assignedTo: string;
    dueDate: string;
    priority: Priority;
    status: Status;
}

export default function TasksPage() {
    // --- States ---
    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Modal States
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Selected Task and Form Data State
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [formData, setFormData] = useState({
        taskName: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        priority: 'MEDIUM' as Priority,
        status: 'PENDING' as Status,
    });

    // --- Initial Data Load (Mocked) ---
    useEffect(() => {
        // Replace with your Express API call: GET /api/tasks
        setTimeout(() => {
            setTasks([
                { id: 1, taskName: 'Fix Login Endpoint', description: 'Fix JWT verification issue', assignedTo: 'John Doe', dueDate: '2026-08-01', priority: 'HIGH', status: 'IN_PROGRESS' },
                { id: 2, taskName: 'Create User Management', description: 'Build CRUD interface for admin', assignedTo: 'Jane Smith', dueDate: '2026-08-03', priority: 'MEDIUM', status: 'COMPLETED' },
                { id: 3, taskName: 'Design Dashboard Cards', description: 'Responsive stats UI', assignedTo: 'Alex Johnson', dueDate: '2026-08-05', priority: 'LOW', status: 'PENDING' },
                { id: 4, taskName: 'Setup MySQL Database', description: 'Run Prisma migrations', assignedTo: 'John Doe', dueDate: '2026-08-02', priority: 'HIGH', status: 'COMPLETED' },
                { id: 5, taskName: 'Export PDF Feature', description: 'Add optional PDF export feature', assignedTo: 'Sarah Lee', dueDate: '2026-08-10', priority: 'LOW', status: 'PENDING' },
                { id: 6, taskName: 'Dark Mode Support', description: 'Add theme toggle capability', assignedTo: 'Jane Smith', dueDate: '2026-08-12', priority: 'MEDIUM', status: 'PENDING' },
            ]);
            setIsLoading(false);
        }, 500);
    }, []);

    // --- Form Handlers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            taskName: '',
            description: '',
            assignedTo: '',
            dueDate: '',
            priority: 'MEDIUM',
            status: 'PENDING',
        });
        setSelectedTask(null);
    };

    // 1. CREATE TASK
    const handleCreateTask = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: Date.now(),
            ...formData,
        };
        setTasks([newTask, ...tasks]);
        setIsCreateModalOpen(false);
        resetForm();
    };

    // 2. EDIT TASK
    const openEditModal = (task: Task) => {
        setSelectedTask(task);
        setFormData({
            taskName: task.taskName,
            description: task.description,
            assignedTo: task.assignedTo,
            dueDate: task.dueDate,
            priority: task.priority,
            status: task.status,
        });
        setIsEditModalOpen(true);
    };

    const handleEditTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTask) return;
        setTasks(
            tasks.map((t) => (t.id === selectedTask.id ? { ...t, ...formData } : t))
        );
        setIsEditModalOpen(false);
        resetForm();
    };

    // 3. DELETE TASK
    const openDeleteModal = (task: Task) => {
        setSelectedTask(task);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteTask = () => {
        if (!selectedTask) return;
        setTasks(tasks.filter((t) => t.id !== selectedTask.id));
        setIsDeleteModalOpen(false);
        setSelectedTask(null);
    };

    // --- Search & Pagination Logic ---
    const filteredTasks = tasks.filter(
        (task) =>
            task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTasks = filteredTasks.slice(startIndex, startIndex + itemsPerPage);

    // Badge Styling Helpers
    const getStatusBadge = (status: Status) => {
        switch (status) {
            case 'COMPLETED': return 'bg-green-100 text-green-800';
            case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800';
            case 'PENDING': return 'bg-yellow-100 text-yellow-800';
        }
    };

    const getPriorityBadge = (priority: Priority) => {
        switch (priority) {
            case 'HIGH': return 'bg-red-50 text-red-700 border-red-200';
            case 'MEDIUM': return 'bg-orange-50 text-orange-700 border-orange-200';
            case 'LOW': return 'bg-green-50 text-green-700 border-green-200';
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
                    <p className="text-sm text-gray-600">Assign, track, and manage customer support activities</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsCreateModalOpen(true); }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    Create Task
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by task name, description, or staff..."
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm"
                    />
                </div>
            </div>

            {/* Task Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading ? (
                                <tr><td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">Loading tasks...</td></tr>
                            ) : paginatedTasks.length === 0 ? (
                                <tr><td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">No tasks found.</td></tr>
                            ) : (
                                paginatedTasks.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-semibold text-gray-900">{task.taskName}</div>
                                            <div className="text-xs text-gray-500 truncate max-w-xs">{task.description}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {task.assignedTo}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {task.dueDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getPriorityBadge(task.priority)}`}>
                                                {task.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusBadge(task.status)}`}>
                                                {task.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                            <button onClick={() => openEditModal(task)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                            <button onClick={() => openDeleteModal(task)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Bar */}
                {totalPages > 1 && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                            <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredTasks.length)}</span> of{' '}
                            <span className="font-medium">{filteredTasks.length}</span> tasks
                        </span>
                        <div className="inline-flex space-x-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
                                className={`px-3 py-1 text-sm rounded-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                            >
                                Previous
                            </button>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                                className={`px-3 py-1 text-sm rounded-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ================= CREATE TASK MODAL ================= */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Create New Task</h2>
                        <form onSubmit={handleCreateTask} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Task Name</label>
                                <input type="text" name="taskName" required value={formData.taskName} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea name="description" rows={3} value={formData.description} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                                    <input type="text" name="assignedTo" required value={formData.assignedTo} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" placeholder="Staff Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                                    <input type="date" name="dueDate" required value={formData.dueDate} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Priority</label>
                                    <select name="priority" value={formData.priority} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                        <option value="HIGH">HIGH</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="LOW">LOW</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select name="status" value={formData.status} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                        <option value="PENDING">PENDING</option>
                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button type="button" onClick={() => setIsCreateModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">Create Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= EDIT TASK MODAL ================= */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Edit Task</h2>
                        <form onSubmit={handleEditTask} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Task Name</label>
                                <input type="text" name="taskName" required value={formData.taskName} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea name="description" rows={3} value={formData.description} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                                    <input type="text" name="assignedTo" required value={formData.assignedTo} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                                    <input type="date" name="dueDate" required value={formData.dueDate} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Priority</label>
                                    <select name="priority" value={formData.priority} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                        <option value="HIGH">HIGH</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="LOW">LOW</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select name="status" value={formData.status} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                        <option value="PENDING">PENDING</option>
                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Update Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= DELETE CONFIRMATION MODAL ================= */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900">Delete Task</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Are you sure you want to delete <span className="font-semibold">{selectedTask?.taskName}</span>?
                        </p>
                        <div className="flex justify-end space-x-2 pt-6">
                            <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                            <button type="button" onClick={handleDeleteTask} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
