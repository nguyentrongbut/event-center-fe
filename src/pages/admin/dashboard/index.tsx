// ** Pages
import ContainerAdmin from "@/pages/admin/components/container.admin.tsx";
import StatsCards from "@/pages/admin/dashboard/components/stats.cards.tsx";

const Dashboard = () => {
    return (
        <ContainerAdmin>
            <StatsCards/>
        </ContainerAdmin>
    )
}

export default Dashboard