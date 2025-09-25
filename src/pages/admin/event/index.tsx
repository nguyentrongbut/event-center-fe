// ** React
import {useEffect, useState} from "react";

// ** React router
import {Link} from "react-router-dom";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";

// ** Lucide Iocn
import {Plus} from "lucide-react";

// ** columns
import {columnsEvent} from "@/pages/admin/event/columns.event.tsx";

// ** types
import type {TEvent} from "@/types/data";

// ** Services
import {getListEvent} from "@/services/events";

const Event = () => {

    const [listEvent, setListEvent] = useState<TEvent[]>([])

    useEffect(() => {
        const fetchListEvent = async () => {
            const data = await getListEvent();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setListEvent(data)
        }

        fetchListEvent()
    }, [])

    return (
        <ContainerAdmin>
            <div className="flex justify-between items-center mb-4">
                <HeadingAdmin>
                    List Event
                </HeadingAdmin>
                <Link to="/dashboard/event/create">
                    <Button>
                        <Plus className="size-4 mr-2"/>
                        Add new event
                    </Button>
                </Link>
            </div>
            <DataTable columns={columnsEvent} data={listEvent}/>
        </ContainerAdmin>
    )
}

export default Event;