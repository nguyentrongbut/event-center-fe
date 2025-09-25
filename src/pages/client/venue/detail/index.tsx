// ** React
import {useEffect, useState} from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import SwiperCarousel from "@/components/common/swiper-carousel.tsx";
import Container from "@/components/common/container.tsx";
import ImgWPlaceholder from "@/components/common/img.w.placeholder.tsx";
import TitleContent from "@/components/page-section/title.content.tsx";
import CenterCarousel from "@/components/common/center.carousel.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** services
import {getDetailVenue, getListVenue} from "@/services/venues";

const DetailVenueClient = () => {

    const { slug } = useParams<{ slug: string }>();

    const [listVenue, setListVenue] = useState<TVenue[]>([]);
    const [venue, setVenue] = useState<TVenue | null>(null);

    useEffect(() => {
        const fetchListVenue = async () => {
            const data = await getListVenue()
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setListVenue(data)
        }

        fetchListVenue()
    }, [])

    useEffect(() => {
        const fetchVenue = async () => {
            if(!slug) return
            const data = await getDetailVenue(slug)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setVenue(data)
        }

        fetchVenue();
    }, [slug]);

    const imgBack = venue?.thumbnailImages[0];
    const imgFront = venue?.thumbnailImages[1];

    if (!venue) {
        return <div className='text-center'>Venue not found</div>;
    }

    return (
        <>
            <section>
                <SwiperCarousel
                    images={venue.heroBanners}
                    slidesPerView={1}
                    heightClass="h-[91vh]"
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
            <section className="py-20 bg-primaryColor">
                <Container className="mb-10">
                    <TitleContent
                        title="Banquet Room"
                        subTitle="Banquet Room System"
                        desc="Cater Ease Palace Hoang Quoc Viet features two large banquet halls: Athens 1 with a capacity of 810 guests and Athens 2 with a capacity of 550 guests, accommodating up to 1,400 guests when combined."
                        layout="horizontal"
                    />
                </Container>
                <CenterCarousel items={listVenue}/>
            </section>
            <section className="py-20 bg-primaryColor">
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
        </>
    )
}

export default DetailVenueClient