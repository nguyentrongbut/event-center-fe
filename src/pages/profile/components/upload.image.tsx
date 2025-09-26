// ** React
import {type ChangeEvent, useEffect, useState} from "react";

// ** shadcn ui
import {Input} from "@/components/ui/input";

// ** Lucide Icon
import {Upload} from "lucide-react";

const UploadImage = ({ value, onChange }: { value: string | File, onChange: (val: string | File) => void }) => {
    const [preview, setPreview] = useState<string>("/default-avatar.png");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const tempUrl = URL.createObjectURL(file);
            setPreview(tempUrl);
            onChange(file);
        }
    };

    useEffect(() => {
        if (typeof value === "string") {
            setPreview(value);
        }
    }, [value]);

    return (
        <div className="flex justify-center p-2">
            <div className="relative size-20 rounded-full overflow-hidden group">
                <img
                    src={preview}
                    alt="profile"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
                <label
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Upload className="text-white size-5" />
                    <Input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                        onClick={(e) => {
                            (e.target as HTMLInputElement).value = "";
                        }}
                    />
                </label>
            </div>
        </div>
    );
};


export default UploadImage