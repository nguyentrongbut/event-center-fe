// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Pages
import Home from "@/pages/client/Home";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<Home/>}/>

                {/* No layout */}
                <Route index path="/sign-in" element={<SignIn/>}/>
                <Route index path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;