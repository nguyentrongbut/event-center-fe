// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormEditRoom from "@/pages/admin/room/edit/form.edit.room.tsx";

// ** types
import type {TRoom} from "@/types/data";

// ** services
import {getDetailRoom} from "@/services/room";


const EditRoom = () => {
    const {id} = useParams<{ id: string }>();
    const [room, setRoom] = useState<TRoom | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                if (!id) return;
                const data = await getDetailRoom(Number(id));
                setRoom(data);
            } catch (error) {
                console.error("Failed to fetch service:", error);
            }
        };

        fetchService();
    }, [id]);

    if (!room) {
        return <div>Service not found</div>;
    }

    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Update Room
            </HeadingAdmin>
            <FormEditRoom room={room}/>
        </ContainerAdmin>
    )
}

export default EditRoom