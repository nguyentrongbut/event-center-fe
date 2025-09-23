import * as React from "react";
import { Input } from "@/components/ui/input.tsx";

export const InputForm = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<typeof Input>
>(({ ...props }, ref) => {
    return <Input ref={ref} {...props} className='h-10 text-sm' />;
});

InputForm.displayName = "InputForm";
