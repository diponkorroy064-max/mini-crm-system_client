"use client";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Lead } from "@/types/lead";

interface LeadTableProps {
    leads: Lead[];
    loading: boolean;
    onEdit: (lead: Lead) => void;
    onDelete: (lead: Lead) => void;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case "NEW":
            return "bg-blue-100 text-blue-700";

        case "CONTACTED":
            return "bg-yellow-100 text-yellow-700";

        case "QUALIFIED":
            return "bg-green-100 text-green-700";

        case "LOST":
            return "bg-red-100 text-red-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
};

const LeadTable = ({
    leads,
    loading,
    onEdit,
    onDelete,
}: LeadTableProps) => {
    if (loading) {
        return (
            <div className="rounded-xl bg-white p-8 text-center shadow">
                Loading leads...
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>
                            <th className="px-6 py-4 text-left">Customer</th>
                            <th className="px-6 py-4 text-left">Email</th>
                            <th className="px-6 py-4 text-left">Phone</th>
                            <th className="px-6 py-4 text-left">Company</th>
                            <th className="px-6 py-4 text-left">Source</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-left">Assigned</th>
                            <th className="px-6 py-4 text-left">Created</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {leads.length === 0 && (
                            <tr>
                                <td
                                    colSpan={9}
                                    className="py-10 text-center text-gray-500"
                                >
                                    No leads found.
                                </td>
                            </tr>
                        )}

                        {leads.map((lead) => (
                            <tr
                                key={lead.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {lead.customerName}
                                </td>

                                <td className="px-6 py-4">
                                    {lead.email}
                                </td>

                                <td className="px-6 py-4">
                                    {lead.phone}
                                </td>

                                <td className="px-6 py-4">
                                    {lead.company}
                                </td>

                                <td className="px-6 py-4">
                                    {lead.source}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                                            lead.status
                                        )}`}
                                    >
                                        {lead.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    {lead.assignedTo?.name ?? "-"}
                                </td>

                                <td className="px-6 py-4">
                                    {new Date(
                                        lead.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">

                                        <button
                                            className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() => onEdit(lead)}
                                            className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-200"
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        <button
                                            onClick={() => onDelete(lead)}
                                            className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default LeadTable;
