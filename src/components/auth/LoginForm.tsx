"use client";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData} from "@/lib/validations/loginSchema";
import { loginUser } from "@/services/auth";


const LoginForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await loginUser(data);

            if (!result.success) {
                alert(result.message);
                return;
            }

            localStorage.setItem("token", result.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(result.data.user)
            );
            const role = result?.data?.user?.role;
            console.log("role from login form", role);

            alert("Login Successful");
            console.log("Login Success");

            // router.push("/");
            if (role === "ADMIN") {
                router.push("/dashboard/admin");
            } else {
                router.push("/dashboard/staff");
            }
        }
        catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };


    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-center text-3xl font-bold">
                Welcome Back
            </h1>

            <p className="mt-2 text-center text-gray-500">
                Login to your Mini CRM account
            </p>

            <form onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5">
                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"/>

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <div className="relative">
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border p-3 pr-12 outline-none focus:border-blue-500"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-4"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>

            <p className="mt-6 text-center text-gray-500">
                Don't have an account?{" "}
                <Link
                    href="/register"
                    className="font-semibold text-blue-600"
                >
                    Register
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
