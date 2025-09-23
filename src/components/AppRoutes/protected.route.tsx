// ** React
import type {ReactNode} from "react";

// ** React router
import {Navigate} from "react-router-dom";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** types
import type {TSignIn} from "@/types/data";

type ProtectedRouteProps = {
    children: ReactNode;
    redirectTo?: string;
    roles?: string[];
    guestOnly?: boolean;
};

export const ProtectedRoute = ({
                                   children,
                                   redirectTo = "/sign-in",
                                   roles,
                                   guestOnly = false,
                               }: ProtectedRouteProps) => {

    const userCookie = getCookie("ECTA-info");

    const user: TSignIn | null = userCookie ? JSON.parse(userCookie) : null;

    //  when login redirect home
    if (guestOnly && user) return <Navigate to="/" replace/>;

    // when not login thì redirect
    if (!guestOnly && !user) return <Navigate to={redirectTo} replace/>;

    // check role if role invalid redirect
    if (roles && user && !roles.includes(user.role)) return <Navigate to="/" replace/>;

    return <>{children}</>;
};
