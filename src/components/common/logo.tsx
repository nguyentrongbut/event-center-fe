// ** React
import * as React from "react";

// ** React router
import { Link } from "react-router-dom";

// ** class variance authority
import { cva, type VariantProps } from "class-variance-authority";

// ** utils
import { cn } from "@/lib/utils";

// ** Lucide Icon
import { ChefHat } from "lucide-react";

const logoVariants = cva("text-2xl font-bold text-slate-800", {
    variants: {
        size: {
            default: "text-2xl font-bold text-slate-800",
            lg: 'text-3xl'
        },
    },
    defaultVariants: {
        size: "default",
    },
});

const iconVariants = {
    default: "size-10 text-primary",
};

const websiteName = "Event Center";

export interface LogoProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof logoVariants> {
    sizeIcon?: 'default'
}

const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
    ({ className, size, sizeIcon = "default", ...props }, ref) => {
        return (
            <Link to="/" className="inline-flex items-center gap-2">
                <ChefHat className={cn(iconVariants[sizeIcon])} />
                <span
                    ref={ref}
                    className={cn(logoVariants({ size }), className)}
                    {...props}
                >
          {websiteName}
        </span>
            </Link>
        );
    }
);

Logo.displayName = "Logo";

export default Logo;
