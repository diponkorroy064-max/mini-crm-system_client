import Link from "next/link";
import {
   
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { DiGithub } from "react-icons/di";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            MiniCRM
                        </h2>

                        <p className="mt-4 leading-7 text-slate-400">
                            A modern CRM platform to manage users,
                            organize tasks, and improve team productivity.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <DiGithub size={20} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/login" className="hover:text-blue-400">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link href="/register" className="hover:text-blue-400">
                                    Register
                                </Link>
                            </li>

                            <li>
                                <Link href="/dashboard" className="hover:text-blue-400">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Features
                        </h3>

                        <ul className="space-y-3">
                            <li>User Management</li>
                            <li>Task Management</li>
                            <li>Dashboard Analytics</li>
                            <li>Secure Authentication</li>
                            <li>Role-Based Access</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <span>support@minicrm.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>+880 1234-567890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 border-t border-slate-700 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} MiniCRM. All Rights Reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-blue-400">
                                Privacy Policy
                            </Link>

                            <Link href="#" className="hover:text-blue-400">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
