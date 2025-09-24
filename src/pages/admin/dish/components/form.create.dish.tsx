// ** React
import {useState} from "react";

// ** React hook form
import {useForm} from "react-hook-form";

// ** React hot toast
import toast from "react-hot-toast";

// Shadcn ui
import {Input} from "@/components/ui/input";
import {DialogClose} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";

// ** zod
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ** services
import {createDish} from "@/services/dishes";

interface FormCreateDishProps {
    onSuccess?: () => void;
}

const formSchema = z.object({
    name: z.string().min(1, "Dish name is required"),
});

export type CreateDishForm = z.infer<typeof formSchema>;

const FormCreateDish = ({ onSuccess }: FormCreateDishProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 1. Define your form.
    const form = useForm<CreateDishForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: CreateDishForm) {
        setIsSubmitting(true);
        try {
            const result = await createDish(values.name)
            if (!result) return toast.error("Create dish failed. Please try again!");
            toast.success("Create dish successfully!");
            onSuccess?.()
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((values) => onSubmit(values))}
                className="space-y-1.5 mt-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="Enter dish name ..." {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="flex gap-3 pt-2 justify-end">
                    <DialogClose asChild>
                        <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>Create</Button>
                </div>
            </form>
        </Form>
    )
}

export default FormCreateDish