"use client";
import { useState } from "react";
import { useLeads } from "@/hooks/useLeads";
import { Lead, CreateLeadData, UpdateLeadData,} from "@/types/lead";
import {createLead, updateLead, deleteLead,} from "@/services/lead";
import LeadHeader from "@/components/dashboard/adminLead/LeadHeader";
import SearchBar from "@/components/dashboard/adminLead/SearchBar";
import LeadTable from "@/components/dashboard/adminLead/LeadTable";
import CreateLeadModal from "@/components/dashboard/adminLead/CreateLeadModal";
import EditLeadModal from "@/components/dashboard/adminLead/EditLeadModal";
import DeleteLeadModal from "@/components/dashboard/adminLead/DeleteLeadModal";

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

    const filteredLeads = leads.filter((lead) =>
        lead.customerName
            .toLowerCase()
            .includes(search.toLowerCase())
    );

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
        await createLead(data);

        refetch();

        setCreateOpen(false);
    };

    const handleUpdateLead = async (
        data: UpdateLeadData
    ) => {

        if (!selectedLead) return;

        await updateLead(selectedLead.id, data);

        refetch();

        setEditOpen(false);

        setSelectedLead(null);
    };

    const handleDeleteLead = async () => {

        if (!selectedLead) return;

        await deleteLead(selectedLead.id);

        refetch();

        setDeleteOpen(false);

        setSelectedLead(null);
    };

    return (
        <div className="space-y-6 p-6">

            <LeadHeader
                onCreate={() => setCreateOpen(true)}
            />

            {error && (
                <div className="rounded-lg bg-red-100 p-3 text-red-600">
                    {error}
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

