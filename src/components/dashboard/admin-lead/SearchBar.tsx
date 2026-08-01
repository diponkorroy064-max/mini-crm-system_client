"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
    search,
    setSearch,
}: SearchBarProps) => {
    return (
        <div className="mb-6">
            <div className="relative">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search leads by customer name, email or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

            </div>
        </div>
    );
};

export default SearchBar;
