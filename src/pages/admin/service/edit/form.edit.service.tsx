// ** React
import {useState} from "react";

// ** react hook form
import {useForm} from "react-hook-form";

// ** React router
import {useNavigate, Link} from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** zod
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ** Components
import UploadMultiImage from "@/components/form-upload/upload.multi.image.tsx";

// ** Shadcn ui
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

// ** Types
import type {TService} from "@/types/data";

// ** Services
import {editService} from "@/services/services";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    price: z.number().min(500000, "Minimum service price is 500,000 VND"),
    description: z.string().min(100, "Description must be at least 100 characters"),
    icon: z.string().min(1, "Icon is required"),
    images: z
        .array(z.union([z.string(), z.instanceof(File)]))
        .min(1, "Please upload at least 1 image")
        .max(4, "You can upload up to 4 images only"),
});

export type EditServiceForm = z.infer<typeof formSchema>;

const FormEditService = ({service}: { service: TService }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const form = useForm<EditServiceForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: service.name,
            price: service.price,
            description: service.description,
            icon: service.icon,
            images: service.images,
        },
    });

    const onSubmit = async (values: EditServiceForm) => {
        setIsSubmitting(true);
        try {
            const result = await editService(values, service.id, service.images);
            if (!result) return toast.error("Failed to update service");
            toast.success("Service updated successfully");
            navigate("/dashboard/service");
        } catch (error) {
            console.error(error);
            toast.error("Service update error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="off"
                className="space-y-2.5 mt-6"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Service Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter service name..." {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Service Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter price..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
               <textarea
                   className="w-full border rounded-md p-2 min-h-[120px] border-[#191720] focus:border-[#191720] focus:ring-0 focus:outline-none"
                   placeholder="Enter detailed description..."
                   {...field}
               />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="icon"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Icon</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter icon name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="images"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Images (up to 4 images)</FormLabel>
                            <FormControl>
                                <UploadMultiImage
                                    value={field.value}
                                    onChange={field.onChange}
                                    maxImages={4}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <Link to="/dashboard/service">
                        <Button variant="outline" type="button" disabled={isSubmitting}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Updating..." : "Update"}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormEditService;
