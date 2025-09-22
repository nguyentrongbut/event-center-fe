// ** React
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// ** App
import App from './App.tsx'

// ** react helmet
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </StrictMode>,
)
