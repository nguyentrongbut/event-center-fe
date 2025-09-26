// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";
import SwiperCarousel from "@/components/common/swiper-carousel.tsx";
import Container from "@/components/common/container.tsx";
import ImgWPlaceholder from "@/components/common/img.w.placeholder.tsx";
import TitleContent from "@/components/page-section/title.content.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** services
import {getDetailVenue} from "@/services/venues";

const DetailVenue = () => {

    const { slug } = useParams<{ slug: string }>();

    const [venue, setVenue] = useState<TVenue | null>(null);

    useEffect(() => {
        const fetchVenue = async () => {
            if(!slug) return
            const data = await getDetailVenue(slug)
            setVenue(data)
        }

        fetchVenue();
    }, []);

    const imgBack = venue?.thumbnailImages[0];
    const imgFront = venue?.thumbnailImages[1];

    if (!venue) {
        return <div className='text-center'>Venue not found</div>;
    }

    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Info Venue
            </HeadingAdmin>
            <div className="mt-4 mx-auto">
                <section>
                    <SwiperCarousel
                        images={venue.heroBanners}
                        slidesPerView={1}
                        heightClass="h-[60vh]"
                    />
                </section>
                <section className="pt-[100px]">
                    <Container className="lg:flex lg:gap-8">
                        <div className="lg:w-1/2 relative mb-[260px]">
                            <div className="w-2/3 h-[420px]">
                                <ImgWPlaceholder
                                    src={imgBack}
                                    alt={venue?.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-2/3 h-[450px] absolute top-1/3 right-2">
                                <ImgWPlaceholder
                                    src={imgFront}
                                    alt={venue?.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <TitleContent
                            title="Trung tâm"
                            subTitle={`Cater Ease Place ${venue.name}`}
                            desc={venue.description}
                            className="justify-start"
                        />
                    </Container>
                </section>
                <section className="py-20 bg-[#f0f1f1]">
                    <Container>
                        <SwiperCarousel
                            images={venue.galleryImages || []}
                            slidesPerView={4}
                            heightClass="h-72"
                            spaceBetween={16}
                            centerBtn
                        />
                    </Container>
                </section>
            </div>
        </ContainerAdmin>
    )
}

export default DetailVenue