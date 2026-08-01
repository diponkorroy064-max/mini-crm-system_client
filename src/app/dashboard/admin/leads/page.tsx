"use client";
import { useState } from "react";
import { useLeads } from "@/hooks/useLeads";
import { Lead, CreateLeadData, UpdateLeadData, } from "@/types/lead";
import { createLead, updateLead, deleteLead, } from "@/services/lead";
import LeadHeader from "@/components/dashboard/adminLead/LeadHeader";
import SearchBar from "@/components/dashboard/adminLead/SearchBar";
import LeadTable from "@/components/dashboard/adminLead/LeadTable";
import CreateLeadModal from "@/components/dashboard/adminLead/CreateLeadModal";
import EditLeadModal from "@/components/dashboard/adminLead/EditLeadModal";
import DeleteLeadModal from "@/components/dashboard/adminLead/DeleteLeadModal";
import toast from "react-hot-toast";


const LeadsPage = () => {
    const {
        leads,
        loading,
        error,
        refetch,
    } = useLeads();

    const [search, setSearch] = useState("");

    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedLead, setSelectedLead] =
        useState<Lead | null>(null);

    
    const filteredLeads = leads.filter((lead) => {
        const keyword = search.toLowerCase();

        return (
            lead.customerName.toLowerCase().includes(keyword) ||
            lead.email.toLowerCase().includes(keyword) ||
            lead.phone.toLowerCase().includes(keyword) ||
            (lead.company ?? "")
                .toLowerCase()
                .includes(keyword) ||
            lead.status.toLowerCase().includes(keyword) ||
            lead.source.toLowerCase().includes(keyword)
        );
    });


    const openEditModal = (lead: Lead) => {
        setSelectedLead(lead);
        setEditOpen(true);
    };

    const openDeleteModal = (lead: Lead) => {
        setSelectedLead(lead);
        setDeleteOpen(true);
    };

    const handleCreateLead = async (
        data: CreateLeadData
    ) => {
        try {
            await createLead(data);
            refetch();
            setCreateOpen(false);
            toast.success("Lead created successfully");
        } catch{
            toast.error("Failed to create lead");
        }
    };


    const handleUpdateLead = async (
        data: UpdateLeadData
    ) => {
        if (!selectedLead) return;

        try {
            await updateLead(selectedLead.id, data);
            refetch();
            setEditOpen(false);
            setSelectedLead(null);
            toast.success("Lead updated successfully");
        } catch{
            toast.error("Failed to update lead");
        }
    };


    const handleDeleteLead = async () => {
        if (!selectedLead) return;
        try {
            await deleteLead(selectedLead.id);
            refetch();
            setSelectedLead(null);
            toast.success("Lead deleted successfully");
        } catch {
            toast.error("Failed to delete lead");
        }
        setDeleteOpen(false);
    };


    if (loading) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
            </div>
        );
    }


    return (
        <div className="space-y-6 py-6">

            <LeadHeader
                onCreate={() => setCreateOpen(true)}
            />

            {error && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-600">
                    <h2 className="font-semibold">
                        Failed to load leads
                    </h2>

                    <p>{error}</p>
                </div>
            )}

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <LeadTable
                leads={filteredLeads}
                loading={loading}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
            />

            <CreateLeadModal
                open={createOpen}
                onClose={() => setCreateOpen(false)}
                onCreate={handleCreateLead}
            />

            <EditLeadModal
                open={editOpen}
                lead={selectedLead}
                onClose={() => setEditOpen(false)}
                onUpdate={handleUpdateLead}
            />

            <DeleteLeadModal
                open={deleteOpen}
                lead={selectedLead}
                onClose={() => setDeleteOpen(false)}
                onDelete={handleDeleteLead}
            />

        </div>
    );
};

export default LeadsPage;

