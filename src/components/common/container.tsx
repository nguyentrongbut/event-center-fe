// ** React
import {forwardRef, type HTMLAttributes, type ReactNode} from "react";

// ** lib
import { cn } from "@/lib/utils";


interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("container mx-auto px-8 sm:px-0 max-w-[calc(100% - 18px)] w-full sm:w-[1266px]", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = "Container";

export default Container;
