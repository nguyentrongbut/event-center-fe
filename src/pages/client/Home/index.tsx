// ** react helmet
import {Helmet} from "react-helmet-async";

// ** Pages
import HeroSection from "@/pages/client/Home/components/hero.section.tsx";
import ServicesSection from "@/pages/client/Home/components/services.section.tsx";
import AboutSection from "@/pages/client/Home/components/about.section.tsx";
import NewsLetterSection from "@/pages/client/Home/components/news.letter.section.tsx";
import VenuesSection from "@/pages/client/Home/components/venues.section.tsx";

function Home() {
    return (
        <>
            <Helmet>
                <title>Event Center - Home Page</title>
                <meta name="description" content="Book your party online quickly and conveniently." />
                <meta property="og:title" content="Party Booking Website" />
                <meta property="og:description" content="Experience a professional online party booking service." />
                <meta name="keywords" content="party booking, event booking, catering, banquet, wedding, online party service" />
            </Helmet>
            <HeroSection/>
            <ServicesSection/>
            <AboutSection/>
            <VenuesSection/>
            <NewsLetterSection/>
        </>
    )
}

export default Home
