import {
    CreateLeadData,
    UpdateLeadData,
} from "@/types/lead";

const url = process.env.NEXT_PUBLIC_SERVER_URL;
const API_URL = `${url}/api/leads`;

const getHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};


// Create Lead
export const createLead = async (
    leadData: CreateLeadData
) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(leadData),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to create lead");
    }

    return data;
};


// Get All Leads
export const getLeads = async () => {
    const res = await fetch(API_URL, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch leads");
    }

    return data;
};


// Get One Lead
export const getLead = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch lead");
    }

    return data;
};


// Update Lead
export const updateLead = async (
    id: number,
    leadData: UpdateLeadData
) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(leadData),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to update lead");
    }

    return data;
};


// Delete Lead
export const deleteLead = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to delete lead");
    }

    return data;
};
