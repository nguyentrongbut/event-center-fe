// ** React
import {useState} from "react";

// ** React hook form
import {useForm} from "react-hook-form";

// ** zod
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

// ** React hot toast
import toast from "react-hot-toast";

// ** Shadcn ui
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {DialogClose} from "@/components/ui/dialog";

// ** Pages
import UploadImage from "@/pages/profile/components/upload.image.tsx";

// ** types
import type {TProfileAPI} from "@/types/data";

// ** Services
import {updateProfile} from "@/services/auth";

const formSchema = z.object({
    avatar: z.union([
        z.string().url("Avatar must be a valid URL or an uploaded image file."),
        z.instanceof(File)
    ]),
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    address: z.string().min(1, 'Address cannot be empty'),
});

type ProfileForm = z.infer<typeof formSchema>;

export type ProfileFormUpdate = ProfileForm & {
    id: string;
}

const FormUpdateProfile = ({infoProfile, onClose, fetchProfile}: { infoProfile: TProfileAPI, onClose?: () => void, fetchProfile: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    // 1. Define your form.
    const form = useForm<ProfileForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            avatar: infoProfile.avatar || '',
            name: infoProfile.name ?? '',
            email: infoProfile.email ?? '',
            phone: infoProfile.phone ?? '',
            address: infoProfile.address ?? '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: ProfileForm) {
        setIsSubmitting(true);
        try {
            const formData = {id: infoProfile?.id, ...values};
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const result = await updateProfile(formData)
            if (!result) return toast.error('Update profile failed. Please try again.');
            if (result === 200) {
                fetchProfile()
                toast.success('Update profile successfully.');
                onClose?.();
            }
        } catch (error) {
            console.error('Error when update profile:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2.5">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <UploadImage value={field.value} onChange={field.onChange}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter your phone" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your address" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="flex justify-end gap-4 !mt-8">
                    <DialogClose asChild>
                        <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                        Update Profile
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default FormUpdateProfile;