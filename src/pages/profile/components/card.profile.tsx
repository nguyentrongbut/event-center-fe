// ** React
import type {ReactNode} from "react";

// ** utils
import {cn} from "@/lib/utils";

const CardProfile = ({children, className}: { children: ReactNode, className?: string }) => {
    return (
        <section
            className={cn("bg-background p-6 rounded-lg shadow-sm border border-gray-200", className)}>
            {children}
        </section>
    )
}

export default CardProfile