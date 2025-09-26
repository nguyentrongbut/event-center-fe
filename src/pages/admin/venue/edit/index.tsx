// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormEditVenue from "@/pages/admin/venue/edit/form.edit.venue.tsx";

// ** Types
import type {TRoom, TVenue} from "@/types/data";

// ** Services
import {getDetailVenue} from "@/services/venues";
import {getListRoom} from "@/services/room";

const EditVenue = () => {

    const { slug } = useParams<{ slug: string }>();

    const [venue, setVenue] = useState<TVenue | null>(null);
    const [listRoom, setListRoom] = useState<TRoom[]>([])

    useEffect(() => {

        const fetchListRoom = async () => {
            const data = await getListRoom();
            setListRoom(data);
        }

        fetchListRoom()
    }, [])

    useEffect(() => {
        const fetchVenue = async () => {
            if(!slug) return
            const data = await getDetailVenue(slug)

            setVenue(data)
        }

        fetchVenue();
    }, []);

    if (!venue) {
        return <div className='text-center'>Venue not found</div>;
    }

    return (
        <ContainerAdmin>
            <HeadingAdmin>Update Venue</HeadingAdmin>
            <FormEditVenue room={listRoom} venue={venue} />
        </ContainerAdmin>
    )
}

export default EditVenue