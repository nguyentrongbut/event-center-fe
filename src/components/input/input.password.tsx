// ** React
import React, { useState } from "react";

// ** Lucide Icon
import { Eye, EyeOff } from "lucide-react";

// ** Components
import { InputForm } from "@/pages/auth/components/input";

const InputPassword = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<typeof InputForm>
>(({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <InputForm
                ref={ref}
                type={showPassword ? "text" : "password"}
                {...props}
            />
            <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <EyeOff className="size-4 text-gray-500" />
                ) : (
                    <Eye className="size-4 text-gray-500" />
                )}
            </div>
        </div>
    );
});

InputPassword.displayName = "InputPassword";

export default InputPassword;
