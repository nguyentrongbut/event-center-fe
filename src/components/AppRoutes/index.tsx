// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Configs
import {ROLE} from "@/configs/role.ts";

// ** Layout
import DefaultLayout from "@/layouts/DefaultLayout";
import AdminLayout from "@/layouts/AdminLayout";

// ** Components
import {ProtectedRoute} from "@/components/AppRoutes/protected.route.tsx";

// ** Default Pages
import Home from "@/pages/client/Home";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";

// ** Admin Pages
import Dashboard from "@/pages/admin/dashboard";
import Dish from "@/pages/admin/dish";
import Menu from "@/pages/admin/menu";
// Service Page
import Service from "@/pages/admin/service";
import EditService from "@/pages/admin/service/edit";
import CreateService from "@/pages/admin/service/create";
import DetailService from "@/pages/admin/service/view";


function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Admin route */}
                <Route
                    element={
                        <ProtectedRoute roles={[ROLE.ADMIN]}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/dashboard/menu/dish' element={<Dish/>}/>
                    <Route path='/dashboard/menu' element={<Menu/>}/>

                    {/* Service */}
                    <Route path='/dashboard/service' element={<Service/>}/>
                    <Route path='/dashboard/service/view/:id' element={<DetailService/>}/>
                    <Route path='/dashboard/service/edit/:id' element={<EditService/>}/>
                    <Route path='/dashboard/service/create' element={<CreateService/>}/>
                </Route>
                {/* End Admin route */}

                 {/*Public route*/}
                <Route element={<DefaultLayout/>}>
                    <Route index path="/" element={<Home/>}/>
                </Route>
                {/* End Public route */}

                {/* Auth Route*/}
                <Route
                    index
                    path="/sign-in"
                    element={
                        <ProtectedRoute guestOnly>
                            <SignIn/>
                        </ProtectedRoute>
                    }/>
                <Route
                    index
                    path="/sign-up"
                    element={
                        <ProtectedRoute guestOnly>
                            <SignUp/>
                        </ProtectedRoute>
                    }
                />
                {/* End Auth Route*/}
            </Routes>
        </Router>
    );
}

export default AppRoutes;