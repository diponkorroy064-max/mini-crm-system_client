import {
    LayoutDashboard,
    Users,
    ChartColumn,
    UserRound,
    BadgeCheck,
    ClipboardList,
} from "lucide-react";
import { ImProfile } from "react-icons/im";


export const adminLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        href: "/dashboard/admin/users",
        icon: Users,
    },
    {
        title: "Analytics",
        href: "/dashboard/admin/analytics",
        icon: ChartColumn,
    },
    {
        title: "Customers",
        href: "/dashboard/admin/customers",
        icon: UserRound,
    },
    {
        title: "Leads",
        href: "/dashboard/admin/leads",
        icon: BadgeCheck,
    },
    {
        title: "Tasks",
        href: "/dashboard/admin/tasks",
        icon: ClipboardList,
    },
    {
        title: "Profile",
        href: "/dashboard/admin/profile",
        icon: ImProfile,
    },
];



export const staffLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/staff",
        icon: LayoutDashboard,
    },
    {
        title: "Customers",
        href: "/dashboard/staff/customers",
        icon: UserRound,
    },
    {
        title: "Leads",
        href: "/dashboard/staff/leads",
        icon: BadgeCheck,
    },
    {
        title: "Tasks",
        href: "/dashboard/staff/tasks",
        icon: ClipboardList,
    },
];
