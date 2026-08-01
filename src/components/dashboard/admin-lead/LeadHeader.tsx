"use client";

import { Plus } from "lucide-react";

interface LeadHeaderProps {
    onCreate: () => void;
}

const LeadHeader = ({ onCreate }: LeadHeaderProps) => {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                    Lead Management
                </h1>

                <p className="mt-1 text-gray-500">
                    Track, assign and manage all sales leads from one dashboard.
                </p>
            </div>

            <button
                onClick={onCreate}
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-green-700"
            >
                <Plus size={18} />
                Create Lead
            </button>

        </div>
    );
};

export default LeadHeader;
