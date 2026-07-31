"use client";

import { useState } from "react";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    UserRound,
} from "lucide-react";

const leads = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "+8801712345678",
        source: "Website",
        assignedTo: "Diponkor Roy",
        status: "New",
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah@gmail.com",
        phone: "+8801812345678",
        source: "Facebook",
        assignedTo: "Rahim",
        status: "Contacted",
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@gmail.com",
        phone: "+8801912345678",
        source: "Referral",
        assignedTo: "Karim",
        status: "Qualified",
    },
];

export default function AdminLeadsPage() {
    const [search, setSearch] = useState("");

    const filteredLeads = leads.filter((lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "New":
                return "bg-blue-100 text-blue-700";
            case "Contacted":
                return "bg-yellow-100 text-yellow-700";
            case "Qualified":
                return "bg-green-100 text-green-700";
            case "Converted":
                return "bg-purple-100 text-purple-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold">
                        Lead Management
                    </h1>

                    <p className="text-gray-500">
                        Manage and assign sales leads.
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    <Plus size={18} />
                    Add Lead
                </button>

            </div>

            {/* Search */}
            <div className="relative max-w-md">

                <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                />

                <input
                    type="text"
                    placeholder="Search lead..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-blue-500"
                />

            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl bg-white shadow">

                <table className="min-w-full">

                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Lead
                            </th>

                            <th className="px-6 py-4 text-left">
                                Source
                            </th>

                            <th className="px-6 py-4 text-left">
                                Assigned To
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredLeads.map((lead) => (

                            <tr
                                key={lead.id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                            <UserRound className="text-blue-600" />
                                        </div>

                                        <div>

                                            <h3 className="font-semibold">
                                                {lead.name}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {lead.email}
                                            </p>

                                            <p className="text-sm text-gray-400">
                                                {lead.phone}
                                            </p>

                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">
                                    {lead.source}
                                </td>

                                <td className="px-6 py-4">
                                    {lead.assignedTo}
                                </td>

                                <td className="px-6 py-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                                            lead.status
                                        )}`}
                                    >
                                        {lead.status}
                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-3">

                                        <button className="rounded-lg bg-yellow-100 p-2 text-yellow-700 hover:bg-yellow-200">
                                            <Pencil size={18} />
                                        </button>

                                        <button className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200">
                                            <Trash2 size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                        {filteredLeads.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="py-10 text-center text-gray-500"
                                >
                                    No leads found.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}
