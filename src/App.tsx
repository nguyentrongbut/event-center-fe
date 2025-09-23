// ** Route
import AppRoutes from "@/components/AppRoutes";

// ** react hot toast
import {Toaster} from "react-hot-toast";

// ** Css
import './styles/index.css'

function App() {
    return (
        <>
            <AppRoutes/>

            <Toaster position="top-center" reverseOrder={false}/>
        </>
    );
}

export default App;