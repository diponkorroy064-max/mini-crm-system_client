"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MiniCRM
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/login" className="hover:text-blue-600">
                        Login
                    </Link>

                    <Link href="/register" className="hover:text-blue-600">
                        Register
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="space-y-4 border-t bg-white px-6 py-5 md:hidden">
                    <Link href="/" className="block">
                        Home
                    </Link>

                    <Link href="/login" className="block">
                        Login
                    </Link>

                    <Link href="/register" className="block">
                        Register
                    </Link>

                    <Link
                        href="/register"
                        className="block rounded-lg bg-blue-600 py-2 text-center text-white">
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
