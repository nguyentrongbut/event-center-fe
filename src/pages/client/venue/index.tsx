// ** React
import {useEffect, useState} from "react";

// ** Components
import HeaderSection from "@/components/common/hero.section.tsx";
import Container from "@/components/common/container.tsx";
import TitleContent from "@/components/page-section/title.content.tsx";
import CenterCarousel from "@/components/common/center.carousel.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** services
import {getListVenue} from "@/services/venues";

const VenueClient = () => {

    const [listVenue, setListVenue] = useState<TVenue[]>([]);

    useEffect(() => {
        const fetchListVenue = async () => {
            const data = await getListVenue()
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setListVenue(data)
        }

        fetchListVenue()
    }, [])

    return (
        <>
            <HeaderSection
                title="Địa điểm"
                breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "Venue"},
                ]}
            />

            <div className="pt-20 py-40 bg-primaryColor">
                <Container className="mb-10">
                    <TitleContent
                        title="Central System"
                        subTitle="Banquet Center Network"
                        desc="Cater Ease Palace stands out with a network of 13 luxurious wedding and event centers (10 located in Hanoi and 3 in nearby provinces: Nam Dinh, Thai Nguyen, and Hai Duong), firmly securing its position as the top prestigious wedding venue brand in Northern Vietnam."
                        layout="horizontal"
                    />
                </Container>
                <CenterCarousel items={listVenue}/>
            </div>
        </>
    )
}

export default VenueClient