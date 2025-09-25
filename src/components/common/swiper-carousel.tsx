import {useRef, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ImgWPlaceholder from '@/components/common/img.w.placeholder'
import {ChevronLeft, ChevronRight} from 'lucide-react'

type SwiperCarouselProps = {
    images: string[]
    slidesPerView?: number
    heightClass?: string
    loop?: boolean
    showNavigation?: boolean
    spaceBetween?: number
    centerBtn?: boolean
}

const SwiperCarousel = ({
                            images,
                            slidesPerView = 1,
                            spaceBetween = 0,
                            heightClass = 'h-96',
                            loop = true,
                            showNavigation = true,
                            centerBtn = false,
                        }: SwiperCarouselProps) => {
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    const swiperRef = useRef<SwiperType>()

    useEffect(() => {
        if (
            showNavigation &&
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            swiperRef.current.params.navigation
        ) {
            const navigation = swiperRef.current.params.navigation as {
                prevEl?: HTMLElement | null
                nextEl?: HTMLElement | null
            }

            navigation.prevEl = prevRef.current
            navigation.nextEl = nextRef.current

            swiperRef.current.navigation.destroy()
            swiperRef.current.navigation.init()
            swiperRef.current.navigation.update()
        }
    }, [showNavigation])

    if (!images || images.length === 0) return null

    return (
        <div className="relative w-full group">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop={loop}
                navigation={false}
                pagination={false}
                modules={[Navigation, Pagination]}
                className="w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className={`relative w-full ${heightClass}`}>
                            <ImgWPlaceholder
                                src={src}
                                alt={`Slide ${index}`}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {showNavigation && (
                <>
                    <button
                        ref={prevRef}
                        className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow cursor-pointer transition-opacity ${
                            centerBtn ? '-left-5 opacity-100' : 'left-4 opacity-0 group-hover:opacity-100'
                        }`}
                    >
                        <ChevronLeft size={20}/>
                    </button>
                    <button
                        ref={nextRef}
                        className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow cursor-pointer transition-opacity ${
                            centerBtn ? '-right-5 opacity-100' : 'right-4 opacity-0 group-hover:opacity-100'
                        }`}
                    >
                        <ChevronRight size={20}/>
                    </button>
                </>
            )}
        </div>
    )
}

export default SwiperCarousel
