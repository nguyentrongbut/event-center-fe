// ** react helmet
import {Helmet} from "react-helmet-async";

// ** shadcn ui
import {Button} from "@/components/ui/button.tsx";

function App() {

    return (
        <>
            <Helmet>
                <title>Event Center - Home Page</title>
                <meta name="description" content="Book your party online quickly and conveniently." />
                <meta property="og:title" content="Party Booking Website" />
                <meta property="og:description" content="Experience a professional online party booking service." />
                <meta name="keywords" content="party booking, event booking, catering, banquet, wedding, online party service" />
            </Helmet>
            <h1 className='text-primary'>Event Center</h1>
            <Button variant='secondary'>Click me!</Button>
        </>
    )
}

export default App
