// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Configs
import {ROLE} from "@/configs/role.ts";

// ** Layout
import DefaultLayout from "@/layouts/DefaultLayout";

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
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute roles={[ROLE.ADMIN]}>
                            <Dashboard/>
                        </ProtectedRoute>
                    }
                />

                <Route element={<DefaultLayout/>}>
                    <Route index path="/" element={<Home/>}/>
                </Route>

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
            </Routes>
        </Router>
    );
}

export default AppRoutes;