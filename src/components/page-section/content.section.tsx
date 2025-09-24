// ** Components
import TitleContent from "@/components/page-section/title.content.tsx";
import ImgContent from "@/components/page-section/img.content.tsx";

// ** lib
import {cn} from "@/lib/utils";

type ContentSectionProps = {
    layout?: "horizontal" | "vertical";
    title: string;
    subTitle: string;
    desc: string;
    images: string[];
    className?: string;
    price?: number;
};

const ContentSection = ({
                            layout = "horizontal",
                            title,
                            subTitle,
                            desc,
                            images,
                            className,
                            price
                        }: ContentSectionProps) => {
    const isVertical = layout === "vertical";

    return (
        <section className={cn("gap-8 py-[100px]", isVertical ? "flex flex-col" : "lg:flex", className)}>
            <TitleContent
                title={title}
                subTitle={subTitle}
                desc={desc}
                price={price}
                layout={layout === "horizontal" ? "vertical" : "horizontal"}
            />
            <ImgContent images={images} layout={layout}/>
        </section>
    );
};

export default ContentSection;
