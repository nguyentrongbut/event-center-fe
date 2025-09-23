// ** React router
import {Outlet} from "react-router";

// ** Layouts
import Header from "@/layouts/DefaultLayout/components/header";
import Footer from "@/layouts/DefaultLayout/components/footer";

const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <main className='min-h-[35vh]'>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default DefaultLayout