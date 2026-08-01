"use client";

import { useEffect, useState } from "react";
import {
    Lead,
    UpdateLeadData,
    LeadSource,
    LeadStatus,
} from "@/types/lead";

interface EditLeadModalProps {
    open: boolean;
    lead: Lead | null;
    onClose: () => void;
    onUpdate: (data: UpdateLeadData) => void;
}

const sources: LeadSource[] = [
    "WEBSITE",
    "FACEBOOK",
    "INSTAGRAM",
    "LINKEDIN",
    "REFERRAL",
    "PHONE",
    "EMAIL",
    "OTHER",
];

const statuses: LeadStatus[] = [
    "NEW",
    "CONTACTED",
    "QUALIFIED",
    "PROPOSAL_SENT",
    "WON",
    "LOST",
];

const EditLeadModal = ({
    open,
    lead,
    onClose,
    onUpdate,
}: EditLeadModalProps) => {

    const [formData, setFormData] =
        useState<UpdateLeadData>({
            customerName: "",
            email: "",
            phone: "",
            company: "",
            source: "WEBSITE",
            status: "NEW",
            notes: "",
            assignedToId: undefined,
        });

    useEffect(() => {
        if (!open || !lead) return;

        setFormData({
            customerName: lead.customerName,
            email: lead.email,
            phone: lead.phone,
            company: lead.company ?? "",
            source: lead.source,
            status: lead.status,
            notes: lead.notes ?? "",
            assignedToId: lead.assignedToId ?? undefined,
        });

    }, [open, lead]);

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                name === "assignedToId"
                    ? value === ""
                        ? undefined
                        : Number(value)
                    : value,
        }));
    };

    const handleSubmit = (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        onUpdate(formData);

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-3xl rounded-xl bg-white shadow-xl">

                <div className="flex items-center justify-between border-b p-5">

                    <h2 className="text-xl font-bold">
                        Edit Lead
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-red-500"
                    >
                        ×
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-6"
                >

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName ?? ""}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border px-4 py-2"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>

                            <label className="mb-1 block text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email ?? ""}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border px-4 py-2"
                            />

                        </div>

                        <div>

                            <label className="mb-1 block text-sm font-medium">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone ?? ""}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border px-4 py-2"
                            />

                        </div>

                    </div>

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Company
                        </label>

                        <input
                            type="text"
                            name="company"
                            value={formData.company ?? ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>

                            <label className="mb-1 block text-sm font-medium">
                                Source
                            </label>

                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            >
                                {sources.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div>

                            <label className="mb-1 block text-sm font-medium">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2"
                            >
                                {statuses.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>

                        </div>

                    </div>

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Assigned Staff ID
                        </label>

                        <input
                            type="number"
                            name="assignedToId"
                            value={formData.assignedToId ?? ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2"
                        />

                    </div>

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Notes
                        </label>

                        <textarea
                            rows={4}
                            name="notes"
                            value={formData.notes ?? ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2"
                        />

                    </div>

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
                        >
                            Update Lead
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditLeadModal;
