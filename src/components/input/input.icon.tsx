// ** React
import React from "react";

// ** Components
import {Input} from "@/components/ui/input.tsx";

// ** lib
import {cn} from "@/lib/utils.ts";

interface InputIconProps extends React.ComponentProps<typeof Input> {
    icon?: React.ReactNode;
}

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
    ({ icon, className, ...props }, ref) => {
        return (
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        {icon}
                    </div>
                )}
                <Input
                    ref={ref}
                    className={cn(`h-10 text-sm ${icon ? 'pl-10' : ''}`, className)}
                    {...props}
                />
            </div>
        );
    }
);

InputIcon.displayName = "InputIcon";

export default InputIcon;
