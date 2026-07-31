import TaskHeader from "@/components/dashboard/tasks/TaskHeader";
import TaskStats from "@/components/dashboard/tasks/TaskStats";
import TaskTable from "@/components/dashboard/tasks/TaskTable";


export default function StaffTasksPage() {
    return (
        <div className="space-y-8">

            <TaskHeader />

            <TaskStats />

            <TaskTable />

        </div>
    );
}
