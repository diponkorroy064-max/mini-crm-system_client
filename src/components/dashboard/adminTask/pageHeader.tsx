"use client";

import React from "react";

interface PageHeaderProps {
    onCreate: () => void;
}

const PageHeader = ({ onCreate }: PageHeaderProps) => {
    return (
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Task Management
                </h1>

                <p className="text-sm text-gray-600">
                    Assign, track, and manage customer support activities
                </p>
            </div>

            <button
                onClick={onCreate}
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-green-700"
            >
                <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                    />
                </svg>

                Create Task
            </button>

        </div>
    );
};

export default PageHeader;
