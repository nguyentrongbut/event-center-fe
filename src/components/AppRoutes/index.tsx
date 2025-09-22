// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Pages
import Home from "@/pages/Home";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;