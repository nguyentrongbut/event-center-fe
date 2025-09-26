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

    const fetchListBooking = async () => {
        const data = await getListBooking()

        setListBooking(data)
    }

    useEffect(() => {
        fetchListBooking()
    }, []);

    return (
        <ContainerAdmin>
            <HeadingAdmin className="mb-4">
                List Booking
            </HeadingAdmin>
            <DataTable  columns={columnsBooking(fetchListBooking)} data={listBooking}/>
        </ContainerAdmin>
    )
}

export default Booking;