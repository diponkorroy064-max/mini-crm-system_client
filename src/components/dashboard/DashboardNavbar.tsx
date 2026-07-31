"use client";
import { Bell, Moon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getUser, User } from "@/utils/auth";
import Image from "next/image";


const DashboardNavbar = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(getUser());
    }, []);


    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-6 shadow-sm">

            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Welcome back, {user?.name || "User"} 👋
                </p>
            </div>

            {/* Right */}
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

                {/* Dark Mode */}
                <button className="rounded-full bg-gray-100 p-3 transition hover:bg-blue-100">
                    <Moon size={20} />
                </button>

                {/* User */}
                <div className="flex items-center gap-3">

                    <Image width={100} height={100}
                        src={
                            user?.image ||
                            "https://ui-avatars.com/api/?name=" +
                            encodeURIComponent(user?.name || "User")
                        }
                        alt={user?.name || "User Avatar"}
                        className="h-11 w-11 rounded-full object-cover"
                    />

                    <div className="hidden md:block">
                        <h3 className="font-semibold text-gray-800">
                            {user?.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {user?.role === "ADMIN"
                                ? "Administrator"
                                : "Staff Member"}
                        </p>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default DashboardNavbar;
