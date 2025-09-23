// ** React
import {useState} from "react";

// ** react helmet
import {Helmet} from "react-helmet-async";

// ** React hook form
import {useForm} from "react-hook-form";

// ** React router
import {Link, useNavigate} from "react-router-dom";

// ** zod
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ** Components
import {InputForm} from "@/pages/auth/components/input";
import {InputPassword} from "@/components/input";

// ** Shadcn ui
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";

// ** Pages
import AuthWrapper from "@/pages/auth/components/auth.wrapper.tsx";

// ** services
import {signIn} from "@/services/auth";

// ** reac hot toast
import toast from "react-hot-toast";

// ** Configs
import {ROLE} from "@/configs/role.ts";

const formSchema = z.object({
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(1, 'Password is required'),
});

export type SignInForm = z.infer<typeof formSchema>;

const SignIn = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<SignInForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: SignInForm) {
        setIsSubmitting(true);
        try {
            const result = await signIn(values);

            if (!result) {
                return toast.error(
                    "Sign in failed. Please check your credentials!"
                );
            }
            toast.success("Sign in successful!");

            if (result.role ===  ROLE.ADMIN) return navigate("/dashboard");

            return navigate("/");
        } catch (error) {
            console.error("Sign in error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Helmet>
                <title>Event Center - Sign In</title>
                <meta
                    name="description"
                    content="Sign in to Event Center to manage your bookings and events easily."
                />
                <meta property="og:title" content="Event Center - Sign In"/>
                <meta
                    property="og:description"
                    content="Access your Event Center account to book, manage, and track your parties and events."
                />
                <meta
                    name="keywords"
                    content="event center login, sign in, party booking, event booking, account access"
                />
            </Helmet>

            <AuthWrapper page='sign in'>
                <Form {...form}>
                    <form
                        autoComplete="off"
                        onSubmit={form.handleSubmit((values) => onSubmit(values))}
                        className="space-y-1.5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <InputForm type="email" placeholder="Enter your email" {...field} />
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
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-end mb-3">
                            <Link to="/forgot-password" className="text-sm text-[#4E545F] hover:text-black">
                                Forgot password?
                            </Link>
                        </div>
                        <Button type="submit" size='full' isLoading={isSubmitting} disabled={isSubmitting}>
                            Sign In
                        </Button>
                    </form>
                </Form>
            </AuthWrapper>
        </>
    )
}

export default SignIn