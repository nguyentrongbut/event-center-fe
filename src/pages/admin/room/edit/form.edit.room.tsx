// ** React
import { useState } from "react";

// ** React router
import {Link, useNavigate} from "react-router-dom";

// ** React hook form
import { useForm } from "react-hook-form";

// ** React hot toast
import toast from "react-hot-toast";

// ** zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Components
import UploadMultiImage from "@/components/form-upload/upload.multi.image.tsx";

// ** shadcn ui
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ** types
import type {TRoom} from "@/types/data";

// ** services
import {editRoom} from "@/services/room";

const formSchema = z.object({
    name: z.string().min(1, "Room name is required"),
    price: z.number().min(500000, "Minimum room price is 500,000 VND"),
    area: z.string().min(1, "Area is required"),
    people: z.number().min(1, "Capacity must be at least 1"),
    table: z.number().min(1, "At least 1 table is required"),
    image: z.union([z.string(), z.instanceof(File)])
        .refine((val) => val !== "" && val !== undefined && val !== null, {
            message: "Please upload one image",
        }),
});

export type EditRoomForm = z.infer<typeof formSchema>;

const FormEditRoom: React.FC<{ room: TRoom }> = ({ room }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const form = useForm<EditRoomForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: room.name,
            price: room.price,
            area: room.area,
            people: room.people,
            table: room.tableNumber,
            image: room.image,
        },
    });

    const onSubmit = async (values: EditRoomForm) => {
        setIsSubmitting(true);
        try {
            const result = await editRoom(values, room.id);
            if (!result) return toast.error("Failed to update room");
            toast.success("Room updated successfully");
            navigate("/dashboard/venue/room");
        } catch (error) {
            console.error(error);
            toast.error("Error updating room");
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
                                    type="text"
                                    placeholder="Enter area..."
                                    {...field}
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

                {/* Image */}
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Room Image</FormLabel>
                            <FormControl>
                                <UploadMultiImage
                                    value={field.value ? [field.value] : []}
                                    onChange={(files) => {
                                        if (!files || files.length === 0) {
                                            field.onChange("");
                                        } else {
                                            field.onChange(files[0]);
                                        }
                                    }}
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
                        {isSubmitting ? "Updating..." : "Update"}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormEditRoom;
