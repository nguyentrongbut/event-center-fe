// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";
import Container from "@/components/common/container.tsx";
import ContentSection from "@/components/page-section/content.section.tsx";
import MenuSection from "@/components/common/menu.section.tsx";

// ** Shadcn ui
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

// ** Types
import type {TDetailEvent, TEvent, TService} from "@/types/data";

// ** Services
import {getDetailEvent} from "@/services/events";


const DetailEvent = () => {

    const { slug } = useParams<{ slug: string }>();
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
        <ContainerAdmin>
            <HeadingAdmin>
                Info Event
            </HeadingAdmin>
            <div>
                <Container>
                    <ContentSection
                        title={eventInfo?.name}
                        subTitle={eventInfo?.subName}
                        desc={eventInfo?.description}
                        images={eventInfo?.images}
                    />
                </Container>
            </div>
            <div className="mt-20">
                <MenuSection menus={menus || []} adminView/>
            </div>
            <div className="bg-[#f0f1f1]">
                <Container>
                    {
                        services?.map((service:TService, index:number) => (
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
            <Card className="my-8">
                <CardHeader>Info Other:</CardHeader>
                <CardContent className="space-y-4">
                    <div>Hot: {eventInfo?.hot ? "Yes" : "No"}</div>
                    <div>Icon: {eventInfo?.icon}</div>
                </CardContent>
            </Card>
        </ContainerAdmin>
    )
}

export default DetailEvent