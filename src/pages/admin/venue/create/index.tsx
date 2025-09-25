// ** React
import {useEffect, useState} from "react";

// ** Components
import {HeadingAdmin} from "@/components/typography/admin";
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";

// ** Pages
import FormCreateVenue from "@/pages/admin/venue/create/form.create.venue.tsx";

// ** Types
import type {TRoom} from "@/types/data";

// ** Services
import {getListRoom} from "@/services/room";

const CreateVenue = () => {

    const [listRoom, setListRoom] = useState<TRoom[]>([])

    useEffect(() => {

        const fetchListRoom = async () => {
            const data = await getListRoom();
            setListRoom(data);
        }

        fetchListRoom()
    }, [])

    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Add new Venue
            </HeadingAdmin>
            <FormCreateVenue room={listRoom} />
        </ContainerAdmin>
    )
}

export default CreateVenue