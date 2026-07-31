import Link from "next/link";


const Hero = () => {
    return (
        <section className="bg-linear-to-br from-blue-50 via-white to-slate-100">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

                {/* Left Content */}
                <div className="max-w-2xl">
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                        🚀 Smart Business Management
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
                        Manage Your
                        <span className="text-blue-600"> Team & Tasks </span>
                        in One Place
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        MiniCRM helps businesses organize employees,
                        assign tasks, monitor progress, and improve productivity
                        with an easy-to-use dashboard.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/register" className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
                            Get Started
                        </Link>

                        <Link href="/login" className="rounded-xl border border-gray-300 px-7 py-3 font-semibold transition hover:bg-gray-100">
                            Login
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">
                                100+
                            </h2>
                            <p className="text-gray-600">
                                Businesses
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">
                                5K+
                            </h2>
                            <p className="text-gray-600">
                                Tasks Managed
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">
                                99%
                            </h2>
                            <p className="text-gray-600">
                                Satisfaction
                            </p>
                        </div>

                    </div>
                </div>

                
                {/* Right Content */}
                <div className="flex justify-center">
                    <div className="w-95 rounded-3xl border bg-white p-8 shadow-2xl">

                        <h3 className="mb-6 text-xl font-bold">
                            Dashboard Overview
                        </h3>

                        <div className="space-y-5">

                            <div className="rounded-xl bg-blue-50 p-5">
                                <h4 className="text-sm text-gray-500">
                                    Total Users
                                </h4>
                                <p className="mt-2 text-3xl font-bold text-blue-600">
                                    245
                                </p>
                            </div>

                            <div className="rounded-xl bg-green-50 p-5">
                                <h4 className="text-sm text-gray-500">
                                    Completed Tasks
                                </h4>
                                <p className="mt-2 text-3xl font-bold text-green-600">
                                    1,280
                                </p>
                            </div>

                            <div className="rounded-xl bg-yellow-50 p-5">
                                <h4 className="text-sm text-gray-500">
                                    Pending Tasks
                                </h4>
                                <p className="mt-2 text-3xl font-bold text-yellow-500">
                                    36
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
