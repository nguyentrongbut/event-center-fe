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

const DropdownNav = () => {
    const [listNavEvent, setListNavEvent] = useState([])

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
    console.log(listNavEvent)

    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className="text-slate-700 hover:text-primary transition-colors hover:bg-transparent font-normal cursor-pointer">
                Service
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="grid w-[180px]">
                    <NavList list={listNavEvent} variant="dropdown"></NavList>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

export default DropdownNav;