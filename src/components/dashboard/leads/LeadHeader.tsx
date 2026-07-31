"use client";

const LeadHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    My Leads
                </h1>

                <p className="mt-1 text-gray-500">
                    View and manage the leads assigned to you.
                </p>
            </div>
        </div>
    );
};

export default LeadHeader;
