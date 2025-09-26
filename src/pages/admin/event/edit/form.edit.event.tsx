// ** React
import { useState } from "react";

// ** React hook form
import { useForm } from "react-hook-form";

// ** React router
import { useNavigate, Link } from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** Zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/select/multi.select.tsx";
import { Switch } from "@/components/ui/switch.tsx";

// ** types
import type { TEvent, TMenu, TService } from "@/types/data";

// ** utils
import { formatCurrency } from "@/utils/format.ts";

// ** services
import { editEvent } from "@/services/events";

// Zod schema
const fileOrUrlSchema = z.union([
    z.string().url("Image not a valid URL"),
    z
        .instanceof(File)
        .refine((file) => file.size < 5_000_000, "Each image must be less than 5MB"),
]);

const formSchema = z.object({
    name: z.string().min(1, "Event name is required"),
    subName: z.string().optional(),
    description: z.string().optional(),
    icon: z.string().optional(),
    images: z.array(fileOrUrlSchema).min(1, "Please upload at least one image"),
    hot: z.boolean(),
    menuIds: z.array(z.number()).optional(),
    serviceIds: z.array(z.number()).optional(),
});

export type EditEventForm = z.infer<typeof formSchema>;

const FormEditEvent = ({
                           menu,
                           service,
                           event,
                           menuIds,
                           serviceIds,
                       }: {
    menu: TMenu[];
    service: TService[];
    event: TEvent;
    menuIds: TMenu[];
    serviceIds: TService[];
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const menuOptions = menu.map((m) => ({
        value: m.id,
        label: `${m.name} - ${formatCurrency(m.price)}`,
    }));

    const serviceOptions = service.map((s) => ({
        value: s.id,
        label: `${s.name} - ${formatCurrency(s.price)}`,
    }));


    const form = useForm<EditEventForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: event?.name,
            subName: event?.subName || "",
            description: event?.description || "",
            icon: event?.icon || "",
            images: event?.images || [],
            hot: event?.hot || false,
            menuIds: menuIds?.map((m) => m.id) || [],
            serviceIds: serviceIds?.map((s) => s.id) || [],
        },
    });

    const onSubmit = async (values: EditEventForm) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("Name", values.name);
            if (values.subName) formData.append("SubName", values.subName);
            if (values.description) formData.append("Description", values.description);
            if (values.icon) formData.append("Icon", values.icon);
            formData.append("Hot", values.hot.toString());

            values.images.forEach((img) => {
                formData.append("Images", img);
            });

            values.menuIds?.forEach((id) => formData.append("MenuIds", id.toString()));
            values.serviceIds?.forEach((id) => formData.append("ServiceIds", id.toString()));

            const result = await editEvent(formData, event.id);
            if (!result) return toast.error("Update event failed");

            toast.success("Update event successfully");
            navigate("/dashboard/event");
        } catch (err) {
            console.error(err);
            toast.error("Error updating event. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter event name..." />
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
                                <FormLabel>Sub Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Sub Name..." />
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
                                <Input {...field} placeholder="Icon class or URL..." />
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
                    className="w-full p-2 border rounded"
                    placeholder="Description..."
                    rows={4}
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
                                    placeholder="Choose menu..."
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
                                    placeholder="Choose service..."
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
                                <FormLabel>Hot Event</FormLabel>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
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

                <div className="flex justify-end gap-3 pt-2">
                    <Link to="/dashboard/event">
                        <Button variant="outline" type="button" disabled={isSubmitting}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                        Update Event
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormEditEvent;
