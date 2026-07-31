import {
    CheckCircle2,
    ShieldCheck,
    Clock3,
    Users,
} from "lucide-react";

const reasons = [
    {
        id: 1,
        title: "Easy to Use",
        description:
            "A clean and intuitive interface that allows anyone to manage users and tasks without a learning curve.",
        icon: CheckCircle2,
    },
    {
        id: 2,
        title: "Secure System",
        description:
            "Your data is protected with JWT authentication, encrypted passwords, and role-based access control.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Save Time",
        description:
            "Assign tasks, monitor progress, and organize your team's workflow efficiently from one dashboard.",
        icon: Clock3,
    },
    {
        id: 4,
        title: "Team Collaboration",
        description:
            "Keep your entire team connected with centralized task management and user administration.",
        icon: Users,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                        Built to Make Team Management Simple
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        MiniCRM combines simplicity, security, and productivity to help
                        businesses manage employees and tasks efficiently.
                    </p>

                </div>

                {/* Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="space-y-8">

                        {reasons.map((reason) => {
                            const Icon = reason.icon;

                            return (
                                <div
                                    key={reason.id}
                                    className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                                        <Icon className="text-blue-600" size={28} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {reason.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-gray-600">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    {/* Right Side */}
                    <div className="rounded-3xl bg-blue-600 p-10 text-white shadow-xl">

                        <h3 className="text-3xl font-bold">
                            Boost Your Business Productivity
                        </h3>

                        <p className="mt-5 leading-8 text-blue-100">
                            Manage employees, assign tasks, monitor progress,
                            and improve collaboration with a secure and modern CRM platform.
                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-3">
                                <CheckCircle2 />
                                <span>Role-Based User Management</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 />
                                <span>Task Assignment & Tracking</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 />
                                <span>Responsive Dashboard</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 />
                                <span>Secure Authentication</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 />
                                <span>Fast & Modern User Experience</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
