// ** React
import React from "react";

// ** lib
import {cn} from "@/lib/utils";
import {formatCurrency} from "@/utils/format.ts";
import {Heading} from "@/components/typography";


type TitleContentProps = {
    title: string;
    subTitle: string;
    desc: string;
    price?:number;
    layout?: "vertical" | "horizontal";
    className?: string;
};

const TitleContent: React.FC<TitleContentProps> = ({
                                                       title,
                                                       subTitle,
                                                       desc,
                                                       price,
                                                       layout = "vertical",
                                                       className
                                                   }) => {
    return (
        <div
            className={cn("flex flex-col justify-center lg:w-1/2", layout === "horizontal" && "lg:w-full gap-4", className)}>
            <div className={cn(layout === "horizontal" ? "flex gap-4 items-start" : "")}>
                <div
                    className={cn(
                        "w-64 inline-flex items-center gap-2 mb-1 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-[#c7b299]",
                    )}
                >
                    <span className="size-1.5 bg-[#c7b299] rounded-full"/>
                    <h3 className="text-lg font-semibold text-foreground uppercase">{title}</h3>
                </div>

                <Heading
                    as="h4"
                    title={subTitle}
                    className={cn(layout === "horizontal" ? "mt-1.5" : "mt-2")}
                />
            </div>

            <p className={cn("mt-4 text-muted-foreground leading-relaxed", layout === "horizontal" && "ml-[272px]")}>
                {desc}
            </p>
            {price && (
                <p className="text-primary mt-4">Giá dịch vụ: {formatCurrency(price!)}</p>
            )}
        </div>
    );
};

export default TitleContent;
