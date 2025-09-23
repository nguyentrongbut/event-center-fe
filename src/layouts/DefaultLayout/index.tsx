// ** React router
import {Outlet} from "react-router";

// ** Layouts
import Header from "@/layouts/DefaultLayout/components/header";

const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout