// ** React
import type {ReactNode} from "react";

// ** React router
import {Link} from "react-router-dom";

// ** lib
import {cn} from "@/lib/utils.ts";

// ** Shadcnui
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx"

// ** Components
import Logo from "@/components/common/logo.tsx";

interface IAuthWrapperProps {
    children: ReactNode,
    className?: string
    page: 'sign in' | 'sign up'
}

const AuthWrapper = ({children, className, page}: IAuthWrapperProps) => {
    const linkPage = page === 'sign in' ? 'sign-up' : 'sign-in';
    return (
        <div className={cn('bg-primaryColor w-full min-h-screen flex justify-center items-center py-20', className)}>
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center">
                        <Logo size='lg'/>
                    </div>
                    <p className="text-gray-600 mt-2 dark:text-white">Welcome back! Please {page} to your account.</p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className='capitalize text-lg'>{page}</CardTitle>
                        <CardDescription className='first-letter:capitalize'>{page} to book amazing catering
                            services</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {page === 'sign in' ? "Don't a have" : 'Have an'} account?
                        <Link to={`/${linkPage}`}
                              className="text-black font-semibold hover:underline ml-2 capitalize">
                            {linkPage === 'sign-in' ? 'sign in' : 'sign up'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthWrapper