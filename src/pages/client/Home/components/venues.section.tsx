// ** React
import {useEffect, useState} from "react";

// ** Components
import Container from "@/components/common/container.tsx";
import {Heading} from "@/components/typography";
import CenterCarousel from "@/components/common/center.carousel.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** services
import {getListVenue} from "@/services/venues";

const VenuesSection = () => {

    const [listVenue, setListVenue] = useState<TVenue[] | null>([])

    useEffect(() => {
        const fetchListVenue = async () => {
            try {
                const data = await getListVenue()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setListVenue(data)
            } catch (error) {
                console.error("Failed to load profile:", error)
            }
        }

        fetchListVenue()
    }, [])

    return (
        <Container>
            <div className='text-center mt-[50px] sm:mt-[160px]'>
                <Heading as='h2' title='Venues' className='mb-4'/>
                <p className="mx-auto sm:text-lg sm:w-[45%]">
                    Elegant venues for hosting your special events
                </p>
            </div>
            {listVenue && listVenue.length > 0 ? (
                <CenterCarousel items={listVenue}/>
            ) : (
                <p className="text-center mt-6 text-gray-500">No venues found</p>
            )}
        </Container>
    )
}

export default VenuesSection