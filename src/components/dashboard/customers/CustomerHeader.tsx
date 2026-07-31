"use client";

import { Users } from "lucide-react";

const CustomerHeader = () => {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Users className="h-7 w-7 text-blue-600" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Customers
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        View and manage the customers assigned to you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerHeader;
