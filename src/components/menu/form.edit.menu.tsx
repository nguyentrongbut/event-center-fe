// ** React
import { useState } from "react";

// ** React hot toast
import toast from "react-hot-toast";

// ** Components
import MultiSelect from "@/components/select/multi.select.tsx";

// ** Shadcn ui
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

// ** zod
import { z } from "zod";

// ** react hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** types
import type {TDish} from "@/types/data";
import type {TOption} from "@/types";

// ** services
import {updateMenu} from "@/services/menus";

interface FormEditMenuProps {
    id: number;
    onSuccess?: () => void;
    name: string;
    price: number;
    dishesInMenu: TDish[];
    allDishes: TDish[];
}

const formSchema = z.object({
    name: z.string().min(1, 'Menu name is required'),
    dishIds: z.array(z.number()).min(6, 'Please select at least 6 dishes'),
    price: z.number().min(100000, 'Please enter a price greater than 100,000 VND')
});

export type EditMenuForm = z.infer<typeof formSchema>;

const FormEditMenu = ({ id, onSuccess, name, price, dishesInMenu, allDishes }: FormEditMenuProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const options: TOption[] = allDishes.map((dish) => ({
        value: dish.id,
        label: dish.name,
    }));

    const defaultDishIds: number[] = dishesInMenu.map(d => d.id);

    const form = useForm<EditMenuForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name,
            dishIds: defaultDishIds,
            price
        },
    });

    const onSubmit = async (values: EditMenuForm) => {
        setIsSubmitting(true);
        try {
            const result = await updateMenu(id, values.name, values.dishIds, values.price);
            if (!result) return toast.error("Failed to update the menu");
            toast.success("Menu updated successfully");
            onSuccess?.();
        } catch (error) {
            console.error(error);
            toast.error("Error while updating the menu");
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
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Menu Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter menu name..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dishIds"
                    render={({ field }) => {
                        const selectedOptions = options.filter(opt =>
                            field.value.includes(opt.value)
                        );

                        return (
                            <FormItem>
                                <FormLabel>Select Dishes</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={options}
                                        value={selectedOptions}
                                        onChange={(opts) => field.onChange(opts.map(opt => opt.value))}
                                        placeholder="Select dishes..."
                                        displayAll
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price per guest</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter menu price..."
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <DialogClose asChild>
                        <Button variant="outline" type="button" disabled={isSubmitting}>Cancel</Button>
                    </DialogClose>
                    <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                        Update
                    </Button>
                </div>
            </form>
        </Form>
    );
}

export default FormEditMenu;
