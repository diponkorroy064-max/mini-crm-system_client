import CustomerHeader from "@/components/dashboard/customers/CustomerHeader";
import CustomerStats from "@/components/dashboard/customers/CustomerStats";
import CustomerTable from "@/components/dashboard/customers/CustomerTable";



export default function StaffCustomersPage() {
    return (
        <div className="space-y-8">
            <CustomerHeader />
            <CustomerStats/>
            <CustomerTable />
        </div>
    );
}
