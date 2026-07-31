import {
    Users,
    ClipboardList,
    ShieldCheck,
    BarChart3,
} from "lucide-react";

const features = [
    {
        id: 1,
        title: "User Management",
        description:
            "Create, update, and manage staff accounts with secure role-based access control.",
        icon: Users,
    },
    {
        id: 2,
        title: "Task Management",
        description:
            "Create tasks, assign them to employees, track progress, and update task status easily.",
        icon: ClipboardList,
    },
    {
        id: 3,
        title: "Secure Authentication",
        description:
            "Protect user accounts with JWT authentication and encrypted passwords.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Dashboard Analytics",
        description:
            "View task statistics, monitor productivity, and make better business decisions.",
        icon: BarChart3,
    },
];

const Features = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <h2 className="text-4xl font-bold text-gray-900">
                        Powerful Features
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Everything you need to manage your team,
                        organize tasks, and improve productivity.
                    </p>

                </div>

                {/* Feature Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 inline-flex rounded-full bg-blue-100 p-4">
                                    <Icon
                                        className="text-blue-600"
                                        size={32}
                                    />
                                </div>

                                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Features;
