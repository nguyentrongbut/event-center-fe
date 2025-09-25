// ** React
import React from "react";

// * React router
import {Link} from "react-router-dom";

// ** components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";

// ** Shadcn ui
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

type BreadcrumbEntry = {
    label: string;
    href?: string;
};

type HeaderSectionProps = {
    title: string;
    backgroundImage?: string;
    breadcrumbs: BreadcrumbEntry[];
};

const HeaderSection = ({
                         title,
                         backgroundImage = "https://trongdongpalace.com/wp-content/uploads/2024/08/Feedback.webp",
                         breadcrumbs}: HeaderSectionProps) => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <ImgWPlaceholder
                    src={backgroundImage}
                    alt={title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30"/>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center mx-auto px-4">
                <h1 className="text-6xl text-white">{title}</h1>
                <Breadcrumb className="mt-6">
                    <BreadcrumbList>
                        {breadcrumbs.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <BreadcrumbItem>
                                    {item.href ? (
                                        <BreadcrumbLink asChild>
                                            <Link
                                                to={item.href}
                                                className="text-white hover:text-white text-base"
                                            >
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="text-white text-base">
                                            {item.label}
                                        </BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {idx < breadcrumbs.length - 1 && (
                                    <BreadcrumbSeparator>
                                        <span className="text-white/60">/</span>
                                    </BreadcrumbSeparator>
                                )}
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </section>
    );
};

export default HeaderSection;
