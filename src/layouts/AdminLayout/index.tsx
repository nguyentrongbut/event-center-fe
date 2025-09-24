// ** React router
import {Outlet} from "react-router";

// ** Layouts
import AppSideBar from "@/layouts/AdminLayout/components/sidebar/app.sidebar.tsx";
import HeaderAdmin from "@/layouts/AdminLayout/components/header";

// ** Shadcn ui
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.tsx";

const AdminLayout = () => {
    return (
        <SidebarProvider>
            <AppSideBar/>
            <SidebarInset>
                <main className='select-none'>
                    <HeaderAdmin/>
                    <Outlet/>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AdminLayout