// ** React
import  { useState } from "react";

// ** React router
import { Link, useNavigate } from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** React hook form
import { useForm } from "react-hook-form";

// ** zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Components
import UploadMultiImage from "@/components/form-upload/upload.multi.image.tsx";

// Shadcn ui
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

// ** services
import {createRoom} from "@/services/room";

const formSchema = z.object({
    name: z.string().min(1, "Room name is required"),
    price: z.number().min(500000, "Minimum price is 500,000 VND"),
    area: z.number().min(10, "Area must be greater than 10 m²"),
    people: z.number().min(1, "Capacity must be at least 1 person"),
    table: z.number().min(1, "Minimum number of tables is 1"),
    images: z
        .array(z.union([z.string(), z.instanceof(File)]))
        .min(1, "Please upload at least one image"),
});

export type CreateRoomForm = z.infer<typeof formSchema>;

const FormCreateRoom: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const form = useForm<CreateRoomForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            price: 0,
            area: 0,
            people: 0,
            table: 0,
            images: [],
        },
    });

    const onSubmit = async (values: CreateRoomForm) => {
        setIsSubmitting(true);
        try {
            const result = await createRoom(values);
            if (!result) return toast.error("Failed to create room");
            toast.success("Room created successfully");
            navigate("/dashboard/venue/room");
        } catch (error) {
            console.error(error);
            toast.error("Room creation failed");
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
                {/* Room Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Room Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter room name..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Price */}
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Room Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter price..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Area */}
                <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Area (m²)</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter area..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Capacity */}
                <FormField
                    control={form.control}
                    name="people"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Capacity (people)</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter capacity..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Tables */}
                <FormField
                    control={form.control}
                    name="table"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Number of Tables</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter number of tables..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Images */}
                <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Images (max 1 image)</FormLabel>
                            <FormControl>
                                <UploadMultiImage
                                    value={field.value}
                                    onChange={field.onChange}
                                    maxImages={1}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                    <Link to="/dashboard/venue/room">
                        <Button variant="outline" type="button" disabled={isSubmitting}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Create"}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormCreateRoom;
