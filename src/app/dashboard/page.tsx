// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// // --- TypeScript Interfaces ---
// interface DashboardStats {
//     totalUsers: number;
//     totalTasks: number;
//     pendingTasks: number;
//     completedTasks: number;
// }

// interface Task {
//     id: number;
//     title: string;
//     assignedTo: string;
//     priority: 'HIGH' | 'MEDIUM' | 'LOW';
//     status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
//     dueDate: string;
// }

// export default function DashboardPage() {
//     // --- State Management ---
//     const [stats, setStats] = useState<DashboardStats>({
//         totalUsers: 0,
//         totalTasks: 0,
//         pendingTasks: 0,
//         completedTasks: 0,
//     });
//     const [recentTasks, setRecentTasks] = useState<Task[]>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     // --- Fetch Data (Mocked for UI visualization) ---
//     useEffect(() => {
//         // Replace this with your actual Axios/Fetch API calls to your Express backend
//         const fetchDashboardData = async () => {
//             try {
//                 // Example: const res = await fetch('/api/dashboard/stats', { headers: { Authorization: `Bearer ${token}` } });

//                 // Mocking API Response
//                 setTimeout(() => {
//                     setStats({
//                         totalUsers: 24,
//                         totalTasks: 156,
//                         pendingTasks: 42,
//                         completedTasks: 89,
//                     });

//                     setRecentTasks([
//                         { id: 1, title: 'Fix API Authentication Bug', assignedTo: 'John Doe', priority: 'HIGH', status: 'IN_PROGRESS', dueDate: '2026-08-01' },
//                         { id: 2, title: 'Design Landing Page', assignedTo: 'Jane Smith', priority: 'MEDIUM', status: 'COMPLETED', dueDate: '2026-07-28' },
//                         { id: 3, title: 'Database Migration', assignedTo: 'Alex Johnson', priority: 'HIGH', status: 'PENDING', dueDate: '2026-08-05' },
//                         { id: 4, title: 'Update User Documentation', assignedTo: 'Sarah Lee', priority: 'LOW', status: 'PENDING', dueDate: '2026-08-10' },
//                     ]);
//                     setIsLoading(false);
//                 }, 1000);
//             } catch (error) {
//                 console.error('Failed to fetch dashboard data', error);
//             }
//         };

//         fetchDashboardData();
//     }, []);

//     // --- Helper function for styling badges ---
//     const getStatusColor = (status: string) => {
//         switch (status) {
//             case 'COMPLETED': return 'bg-green-100 text-green-800';
//             case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800';
//             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
//             default: return 'bg-gray-100 text-gray-800';
//         }
//     };

//     const getPriorityColor = (priority: string) => {
//         switch (priority) {
//             case 'HIGH': return 'text-red-600 bg-red-50';
//             case 'MEDIUM': return 'text-orange-600 bg-orange-50';
//             case 'LOW': return 'text-green-600 bg-green-50';
//             default: return 'text-gray-600 bg-gray-50';
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-50 font-sans">

//             {/* ================= SIDEBAR ================= */}
//             <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
//                 <div className="h-16 flex items-center justify-center border-b border-gray-200">
//                     <h1 className="text-xl font-bold text-green-600">BDKRISHI CRM</h1>
//                 </div>
//                 <nav className="flex-1 overflow-y-auto py-4">
//                     <ul className="space-y-1 px-3">
//                         <li>
//                             <Link href="/dashboard" className="flex items-center px-3 py-2.5 bg-green-50 text-green-700 rounded-lg font-medium">
//                                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
//                                 Dashboard
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/tasks" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
//                                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
//                                 Tasks
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/users" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
//                                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
//                                 Users
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <div className="p-4 border-t border-gray-200">
//                     <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors w-full px-2 py-2">
//                         <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
//                         
//                     </button>
//                 </div>
//             </aside>

//             {/* ================= MAIN CONTENT AREA ================= */}
//             <div className="flex-1 flex flex-col overflow-hidden">

//                 {/* === TOP NAVBAR === */}
//                 <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
//                     {/* Mobile Menu Button & Search */}
//                     <div className="flex items-center flex-1">
//                         <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none p-2 mr-2">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
//                         </button>
//                         <div className="relative w-full max-w-md hidden sm:block">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
//                             </div>
//                             <input type="text" placeholder="Search tasks..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-colors" />
//                         </div>
//                     </div>

//                     {/* User Profile */}
//                     <div className="flex items-center space-x-4">
//                         <button className="text-gray-400 hover:text-gray-500 relative">
//                             <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
//                             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//                         </button>
//                         <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shadow-sm">
//                             AD
//                         </div>
//                     </div>
//                 </header>

//                 {/* === MAIN DASHBOARD CONTENT === */}
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
//                     <div className="mb-6">
//                         <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
//                         <p className="text-sm text-gray-600">Welcome back! Here is what's happening today.</p>
//                     </div>

