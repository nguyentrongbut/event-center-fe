// ** React
import React, {useState} from 'react';

// ** React router
import {Link} from "react-router-dom";

// ** Lucide Icon
import {ChevronLeft, ChevronRight, MapPin, Users, Layout} from 'lucide-react';

// ** Components
import ImgWPlaceholder from '@/components/common/img.w.placeholder';
import Container from '@/components/common/container';

// ** types
import type {TVenue} from "@/types/data";

type CenterCarouselProps = {
    items: TVenue[];
    onViewCarousel?: (venue: TVenue) => void;
};

const CenterCarousel: React.FC<CenterCarouselProps> = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const getVisibleItem = () => {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const nextIndex = (currentIndex + 1) % items.length;

        return {
            prev: items[prevIndex],
            current: items[currentIndex],
            next: items[nextIndex],
        };
    };

    const {prev, current, next} = getVisibleItem();

    return (
        <Container className="p-6">
            {/* Mobile view: just display center */}
            <div className="block lg:hidden">
                <div className="relative h-80 w-full shadow-2xl rounded-lg">
                    <Link to={`/venue/${current.slug}`}>
                        <ImgWPlaceholder
                            width={600}
                            height={400}
                            src={current.image}
                            alt={current.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </Link>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"/>

                    {/* Info Card */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-4/5 shadow-xl border-0 rounded-xl bg-white bottom-0 translate-y-1/2 z-20">
                        <div className="p-4">
                            <div className="text-center mb-3">
                                <h2 className="text-lg font-semibold text-foreground mb-1">{current.name}</h2>
                            </div>
                            <div className="flex justify-center gap-5 mb-4 text-xs">
                                <div className="flex items-center gap-1 px-2 py-1">
                                    <MapPin size={12}/>
                                    {current.area}
                                </div>
                                <div className="flex items-center gap-1 px-2 py-1">
                                    <Users size={12}/>
                                    {current.people}
                                </div>
                                <div className="flex items-center gap-1 px-2 py-1">
                                    <Layout size={12}/>
                                    {current.rooms.length}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div
                        onClick={prevSlide}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:shadow-xl bg-white backdrop-blur-sm border-2 z-10 cursor-pointer flex items-center justify-center"
                    >
                        <ChevronLeft className="size-6"/>
                    </div>

                    <div
                        onClick={nextSlide}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:shadow-xl bg-white backdrop-blur-sm border-2 z-10 cursor-pointer flex items-center justify-center"
                    >
                        <ChevronRight className="size-6"/>
                    </div>
                </div>
            </div>

            {/* Desktop view: hiện cả 3 ảnh và navigation */}
            <div className="hidden lg:block">
                <div className="relative">
                    <div className="flex flex-row items-center justify-center gap-6">
                        {/* Left Card */}
                        <div
                            className="h-64 flex-1 min-w-[260px] overflow-hidden transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-90 shadow-lg hover:shadow-xl rounded-lg">
                            <div className="relative h-full">
                                <Link to={`/venue/${prev.slug}`}>
                                    <ImgWPlaceholder
                                        width={600}
                                        height={400}
                                        src={prev.image}
                                        alt={prev.name}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg pointer-events-none"/>
                            </div>
                        </div>

                        {/* Center Card */}
                        <div className="relative h-80 flex-1 min-w-[260px]">
                            <div className="h-full w-full overflow-hidden shadow-2xl rounded-lg">
                                <Link to={`/venue/${current.slug}`}>
                                    <ImgWPlaceholder
                                        width={600}
                                        height={400}
                                        src={current.image}
                                        alt={current.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </Link>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg pointer-events-none"/>
                            </div>

                            {/* Info Card */}
                            <div
                                className="absolute -bottom-1/5 left-1/2 -translate-x-1/2 w-full max-w-full lg:max-w-5/6 shadow-xl border-0 rounded-xl bg-white">
                                <div className="py-4 flex flex-col items-center justify-center">
                                    <div className="mb-3">
                                        <h2 className="text-lg font-semibold text-foreground mb-1">{current.name}</h2>
                                    </div>
                                    <div className="flex gap-8 mb-4 text-xs">
                                        <div className="flex items-center gap-1 py-1">
                                            <MapPin size={12}/>
                                            {current.area}
                                        </div>
                                        <div className="flex items-center gap-1 py-1">
                                            <Users size={12}/>
                                            {current.people}
                                        </div>
                                        <div className="flex items-center gap-1 py-1">
                                            <Layout size={12}/>
                                            {current.rooms.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div
                            className="h-64 flex-1 min-w-[260px] overflow-hidden transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-90 shadow-lg hover:shadow-xl rounded-lg">
                            <div className="relative h-full">
                                <Link to={`/venue/${next.slug}`}>
                                    <ImgWPlaceholder
                                        width={600}
                                        height={400}
                                        src={next.image}
                                        alt={next.name}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg pointer-events-none"/>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div
                        onClick={prevSlide}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:shadow-xl bg-white backdrop-blur-sm border-2 z-10 cursor-pointer flex items-center justify-center"
                    >
                        <ChevronLeft className="size-6"/>
                    </div>

                    <div
                        onClick={nextSlide}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:shadow-xl bg-white backdrop-blur-sm border-2 z-10 cursor-pointer flex items-center justify-center"
                    >
                        <ChevronRight className="size-6"/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CenterCarousel;
