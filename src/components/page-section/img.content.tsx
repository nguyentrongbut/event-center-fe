// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";

// ** lib
import { cn } from "@/lib/utils";

type ImgContentProps = {
    layout?: "horizontal" | "vertical";
    images: string[];
};

const ImgContent = ({ layout = "horizontal", images }: ImgContentProps) => {
    const isVertical = layout === "vertical";
    const count = images?.length ?? 0;

    return (
        <div
            className={cn(
                "grid gap-6 h-[576px] mt-10 lg:mt-0",
                !isVertical && "lg:w-1/2",
                count === 1 && "grid-cols-1 grid-rows-1",
                count === 2 && "grid-cols-2 grid-rows-1",
                count === 3 && "grid-cols-2 grid-rows-6",
                count === 4 && "grid-cols-4 grid-rows-6"
            )}
        >
            {count === 1 && (
                <div className="relative overflow-hidden rounded-lg">
                    <ImgWPlaceholder
                        src={images[0]}
                        alt={images[0]}
                        className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                    />
                </div>
            )}

            {count === 2 && (
                <>
                    <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[0]}
                            alt={images[0]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[1]}
                            alt={images[1]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </>
            )}

            {count === 3 && (
                <>
                    <div className="row-span-6 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[0]}
                            alt={images[0]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="row-span-3 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[1]}
                            alt={images[1]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="row-span-3 col-start-2 row-start-4 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[2]}
                            alt={images[2]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </>
            )}

            {count === 4 && (
                <>
                    <div className="col-span-2 row-span-6 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[0]}
                            alt={images[0]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[1]}
                            alt={images[1]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="row-span-3 col-start-3 row-start-4 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[2]}
                            alt={images[2]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="row-span-3 col-start-4 row-start-4 relative overflow-hidden rounded-lg">
                        <ImgWPlaceholder
                            src={images[3]}
                            alt={images[3]}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ImgContent;
