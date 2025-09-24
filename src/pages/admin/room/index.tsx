// ** React
import {useEffect, useState} from "react";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import TitleWithCreateBtn from "@/components/common/admin/title.with.create.btn.tsx";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** types
import type {TRoom} from "@/types/data";

// ** columns
import {columnsRoom} from "@/pages/admin/room/columns.room.tsx";

// ** Services
import {getListRoom} from "@/services/room";

const Room = () => {

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
            <TitleWithCreateBtn
                title="List Room"
                createUrl="/dashboard/venue/room/create"/>
            <DataTable columns={columnsRoom} data={listRoom}/>
        </ContainerAdmin>
    )
}

export default Room