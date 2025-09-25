// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormEditEvent from "@/pages/admin/event/edit/form.edit.event.tsx";

// ** Types
import type {TDetailEvent, TMenu, TService} from "@/types/data";

// ** Services
import {getListMenu} from "@/services/menus";
import {getListService} from "@/services/services";
import {getDetailEvent} from "@/services/events";

const EditEvent = () => {

    const { slug } = useParams<{ slug: string }>();

    const [listMenu, setListMenu] = useState<TMenu[]>([])
    const [listService, setListService] = useState<TService[]>([])
    const [event, setEvent] = useState<TDetailEvent>()

    useEffect(() => {
        const fetchListMenu = async () => {
            const data = await getListMenu()
            setListMenu(data)
        }

        fetchListMenu()
    }, []);

    useEffect(() => {
        const fetchListMenu = async () => {
            const data = await getListService()
            setListService(data)
        }

        fetchListMenu()
    }, []);

    useEffect(() => {
        const fetchEvent = async () => {
            if (!slug) return
            const data = await getDetailEvent(slug)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setEvent(data)
        }

        fetchEvent()
    }, []);

    if (!event || !listMenu || !listService) return <div className='text-center'>Event Not Found</div>

    return (
        <ContainerAdmin>
            <HeadingAdmin>Update Event</HeadingAdmin>
            <FormEditEvent
                service={listService}
                menu={listMenu}
                event={event?.eventInfo}
                menuIds={event?.menus}
                serviceIds={event?.services}
            />
        </ContainerAdmin>
    )
}

export default EditEvent