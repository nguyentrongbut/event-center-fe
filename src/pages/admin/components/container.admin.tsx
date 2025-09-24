// ** React
import type {ReactNode} from "react";

// ** lib
import {cn} from "@/lib/utils.ts";

interface IContainerAdminProps {
    children: ReactNode,
    className?: string
}

const ContainerAdmin = ({children, className}: IContainerAdminProps) => {
    return (
        <div className={cn("flex-1 py-4 px-4 md:px-6 lg:px-8", className)}>
            {children}
        </div>
    )
}

export default ContainerAdmin