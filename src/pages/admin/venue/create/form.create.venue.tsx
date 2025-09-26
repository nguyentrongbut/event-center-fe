// ** React
import {useState} from "react";

// ** React hook form
import {useForm} from "react-hook-form";

// ** React hot toast
import toast from "react-hot-toast";

// ** React router
import {useNavigate} from "react-router-dom";

// ** zod
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

// ** Components
import UploadMultiImage from "@/components/form-upload/upload.multi.image.tsx";
import MultiSelect from "@/components/select/multi.select.tsx";

// ** Shadcn ui
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

// ** types
import type {TRoom} from "@/types/data";
import type {TOption} from "@/types";

// ** Configs
import {WEEKDAYS} from "@/configs/pages.tsx";

// ** Services
import {createVenue} from "@/services/venues";


const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    area: z.string().min(1, "Area is required"),
    people: z.number().min(50, "Minimum 50 people"),
    description: z.string().optional(),
    roomIds: z.array(z.number()).min(1, "Select at least 1 room"),
    heroBanners: z.array(z.instanceof(File)).optional(),
    thumbnailImages: z.array(z.instanceof(File)).optional(),
    galleryImages: z.array(z.instanceof(File)).optional(),
    address: z.string().min(1, "Address is required"),
    open: z.string().min(1, "Opening time is required"),
    close: z.string().min(1, "Closing time is required"),
    days: z.array(z.string()).min(1, "Select at least 1 day"),
    image: z
        .instanceof(File, {message: "Please upload an image"})
        .refine(file => file.size < 5_000_000, "Image must be less than 5MB"),
});

export type CreateVenueForm = z.infer<typeof formSchema>;

interface FormCreateVenueProps {
    room: TRoom[];
}

const FormCreateVenue: React.FC<FormCreateVenueProps> = ({room}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const roomOptions = room?.map(r => ({value: Number(r.id), label: r.name}));

    const form = useForm<CreateVenueForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            area: "",
            people: 0,
            description: "",
            roomIds: [],
            heroBanners: [],
            thumbnailImages: [],
            galleryImages: [],
            address: "",
            open: "",
            close: "",
            days: [],
            image: undefined,
        },
    });

    const onSubmit = async (values: CreateVenueForm) => {
        setIsSubmitting(true);
        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("area", values.area);
        formData.append("people", values.people.toString());
        formData.append("description", values.description || "");
        values.roomIds.forEach(id => formData.append("roomIds", id.toString()));

        values.heroBanners?.forEach(file => formData.append("heroBanners", file));
        values.thumbnailImages?.forEach(file => formData.append("thumbnailImages", file));
        values.galleryImages?.forEach(file => formData.append("galleryImages", file));

        formData.append("address", values.address);
        formData.append("open", values.open);
        formData.append("close", values.close);
        values.days.forEach(day => formData.append("days", day));
        formData.append("image", values.image);

        try {
            const result = await createVenue(formData);
            if (!result) return toast.error("Failed to create venue");
            toast.success("Venue created successfully");

            navigate("/dashboard/venue");
        } catch (err) {
            console.error(err);
            toast.error("Error creating venue");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5 mt-6" autoComplete="off">
                {/* Name & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Venue Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="image"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Cover Image</FormLabel>
                                <FormControl>
                                    <UploadMultiImage value={field.value ? [field.value] : []}
                                                      onChange={files => field.onChange(files[0])}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Area & People */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="area"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Area</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="people"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Capacity (people)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field}
                                           onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Description */}
                <FormField
                    name="description"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <textarea {...field}
                                          className="w-full border rounded-md p-2 min-h-[120px] border-[#191720] focus:border-[#191720] focus:ring-0 focus:outline-none"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Address */}
                <FormField
                    name="address"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Open & Close Time */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="open"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Opening Time</FormLabel>
                                <FormControl>
                                    <Input type="time" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="close"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Closing Time</FormLabel>
                                <FormControl>
                                    <Input type="time" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Days & Rooms */}
                <FormField
                    name="days"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Active Days</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={WEEKDAYS.map(d => ({label: d, value: d})) as unknown as TOption[]}
                                    value={WEEKDAYS.map(d => ({label: d, value: d}))
                                        .filter(opt => field.value.includes(opt.value)) as unknown as TOption[]}
                                    onChange={opts =>
                                        field.onChange(opts.map(opt => opt.value))
                                    }
                                    placeholder="Select active days..."
                                    maxDisplayed={10}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    name="roomIds"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Rooms</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={roomOptions}
                                    value={roomOptions.filter(opt => field.value?.includes(opt.value))}
                                    onChange={opts => field.onChange(opts.map(opt => opt.value))}
                                    placeholder="Select rooms..."
                                    maxDisplayed={10}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                {/* Hero & Thumbnail */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        name="heroBanners"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Hero Banners</FormLabel>
                                <FormControl>
                                    <UploadMultiImage value={field.value || []} onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="thumbnailImages"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Section Images (max 2 images)</FormLabel>
                                <FormControl>
                                    <UploadMultiImage value={field.value || []} onChange={field.onChange}
                                                      maxImages={2}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Gallery */}
                <FormField
                    name="galleryImages"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Footer Gallery (max 4 Images)</FormLabel>
                            <FormControl>
                                <UploadMultiImage value={field.value || []} onChange={field.onChange} maxImages={4}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" type="button" onClick={() => (navigate("/dashboard/venue"))}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
                        Create Venue
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormCreateVenue;
