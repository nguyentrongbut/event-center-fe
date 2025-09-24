// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Configs
import {ROLE} from "@/configs/role.ts";

// ** Layout
import DefaultLayout from "@/layouts/DefaultLayout";
import AdminLayout from "@/layouts/AdminLayout";

// ** Components
import {ProtectedRoute} from "@/components/AppRoutes/protected.route.tsx";

// ** Pages
import Home from "@/pages/client/Home";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Dashboard from "@/pages/admin/dashboard";

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