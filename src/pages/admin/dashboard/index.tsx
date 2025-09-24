// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";

// ** Pages
import StatsCards from "@/pages/admin/dashboard/components/stats.cards.tsx";

const Dashboard = () => {
    return (
        <ContainerAdmin>
            <StatsCards/>
        </ContainerAdmin>
    )
}

export default Dashboard