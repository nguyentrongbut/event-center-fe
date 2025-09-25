// ** React
import {useEffect, useState} from "react";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import TitleWithCreateBtn from "@/components/common/admin/title.with.create.btn.tsx";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** columns
import {columnsVenue} from "@/pages/admin/venue/columns.venue.tsx";

// ** services
import {getListVenue} from "@/services/venues";

const Venue = () => {

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
        <ContainerAdmin>
            <TitleWithCreateBtn
                title="Venue List"
                createUrl="/dashboard/venue/create"/>
            <DataTable columns={columnsVenue} data={listVenue}/>
        </ContainerAdmin>
    )
}

export default Venue