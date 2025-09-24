// ** React router
import { useLocation, Link } from "react-router-dom";

// ** Shadcn ui
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

// ** Configs
import {breadcrumbLabels} from "@/configs/layouts.tsx";


const HeaderAdmin = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter((seg) => seg);

    // find segment "view", "create", "edit"
    const specialIndex = pathSegments.findIndex((seg) =>
        ["view", "create", "edit"].includes(seg)
    );

    const visibleSegments =
        specialIndex !== -1
            ? pathSegments.slice(0, specialIndex + 1)
            : pathSegments;

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />

                <Breadcrumb>
                    <BreadcrumbList>
                        {visibleSegments.map((segment, index) => {
                            const href = "/" + visibleSegments.slice(0, index + 1).join("/");
                            const label =
                                breadcrumbLabels[segment] || decodeURIComponent(segment);
                            const isLast = index === visibleSegments.length - 1;
                            const isActionPage = ["view", "create", "edit"].includes(segment);

                            return (
                                <div className="flex gap-2 items-center" key={href}>
                                    <BreadcrumbItem>
                                        {isLast || isActionPage ? (
                                            <BreadcrumbPage className="capitalize">{label}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink asChild>
                                                <Link to={href} className="capitalize">
                                                    {label}
                                                </Link>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {!isLast && !isActionPage && (
                                        <BreadcrumbSeparator className="mt-1" />
                                    )}
                                </div>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default HeaderAdmin;
