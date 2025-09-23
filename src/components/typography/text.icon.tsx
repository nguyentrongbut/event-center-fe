// ** React
import React from "react";
import {Link, type LinkProps} from "react-router-dom";

// ** lib
import {cn} from "@/lib/utils";

interface TextIconBaseProps {
    icon: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    target?: string;
}

type TextIconProps =
    | ({ to: LinkProps["to"] } & LinkProps & TextIconBaseProps)
    | (TextIconBaseProps & { to?: undefined });

const TextIcon = React.forwardRef<HTMLAnchorElement, TextIconProps>(
    ({icon, children, className, target, ...props}, ref) => {
        if ("to" in props && props.to) {
            // Render Link
            return (
                <Link
                    ref={ref}
                    target={target}
                    className={cn("flex items-center gap-2 cursor-pointer", className)}
                    {...props}
                >
                    {icon}
                    {children}
                </Link>
            );
        }

        // Render span
        return (
            <span
                ref={ref as never}
                className={cn("flex items-center gap-2 cursor-pointer", className)}
                {...props}
            >
        {icon}
                {children}
      </span>
        );
    }
);

TextIcon.displayName = "TextIcon";

export default TextIcon;
