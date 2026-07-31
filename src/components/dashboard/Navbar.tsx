"use client";

import { Bell, Moon, Search } from "lucide-react";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-6 shadow-sm">

            {/* Left Side */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Welcome back! 👋
                </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

                {/* Search */}
                <div className="relative hidden md:block">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Notification */}
                <button className="relative rounded-full bg-gray-100 p-3 transition hover:bg-blue-100">
                    <Bell size={20} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Dark Mode Button */}
                <button className="rounded-full bg-gray-100 p-3 transition hover:bg-blue-100">
                    <Moon size={20} />
                </button>

                {/* User */}
                <div className="flex items-center gap-3">

                    <img
                        src="https://i.pravatar.cc/100"
                        alt="User"
                        className="h-11 w-11 rounded-full object-cover"
                    />

                    <div className="hidden md:block">
                        <h3 className="font-semibold text-gray-800">
                            Diponkor Roy
                        </h3>

                        <p className="text-sm text-gray-500">
                            Administrator
                        </p>
                    </div>

                </div>

            </div>

        </header>
    );
};

export default Navbar;
