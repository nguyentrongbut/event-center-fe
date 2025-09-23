// ** React
import {useEffect, useState} from "react";

// ** Layouts
import NavList from "@/layouts/DefaultLayout/components/header/components/nav/components/nav.list.tsx";

// ** Shadcn ui
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.tsx";

// ** services
import {getListEvent} from "@/services/events";

// ** type
import type {TEvent} from "@/types/data";

const DropdownNav = () => {
    const [listNavEvent, setListNavEvent] = useState<TEvent[] | null>([])

    useEffect(() => {
        const fetchListEvent = async () => {
            try {
                const data = await getListEvent();
                setListNavEvent(data);
            } catch (error) {
                console.error("Failed to load events:", error);
            }
        }

        fetchListEvent()
    }, []);

    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className="text-thirdColor bg-primaryColor hover:text-primary transition-colors hover:bg-transparent font-normal cursor-pointer">
                Service
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="grid w-[180px]">
                    <NavList list={listNavEvent || []} variant="dropdown"></NavList>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

export default DropdownNav;