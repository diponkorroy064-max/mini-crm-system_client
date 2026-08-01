import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    color: string;
}

const DashboardCard = ({
    title,
    value,
    icon: Icon,
    color,
}: DashboardCardProps) => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-gray-800">
                        {value}
                    </h2>
                </div>

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${color}`}
                >
                    <Icon className="text-white" size={28} />
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;