//                     {/* === 1. CARDS SECTION === */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                         {/* Total Users Card */}
//                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
//                             <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm font-medium text-gray-500">Total Users</p>
//                                 <p className="text-2xl font-bold text-gray-900">{isLoading ? '...' : stats.totalUsers}</p>
//                             </div>
//                         </div>

//                         {/* Total Tasks Card */}
//                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
//                             <div className="p-3 rounded-lg bg-purple-50 text-purple-600 mr-4">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm font-medium text-gray-500">Total Tasks</p>
//                                 <p className="text-2xl font-bold text-gray-900">{isLoading ? '...' : stats.totalTasks}</p>
//                             </div>
//                         </div>

//                         {/* Pending Tasks Card */}
//                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
//                             <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600 mr-4">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
//                                 <p className="text-2xl font-bold text-gray-900">{isLoading ? '...' : stats.pendingTasks}</p>
//                             </div>
//                         </div>

//                         {/* Completed Tasks Card */}
//                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
//                             <div className="p-3 rounded-lg bg-green-50 text-green-600 mr-4">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm font-medium text-gray-500">Completed Tasks</p>
//                                 <p className="text-2xl font-bold text-gray-900">{isLoading ? '...' : stats.completedTasks}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                         {/* === 2. RECENT TASKS TABLE (Takes up 2/3 of space on large screens) === */}
//                         <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//                             <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
//                                 <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
//                                 <Link href="/tasks" className="text-sm font-medium text-green-600 hover:text-green-700">View All</Link>
//                             </div>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-50">
//                                         <tr>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                         {isLoading ? (
//                                             <tr><td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">Loading tasks...</td></tr>
//                                         ) : (
//                                             recentTasks.map((task) => (
//                                                 <tr key={task.id} className="hover:bg-gray-50 transition-colors">
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <div className="text-sm font-medium text-gray-900">{task.title}</div>
//                                                         <div className="text-xs text-gray-500">Due: {task.dueDate}</div>
//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                                         {task.assignedTo}
//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
//                                                             {task.priority}
//                                                         </span>
//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(task.status)}`}>
//                                                             {task.status.replace('_', ' ')}
//                                                         </span>
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                         )}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>

//                         {/* === 3. STATISTICS PANEL === */}
//                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//                             <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Statistics</h3>

//                             <div className="space-y-6">
//                                 {/* Progress Bar 1 */}
//                                 <div>
//                                     <div className="flex justify-between text-sm font-medium mb-1">
//                                         <span className="text-gray-600">Completion Rate</span>
//                                         <span className="text-green-600">
//                                             {stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0}%
//                                         </span>
//                                     </div>
//                                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                                         <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${stats.totalTasks > 0 ? (stats.completedTasks / stats.totalTasks) * 100 : 0}%` }}></div>
//                                     </div>
//                                 </div>

//                                 {/* Progress Bar 2 */}
//                                 <div>
//                                     <div className="flex justify-between text-sm font-medium mb-1">
//                                         <span className="text-gray-600">Pending Workload</span>
//                                         <span className="text-yellow-600">
//                                             {stats.totalTasks > 0 ? Math.round((stats.pendingTasks / stats.totalTasks) * 100) : 0}%
//                                         </span>
//                                     </div>
//                                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                                         <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${stats.totalTasks > 0 ? (stats.pendingTasks / stats.totalTasks) * 100 : 0}%` }}></div>
//                                     </div>
//                                 </div>

//                                 <div className="mt-8 pt-6 border-t border-gray-100">
//                                     <p className="text-sm text-gray-500 text-center">
//                                         Data updates in real-time based on your team's activity.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }



"use client";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Chart from "@/components/dashboard/Chart";
import RecentTasks from "@/components/dashboard/RecentTasks";
import TaskTable from "@/components/dashboard/TaskTable";
import {
    Users,
    ClipboardList,
    Clock3,
    CheckCircle,
} from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import { getProfile } from "@/services/user";



export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/login");
        }

        const fetchProfile = async () => {
            const data = await getProfile();
            console.log(data);
        };

        fetchProfile();
    }, [router]);


    return (
        <div className="space-y-8">

            {/* Dashboard Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <DashboardCard
                    title="Total Users"
                    value={120}
                    icon={Users}
                    color="bg-blue-600"
                />

                <DashboardCard
                    title="Total Tasks"
                    value={340}
                    icon={ClipboardList}
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Pending Tasks"
                    value={18}
                    icon={Clock3}
                    color="bg-yellow-500"
                />

                <DashboardCard
                    title="Completed Tasks"
                    value={322}
                    icon={CheckCircle}
                    color="bg-purple-600"
                />
            </div>

            {/* Chart & Recent Tasks */}
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Chart />
                </div>

                <RecentTasks />
            </div>

            {/* Task Table */}
            <TaskTable />

        </div>
    );
}
