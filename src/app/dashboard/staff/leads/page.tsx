import LeadHeader from "@/components/dashboard/leads/LeadHeader";
import LeadStats from "@/components/dashboard/leads/LeadStats";
import LeadTable from "@/components/dashboard/leads/LeadTable";

export default function StaffLeadsPage() {
    return (
        <div className="space-y-8">

            <LeadHeader />

            <LeadStats />

            <LeadTable />

        </div>
    );
}
