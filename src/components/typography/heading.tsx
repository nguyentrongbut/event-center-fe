// ** React
import * as React from 'react';

// ** React router
import {Link} from "react-router-dom";

// ** class variance authority
import { cva, type VariantProps } from 'class-variance-authority';

// ** utils
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold text-[34px] sm:text-[44px] roboto-serif', {
    variants: {
        size: {
            default: 'text-[34px] sm:text-[44px]',
            lg: 'text-4xl font-bold text-slate-800'
        },
        type: {
            default: 'roboto-serif',
        },
        fontWeight: {
            default: 'font-bold',
        },
    },
    defaultVariants: {
        size: 'default',
        type: 'default',
        fontWeight: 'default',
    },
});

type AsProp<T extends React.ElementType> = {
    as?: T;
};

export type HeadingProps<T extends React.ElementType = React.ElementType> =
    AsProp<T> &
    VariantProps<typeof headingVariants> & {
    href?: string;
    title: string;
    link?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'title' | 'href'>;

const Heading = <T extends React.ElementType = 'h1'>({
                                                         size,
                                                         type,
                                                         fontWeight,
                                                         href,
                                                         title,
                                                         as,
                                                         className,
                                                         link = false,
                                                         ...props
                                                     }: HeadingProps<T>) => {
    const Comp = as || 'h1';

    return (
        <Comp
            className={cn(
                headingVariants({ size, type, fontWeight, className })
            )}
            title={title}
            {...props}
        >
            {link && href ? <Link to={href}>{title}</Link> : <>{title}</>}
        </Comp>
    );
};

Heading.displayName = 'Heading';

export default Heading;
