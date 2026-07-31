"use client";

import { Eye, Pencil, ArrowRightCircle } from "lucide-react";

const leads = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "01711111111",
        source: "Website",
        status: "New",
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@gmail.com",
        phone: "01822222222",
        source: "Facebook",
        status: "Contacted",
    },
];

const LeadTable = () => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
            <table className="w-full">

                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Phone</th>
                        <th className="px-6 py-4 text-left">Source</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead) => (
                        <tr
                            key={lead.id}
                            className="border-t"
                        >
                            <td className="px-6 py-4">{lead.name}</td>

                            <td className="px-6 py-4">{lead.email}</td>

                            <td className="px-6 py-4">{lead.phone}</td>

                            <td className="px-6 py-4">{lead.source}</td>

                            <td className="px-6 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm
                                    ${lead.status === "New"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {lead.status}
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex justify-center gap-3">

                                    <button className="text-blue-600">
                                        <Eye size={18} />
                                    </button>

                                    <button className="text-green-600">
                                        <Pencil size={18} />
                                    </button>

                                    <button className="text-purple-600">
                                        <ArrowRightCircle size={18} />
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default LeadTable;
