"use client";

import { Plus } from "lucide-react";

const LeadHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Leads
                </h1>

                <p className="mt-1 text-gray-500">
                    Track and manage your assigned sales leads.
                </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                <Plus size={18} />

                Add Lead
            </button>
        </div>
    );
};

export default LeadHeader;
