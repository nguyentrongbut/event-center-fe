// ** React
import {useEffect, useState} from "react";

// ** Components
import HeaderSection from "@/components/common/hero.section.tsx";
import Container from "@/components/common/container.tsx";
import MenuCard from "@/components/menu/menu.card.tsx";
import NavMenuFood from "@/components/common/nav.menu.food.tsx";

// ** Types
import type {TMenu} from "@/types/data";

// ** Services
import {getListMenu} from "@/services/menus";

const MenuClient = () => {

    const [listMenu, setListMenu] = useState<TMenu[]>([])

    useEffect(() => {
        const fetchListMenu = async () => {
            try {
                const data = await getListMenu()
                setListMenu(data)
            } catch (error) {
                console.error("Failed to load dish:", error)
            }
        }

        fetchListMenu()
    }, [])

    return (
        <>
            <div className="relative">
                <HeaderSection
                    title="Menu"
                    backgroundImage="https://trongdongpalace.com/wp-content/uploads/2024/08/Feedback.webp"
                    breadcrumbs={[
                        {label: "Home", href: "/"},
                        {label: "Menu"},
                    ]}
                />

                <NavMenuFood/>
            </div>
            <div className="py-24">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {listMenu.map((menu: TMenu) => (
                            <MenuCard
                                key={menu.id}
                                id={menu.id}
                                name={menu.name}
                                dishes={menu.dishes}
                                price={menu.price}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default MenuClient;