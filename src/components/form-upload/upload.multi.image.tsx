// ** React
import {type ChangeEvent, useEffect, useState} from "react";

// ** Shadcn ui
import { Input } from "@/components/ui/input";

// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";

// ** Lucide Icon
import { Upload, X } from "lucide-react";

interface UploadMultiImageProps {
    value: (File | string)[];
    onChange: (val: (File | string)[]) => void;
    maxImages?: number;
}

const UploadMultiImage = ({ value, onChange, maxImages = 1 }: UploadMultiImageProps) => {
    const [previews, setPreviews] = useState<string[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const remaining = maxImages - value.length;
            const fileArray = Array.from(files).slice(0, remaining);
            const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
            setPreviews((prev) => [...prev, ...newPreviews]);
            onChange([...value, ...fileArray]);
        }
    };

    const handleRemove = (index: number) => {
        const newValue = [...value];
        const newPreviews = [...previews];
        newValue.splice(index, 1);
        newPreviews.splice(index, 1);
        onChange(newValue);
        setPreviews(newPreviews);
    };

    useEffect(() => {
        const urls = value.map(item =>
            typeof item === "string" ? item : URL.createObjectURL(item)
        );
        setPreviews(urls);
    }, [value]);

    const canUploadMore = value.length < maxImages;

    return (
        <div className="flex flex-wrap gap-3 p-2">
            {previews.map((src, index) => (
                <div key={index} className="relative size-20 rounded overflow-hidden">
                    <ImgWPlaceholder
                        src={src}
                        alt={`image-${index}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded"
                    />
                    <button
                        type="button"
                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-0.5 cursor-pointer"
                        onClick={() => handleRemove(index)}
                    >
                        <X size={16} />
                    </button>
                </div>
            ))}

            {canUploadMore && (
                <label className="size-20 flex items-center justify-center bg-muted rounded cursor-pointer hover:bg-muted-foreground/10 border border-dashed">
                    <Upload className="text-muted-foreground" />
                    <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        onClick={(e) => {
                            (e.target as HTMLInputElement).value = "";
                        }}
                    />
                </label>
            )}
        </div>
    );
};

export default UploadMultiImage;
