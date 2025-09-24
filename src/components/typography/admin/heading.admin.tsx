// ** React
import type {ReactNode} from "react";

// ** lib
import { cn } from "@/lib/utils.ts";

type HeadingProps = {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    className?: string;
};

const HeadingAdmin = ({ as: Tag = "h1", children, className }: HeadingProps) => {
    return (
        <Tag className={cn("font-semibold text-xl", className)}>
            {children}
        </Tag>
    );
};

export default HeadingAdmin;