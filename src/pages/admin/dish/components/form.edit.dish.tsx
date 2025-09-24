// ** React
import { useState } from "react"

// ** React hot toast
import toast from "react-hot-toast";

// ** Shadcn ui
import { Input } from "@/components/ui/input"
import { DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"

// ** zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// **  React hook form
import { useForm } from "react-hook-form"

// ** services
import {updateDish} from "@/services/dishes";

interface FormEditDishProps {
    id: number
    name: string
    onSuccess?: () => void
}

const formSchema = z.object({
    name: z.string().min(1, "Dish name is required"),
})

export type CreateDishForm = z.infer<typeof formSchema>

const FormEditDish = ({ id, name, onSuccess }: FormEditDishProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<CreateDishForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name,
        },
    })

    const onSubmit = async (values: CreateDishForm) => {
        setIsSubmitting(true)
        try {
            const result = await updateDish(id, values.name)
            if (!result) {
                toast.error("Update dish name fail!")
                return
            }

            toast.success("Update dish name successfully!")
            onSuccess?.()
        } catch (error) {
            console.error("Update error:", error)
            toast.error("Error updating dish name. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-1.5 mt-2"
                autoComplete="off"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter dish ..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="outline"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                    </DialogClose>

                    <Button
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default FormEditDish
