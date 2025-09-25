// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import Container from "@/components/common/container.tsx";
import ContentSection from "@/components/page-section/content.section.tsx";
import MenuSection from "@/components/common/menu.section.tsx";
import HeaderSection from "@/components/common/hero.section.tsx";

// ** Types
import type {TDetailEvent, TEvent, TService} from "@/types/data";

// ** Services
import {getDetailEvent} from "@/services/events";

const EventClient = () => {

    const {slug} = useParams<{ slug: string }>();
    const [event, setEvent] = useState<TDetailEvent>()
    const eventInfo: TEvent | undefined = event?.eventInfo
    const menus = event?.menus

    const services = event?.services

    useEffect(() => {
        const fetchEvent = async () => {
            if (!slug) return
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const data: TDetailEvent = await getDetailEvent(slug);
            setEvent(data)
        }

        fetchEvent()
    }, [])

    if (!eventInfo) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            <HeaderSection
                title={eventInfo.subName}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Service", href: "/service" },
                    { label: eventInfo?.subName},
                ]}
            />

            <Container>
                <ContentSection
                    title={eventInfo?.name}
                    subTitle={eventInfo?.subName}
                    desc={eventInfo?.description}
                    images={eventInfo?.images}
                />
            </Container>

            <div className="mt-20">
                <MenuSection menus={menus || []}/>
            </div>

            <div className="bg-primaryColor">
                <Container>
                    {
                        services?.map((service: TService, index: number) => (
                            <ContentSection
                                key={index}
                                title="Our services"
                                subTitle={service?.name}
                                desc={service?.description}
                                images={service?.images}
                                price={service?.price}
                            ></ContentSection>
                        ))
                    }
                </Container>
            </div>
        </div>
    )
}

export default EventClient