"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData} from "@/lib/validations/registerSchema";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });


    const onSubmit = async (data: RegisterFormData) => {
        try {
            const formData = new FormData();

            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("password", data.password);

            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0]);
            }

            const result = await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            if (!result.success) {
                alert(result.message);
                return;
            }

            alert("Registration Successful");

            router.push("/login");
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    
    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-center text-3xl font-bold">
                Create Account
            </h1>

            <p className="mt-2 text-center text-gray-500">
                Create your MiniCRM account
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                {/* Name */}
                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border p-3"/>
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border p-3"/>
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
                            placeholder="Enter password"
                            className="w-full rounded-lg border p-3 pr-12"/>

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-4">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                            {...register("confirmPassword")}
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm password"
                            className="w-full rounded-lg border p-3 pr-12"/>

                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-4 top-4">
                            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* Image */}
                <div>
                    <label className="mb-2 block font-medium">
                        Profile Image
                    </label>

                    <input
                        {...register("image")}
                        type="file"
                        className="w-full rounded-lg border p-3"/>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700">
                    Create Account
                </button>
            </form>

            <p className="mt-6 text-center text-gray-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-blue-600">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
