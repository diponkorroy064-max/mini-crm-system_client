"use client";

import { Eye } from "lucide-react";

const customers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "01711111111",
        status: "Active",
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@gmail.com",
        phone: "01822222222",
        status: "Inactive",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@gmail.com",
        phone: "01933333333",
        status: "Active",
    },
    {
        id: 4,
        name: "Emma Wilson",
        email: "emma@gmail.com",
        phone: "01644444444",
        status: "Active",
    },
];

const CustomerTable = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                            Customer
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                            Email
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                            Phone
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <tr
                            key={customer.id}
                            className="border-t transition hover:bg-gray-50"
                        >
                            {/* Customer */}
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                        {customer.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {customer.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Customer ID #{customer.id}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            {/* Email */}
                            <td className="px-6 py-4 text-gray-600">
                                {customer.email}
                            </td>

                            {/* Phone */}
                            <td className="px-6 py-4 text-gray-600">
                                {customer.phone}
                            </td>

                            {/* Status */}
                            <td className="px-6 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${customer.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {customer.status}
                                </span>
                            </td>

                            {/* Action */}
                            <td className="px-6 py-4 text-center">
                                <button className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-100 hover:text-blue-700">
                                    <Eye size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
