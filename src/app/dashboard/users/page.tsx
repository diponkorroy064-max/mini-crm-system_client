'use client';

import React, { useState, useEffect } from 'react';

// --- Types ---
interface User {
    id: number;
    name: string;
    email: string;
    role: 'ADMIN' | 'STAFF';
    createdAt: string;
}

export default function UsersPage() {
    // --- States ---
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Selected/Form User State
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'STAFF' as 'ADMIN' | 'STAFF',
    });

    // --- Initial Data Load (Mocked) ---
    useEffect(() => {
        // Replace with your Express API call: GET /api/users
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'Admin User', email: 'admin@bdkrishi.com', role: 'ADMIN', createdAt: '2026-01-15' },
                { id: 2, name: 'John Doe', email: 'john@bdkrishi.com', role: 'STAFF', createdAt: '2026-02-10' },
                { id: 3, name: 'Jane Smith', email: 'jane@bdkrishi.com', role: 'STAFF', createdAt: '2026-03-05' },
            ]);
            setIsLoading(false);
        }, 500);
    }, []);

    // --- Handlers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 1. ADD USER
    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            role: formData.role,
            createdAt: new Date().toISOString().split('T')[0],
        };
        setUsers([newUser, ...users]);
        setIsAddModalOpen(false);
        resetForm();
    };

    // 2. EDIT USER
    const openEditModal = (user: User) => {
        setSelectedUser(user);
        setFormData({ name: user.name, email: user.email, password: '', role: user.role });
        setIsEditModalOpen(true);
    };

    const handleEditUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUser) return;
        setUsers(
            users.map((u) =>
                u.id === selectedUser.id ? { ...u, name: formData.name, email: formData.email, role: formData.role } : u
            )
        );
        setIsEditModalOpen(false);
        resetForm();
    };

    // 3. DELETE USER
    const openDeleteModal = (user: User) => {
        setSelectedUser(user);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteUser = () => {
        if (!selectedUser) return;
        setUsers(users.filter((u) => u.id !== selectedUser.id));
        setIsDeleteModalOpen(false);
        setSelectedUser(null);
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', password: '', role: 'STAFF' });
        setSelectedUser(null);
    };

    // Filtered Users for Search
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header & Add User Button */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="text-sm text-gray-600">Manage admin and staff accounts</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsAddModalOpen(true); }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    Add New User
                </button>
            </div>

            {/* Search Input */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm"
                    />
                </div>
            </div>

            {/* User Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined Date</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">Loading users...</td></tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">No users found.</td></tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-9 w-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mr-3">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                    <div className="text-xs text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.createdAt}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <button onClick={() => openEditModal(user)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                            <button onClick={() => openDeleteModal(user)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ================= ADD USER MODAL ================= */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Add New User</h2>
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" required value={formData.password} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select name="role" value={formData.role} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                    <option value="STAFF">STAFF</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">Create User</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= EDIT USER MODAL ================= */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Edit User</h2>
                        <form onSubmit={handleEditUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select name="role" value={formData.role} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded-lg text-sm">
                                    <option value="STAFF">STAFF</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= DELETE CONFIRMATION MODAL ================= */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-gray-900">Confirm Delete</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Are you sure you want to delete <span className="font-semibold">{selectedUser?.name}</span>? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-2 pt-6">
                            <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Cancel</button>
                            <button type="button" onClick={handleDeleteUser} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
