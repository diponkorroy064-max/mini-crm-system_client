"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, ClipboardList, User, LogOut} from "lucide-react";
import { logout } from "@/services/auth";


const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: Users,
    },
    {
        title: "Tasks",
        href: "/dashboard/tasks",
        icon: ClipboardList,
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
    },
];


const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
    };

    
    return (
        <aside className="sticky top-0 flex h-screen w-64 flex-col border-r bg-white shadow-md">
            {/* Logo */}
            <div className="border-b p-6">
                <h1 className="text-2xl font-bold text-blue-600">
                    MiniCRM
                </h1>
            </div>

            
            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-3">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const isActive = pathname === item.href;

                        return (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${isActive
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        }`}>
                                    <Icon size={20} />

                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            
            {/* Logout */}
            <div className="border-t p-4">
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50 cursor-pointer"
                    onClick={handleLogout}>
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
