import ImgWPlaceholder from "@/components/common/img.w.placeholder.tsx";

interface BannerProps {
    image: string
}

const Banner = ({ image }: BannerProps) => {
    return (
        <div className="relative w-full h-[60vh] lg:h-[65vh]">
            <ImgWPlaceholder
                src={image}
                alt="Banner Event Center"
                className="w-[86%] h-full absolute left-1/2 -translate-x-1/2 top-[38px] rounded-md z-20 object-cover"
            />
            <div className="bg-[#29B067] w-full h-[60vh] absolute inset-0 rounded-[12px]" />
        </div>
    )
}

export default Banner
