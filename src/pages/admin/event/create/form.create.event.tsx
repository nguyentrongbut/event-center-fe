// ** React
import {useState} from "react";

// ** React hook form
import {useForm} from "react-hook-form";

// ** React router
import {useNavigate, Link} from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** Zod
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ** Components
import UploadMultiImage from "@/components/form-upload/upload.multi.image.tsx";

// ** Shadcn ui
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import MultiSelect from "@/components/select/multi.select.tsx";
import {Switch} from "@/components/ui/switch.tsx";

// ** types
import type {TMenu, TService} from "@/types/data";

// ** utils
import {formatCurrency} from "@/utils/format.ts";

// ** services
import {createEvent} from "@/services/events";

// Zod schema
const fileOrUrlSchema = z.union([
    z.string().url("Invalid image URL"),
    z
        .instanceof(File)
        .refine((file) => file.size < 5_000_000, "Each image must be less than 5MB"),
]);

const formSchema = z.object({
    name: z.string().min(1, "Event name is required"),
    subName: z.string().optional(),
    description: z.string().optional(),
    icon: z.string().optional(),
    images: z.array(fileOrUrlSchema).min(1, "Please select at least 1 image"),
    hot: z.boolean(),
    menuIds: z.array(z.number()).optional(),
    serviceIds: z.array(z.number()).optional(),
});

export type CreateEventForm = z.infer<typeof formSchema>;

const FormCreateEvent = ({ menu, service }: { menu: TMenu[]; service: TService[] }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const menuOptions = menu?.map((menu: TMenu) => ({
        value: menu.id,
        label: `${menu.name} - ${formatCurrency(menu.price)}`,
    }));

    const serviceOptions = service?.map((service: TService) => ({
        value: service.id,
        label: `${service.name} - ${formatCurrency(service.price)}`,
    }));

    const form = useForm<CreateEventForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subName: "",
            description: "",
            icon: "",
            images: [],
            hot: false,
            menuIds: [],
            serviceIds: [],
        },
    });

    const onSubmit = async (values: CreateEventForm) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();

            formData.append("Name", values.name);
            if (values.subName) formData.append("SubName", values.subName);
            if (values.description) formData.append("Description", values.description);
            if (values.icon) formData.append("Icon", values.icon);
            formData.append("Hot", values.hot.toString());

            values.images.forEach((img) => {
                if (img instanceof File) {
                    formData.append("Images", img);
                } else {
                    formData.append("Images", img);
                }
            });

            values.menuIds?.forEach((id) => formData.append("MenuIds", id.toString()));
            values.serviceIds?.forEach((id) => formData.append("ServiceIds", id.toString()));

            const result = await createEvent(formData);
            if (!result) return toast.error("Failed to create event");

            toast.success("Event created successfully");
            navigate("/dashboard/event");
        } catch (error) {
            console.error(error);
            toast.error("Event creation error");
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Slug Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter slug name..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="subName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Main Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter main name..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    name="icon"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Icon</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Paste icon here..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                <textarea
                    {...field}
                    className="w-full border rounded-md p-2 min-h-[120px] border-[#191720] focus:border-[#191720] focus:ring-0 focus:outline-none"
                    placeholder="Enter description..."
                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="menuIds"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Menu</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={menuOptions}
                                    value={menuOptions.filter((opt) => field.value?.includes(opt.value))}
                                    onChange={(opts) => field.onChange(opts.map((opt) => opt.value))}
                                    placeholder="Select menu..."
                                    maxDisplayed={8}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="serviceIds"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Service</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={serviceOptions}
                                    value={serviceOptions.filter((opt) => field.value?.includes(opt.value))}
                                    onChange={(opts) => field.onChange(opts.map((opt) => opt.value))}
                                    placeholder="Select service..."
                                    maxDisplayed={8}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="hot"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Featured Event?</FormLabel>
                                <FormControl>
                                    <Switch
                                        className="cursor-pointer"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="images"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Images</FormLabel>
                                <FormControl>
                                    <UploadMultiImage
                                        value={field.value}
                                        onChange={field.onChange}
                                        maxImages={4}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <Link to="/dashboard/venue/room">
                        <Button variant="outline" type="button" disabled={isSubmitting}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                        Create
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormCreateEvent;
