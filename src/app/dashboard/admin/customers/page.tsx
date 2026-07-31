"use client";

import { useState } from "react";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    UserRound,
} from "lucide-react";

const customers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "+8801712345678",
        company: "ABC Ltd",
        status: "Active",
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah@gmail.com",
        phone: "+8801812345678",
        company: "XYZ Corporation",
        status: "Inactive",
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@gmail.com",
        phone: "+8801912345678",
        company: "TechSoft",
        status: "Active",
    },
];

export default function AdminCustomersPage() {
    const [search, setSearch] = useState("");

    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Customer Management
                    </h1>

                    <p className="text-gray-500">
                        Manage all CRM customers
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    <Plus size={18} />
                    Add Customer
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
                    placeholder="Search customer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl bg-white shadow">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left">Customer</th>
                            <th className="px-6 py-4 text-left">Company</th>
                            <th className="px-6 py-4 text-left">Phone</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCustomers.map((customer) => (
                            <tr
                                key={customer.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                            <UserRound className="text-blue-600" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {customer.name}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {customer.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    {customer.company}
                                </td>

                                <td className="px-6 py-4">
                                    {customer.phone}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${customer.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {customer.status}
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

                        {filteredCustomers.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="py-10 text-center text-gray-500"
                                >
                                    No customers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
