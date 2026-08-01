"use client";

import { Trash2, X } from "lucide-react";
import { Lead } from "@/types/lead";

interface DeleteLeadModalProps {
    open: boolean;
    lead: Lead | null;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteLeadModal = ({
    open,
    lead,
    onClose,
    onDelete,
}: DeleteLeadModalProps) => {

    if (!open || !lead) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b p-5">

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-red-100 p-2">
                            <Trash2 className="h-5 w-5 text-red-600" />
                        </div>

                        <h2 className="text-xl font-bold">
                            Delete Lead
                        </h2>

                    </div>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Body */}

                <div className="space-y-4 p-6">

                    <p className="text-gray-600">
                        Are you sure you want to delete this lead?
                    </p>

                    <div className="rounded-lg border bg-gray-50 p-4">

                        <p className="font-semibold text-gray-800">
                            {lead.customerName}
                        </p>

                        <p className="text-sm text-gray-500">
                            {lead.email}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            {lead.company || "No Company"}
                        </p>

                    </div>

                    <p className="text-sm text-red-600">
                        This action cannot be undone.
                    </p>

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t p-5">

                    <button
                        onClick={onClose}
                        className="rounded-lg border px-5 py-2 transition hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onDelete}
                        className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
                    >
                        Delete Lead
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DeleteLeadModal;
