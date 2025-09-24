// ** React
import React, { useState } from "react";

// ** lib
import { cn } from "@/lib/utils";

type ImgWPlaceholderProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    placeholderSrc?: string;
};

const isValidImageSrc = (src?: string): boolean => {
    return (
        typeof src === "string" &&
        (src.startsWith("/") || src.startsWith("http") || src.startsWith("blob:"))
    );
};


const ImgWPlaceholder: React.FC<ImgWPlaceholderProps> = ({
                                                             src,
                                                             alt,
                                                             placeholderSrc = "/placeholder-img.png",
                                                             className,
                                                             ...rest
                                                         }) => {
    const [loaded, setLoaded] = useState(false);

    const safeSrc = isValidImageSrc(src) ? src : placeholderSrc;

    return (
        <div className={cn("relative w-full h-auto", className)}>
            <img
                src={safeSrc}
                alt={alt || "image"}
                onLoad={() => setLoaded(true)}
                className={cn(
                    "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700",
                    loaded ? "opacity-100" : "opacity-0"
                )}
                {...rest}
            />

            {!loaded && (
                <img
                    src={placeholderSrc || './placeholder-img.png'}
                    alt="loading placeholder"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default ImgWPlaceholder;
