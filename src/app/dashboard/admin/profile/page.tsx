'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// --- Types ---
interface UserProfile {
    name: string;
    email: string;
    role: 'ADMIN' | 'STAFF';
    avatarUrl: string;
}

export default function ProfilePage() {
    // --- States ---
    const [profile, setProfile] = useState<UserProfile>({
        name: 'Admin User',
        email: 'admin@bdkrishi.com',
        role: 'ADMIN',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    });

    const [formData, setFormData] = useState({
        name: profile.name,
        email: profile.email,
    });

    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isSaved, setIsSaved] = useState(false);

    // Handle Form Inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Image Selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Save / Update Profile
    const handleUpdateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        setProfile((prev) => ({
            ...prev,
            name: formData.name,
            email: formData.email,
            avatarUrl: previewImage || prev.avatarUrl,
        }));

        // Trigger Success Feedback
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-sm text-gray-600">View and update your personal profile information</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* Success Alert */}
                {isSaved && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center text-sm">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Profile updated successfully!
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Cover & Profile Header Header */}
                    <div className="h-32 bg-linear-to-r from-green-600 to-emerald-700"></div>

                    <div className="px-6 pb-6 relative">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-12 mb-6 gap-4">

                            {/* Profile Image & Role Badge */}
                            <div className="relative group w-28 h-28">
                                <Image width={10} height={10}
                                    src={previewImage || profile.avatarUrl}
                                    alt={profile.name}
                                    className="w-28 h-28 rounded-full border-4 border-white object-cover bg-white shadow-md"
                                />
                                <label className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                </label>
                            </div>

                            {/* Role Display */}
                            <div>
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${profile.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {profile.role} ROLE
                                </span>
                            </div>
                        </div>

                        {/* Profile Update Form */}
                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm"
                                    />
                                </div>

                                {/* User Role (Read-only) */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        value={profile.role}
                                        disabled
                                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-500 rounded-lg text-sm cursor-not-allowed"
                                    />
                                </div>

                                {/* Avatar Upload Field Alternative */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Change Profile Picture
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                                    />
                                </div>

                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end pt-4 border-t border-gray-100">
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm transition-colors shadow-sm"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
}
