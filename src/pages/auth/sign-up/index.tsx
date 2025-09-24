// ** React
import {useState} from "react";

// ** react helmet
import {Helmet} from "react-helmet-async";

// ** React hook form
import {useForm} from "react-hook-form";

// ** React router
import {useNavigate} from "react-router-dom";

// ** zod
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ** Components
import {InputIcon, InputPassword} from "@/components/input";

import {InputForm} from "@/pages/auth/components/input";

// ** Shadcn ui
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

// ** Pages
import AuthWrapper from "@/pages/auth/components/auth.wrapper.tsx";

// ** services
import {signUp} from "@/services/auth";

// ** react hot toast
import toast from "react-hot-toast";

// ** lucide icon
import {Mail, MapPin, Phone} from "lucide-react";

const formSchema = z.object({
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    password: z.string()
        .min(12, 'Password must be at least 12 characters long')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    address: z.string().min(1, 'Address cannot be empty'),
    acceptTerms: z.boolean().refine(val => val === true, {message: "You must agree to the terms"}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignUpForm = z.infer<typeof formSchema>;

const SignUp = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<SignUpForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            address: '',
            acceptTerms: false,
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: SignUpForm) {
        setIsSubmitting(true);
        try {
            const result = await signUp(values);
            if (!result) return toast.error('Sign up failed. Please check your details!');
            if (result) {
                toast.success('Sign up successful! Please log in.');
                navigate('/sign-in');
            }
        } catch (error) {
            console.error("Error during Sign up:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Event Center - Sign Up</title>
                <meta
                    name="description"
                    content="Create your Event Center account to start booking and managing events with ease."
                />
                <meta property="og:title" content="Event Center - Sign Up"/>
                <meta
                    property="og:description"
                    content="Join Event Center today and experience a convenient way to book and manage your parties and events."
                />
                <meta
                    name="keywords"
                    content="event center register, sign up, create account, party booking, event booking, online registration"
                />
            </Helmet>
            {/* End Helmet */}

            <AuthWrapper page='sign up'>
                <Form {...form}>
                    <form
                        autoComplete="off"
                        onSubmit={form.handleSubmit((values) => onSubmit(values))}
                        className="space-y-1.5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <InputForm type="text" placeholder="Enter your name" {...field} />
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
                                    <FormControl>
                                        <InputIcon
                                            icon={<Mail className="size-4"/>}
                                            placeholder="Enter your email"
                                            {...field}
                                        />
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
                                    <FormControl>
                                        <InputIcon
                                            type="tel"
                                            icon={<Phone className="size-4"/>}
                                            placeholder="Enter your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <InputPassword
                                            placeholder="Enter your password"
                                            {...field}
                                        ></InputPassword>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <InputPassword
                                            placeholder="Confirm your password"
                                            {...field}
                                        />
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
                                    <FormControl>
                                        <InputIcon
                                            icon={<MapPin className="size-4"/>}
                                            placeholder="Enter your address"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="acceptTerms"
                            render={({field}) => (
                                <FormItem>
                                    <div className="flex items-center gap-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm cursor-pointer">
                                            I agree to the terms and conditions and privacy policy
                                        </FormLabel>
                                    </div>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" isLoading={isSubmitting} disabled={isSubmitting}>
                            Sign up
                        </Button>
                    </form>
                </Form>
            </AuthWrapper>
        </>
    );
};

export default SignUp;
