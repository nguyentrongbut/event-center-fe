// ** React
import {useEffect, useState} from "react";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** types
import type {TDish, TMenu} from "@/types/data";

// ** services
import {getListDish} from "@/services/dishes";
import {getListMenu} from "@/services/menus";
import DialogCreateMenu from "@/components/menu/dialog.create.menu.tsx";
import ListMenu from "@/components/menu/list.menu.tsx";

const Menu = () => {
    const [listDish, setListDish] = useState<TDish[]>([])
    const [listMenu, setListMenu] = useState<TMenu[]>([])

    useEffect(() => {
        const fetchListDish = async () => {
            try {
                const data = await getListDish()
                setListDish(data)
            } catch (error) {
                console.error("Failed to load dish:", error)
            }
        }
        fetchListDish()
    }, [])

    const fetchListMenu = async () => {
        try {
            const data = await getListMenu()
            setListMenu(data)
        } catch (error) {
            console.error("Failed to load dish:", error)
        }
    }

    useEffect(() => {
        fetchListMenu()
    }, [])

    const dishes = listDish?.map((dish: TDish) => ({
        value: dish.id,
        label: dish.name,
    }));

    return (
        <ContainerAdmin>
            <div className="flex justify-between items-center mb-4">
                <HeadingAdmin>
                    List Menu
                </HeadingAdmin>
                <DialogCreateMenu dishes={dishes} onReload={fetchListMenu}/>
            </div>
            {listMenu?.length > 0 ? (
                <div className="-mx-4 mt-6">
                    <div className="relative">
                        <ListMenu isAdminView menus={listMenu} listDish={listDish} onReload={fetchListMenu}/>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No menus found. Create a new one now.</p>
            )}
        </ContainerAdmin>
    )
}

export default Menu