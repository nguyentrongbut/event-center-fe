// ** React
import {useEffect, useState} from "react";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormCreateEvent from "@/pages/admin/event/create/form.create.event.tsx";

// ** Types
import type {TMenu, TService} from "@/types/data";

// ** Services
import {getListMenu} from "@/services/menus";
import {getListService} from "@/services/services";

const CreateEvent = () => {

    const [listMenu, setListMenu] = useState<TMenu[]>([])
    const [listService, setListService] = useState<TService[]>([])

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

    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Add Event
            </HeadingAdmin>
            <FormCreateEvent menu={listMenu}  service={listService} />
        </ContainerAdmin>
    )
}

export default CreateEvent