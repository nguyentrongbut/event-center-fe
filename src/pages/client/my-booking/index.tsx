// ** React
import {useEffect, useState} from "react";

// ** Components
import Container from "@/components/common/container.tsx";
import HeadingAdmin from "@/components/typography/admin/heading.admin.tsx";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** columns
import {columnsBooking} from "@/pages/client/my-booking/columns.my.booking.tsx";

// ** Services
import {getListBookingByUserId} from "@/services/booking";

const MyBooking = () => {

    const [listBooking, setListBooking] = useState([]);

    useEffect(() => {
        const fetchListBooking = async () => {
            const data = await getListBookingByUserId()
            setListBooking(data)
        }

        fetchListBooking()
    }, []);

    console.log(listBooking);
    return (
        <Container className='pt-10 pb-20'>
            <HeadingAdmin className='mb-10'>
                Your List Booking
            </HeadingAdmin>
            <DataTable columns={columnsBooking} data={listBooking}/>
        </Container>
    )
}

export default MyBooking