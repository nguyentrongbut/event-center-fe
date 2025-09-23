// ** React
import * as React from "react"

// ** Radix ui
import {Slot} from "@radix-ui/react-slot"

// ** class variance
import {cva, type VariantProps} from "class-variance-authority"

// ** cn
import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium outline-none transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-[#380CD3]",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-gray-700",
                secondary:
                    "bg-[#191720] text-white hover:bg-[#191720]/90",
            },
            size: {
                default: "h-10 px-4 py-2",
                full: 'w-full py-2',
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, isLoading, children, ...props}, ref) => {
        const Comp = asChild ? Slot : "button"
        const child = isLoading ?
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : children
        return (
            <Comp
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            >
                {child}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export {Button, buttonVariants}