// ** React router
import {useParams} from "react-router";

// ** Components
import HeaderSection from "@/components/common/header.section.tsx";
import NavMenuFood from "@/components/common/nav.menu.food.tsx";
import Container from "@/components/common/container.tsx";
import ListMenu from "@/components/menu/list.menu.tsx";
import {useEffect, useState} from "react";

// ** Services
import {getDetailEvent} from "@/services/events";
import type {TDetailEvent} from "@/types/data";

const MenuEvent = () => {

    const {slug} = useParams<{ slug: string }>();

    const [eventDetail, setEventDetail] = useState<TDetailEvent>()

    useEffect(() => {
        const fetchEventDetail = async () => {
            try {
                if (!slug) return
                const data = await getDetailEvent(slug)
                setEventDetail(data)
            } catch (error) {
                console.error("Failed to load dish:", error)
            }
        }

        fetchEventDetail()
    }, [])

    const menus = eventDetail?.menus

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

                <NavMenuFood
                    slug={slug}
                />
            </div>
            <div className="py-24">
                <Container>
                    <ListMenu
                        menus={menus || []}
                    />
                </Container>
            </div>
        </>
    )
}

export default MenuEvent;