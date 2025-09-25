// ** React
import {useEffect, useState} from "react";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** columns
import {columnsBooking} from "@/pages/admin/booking/columns.booking.tsx";

// ** Types
import type {TBooking} from "@/types/data";

// ** Services
import {getListBooking} from "@/services/booking";


const Booking = () => {

    const [listBooking, setListBooking] = useState<TBooking[]>([])

    useEffect(() => {
        const fetchListBooking = async () => {
            const data = await getListBooking()
            
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setListBooking(data)
        }

        fetchListBooking()
    }, []);

    return (
        <ContainerAdmin>
            <HeadingAdmin className="mb-4">
                List Booking
            </HeadingAdmin>
            <DataTable  columns={columnsBooking} data={listBooking}/>
        </ContainerAdmin>
    )
}

export default Booking;