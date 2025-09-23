// ** React router
import { Link } from "react-router-dom";

// ** Shadcn ui
import {
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu.tsx";

// ** types
import type {TLink} from "@/types";

interface NavListProps {
    list: TLink[];
    variant?: "default" | "dropdown";
}

const NavList = ({ list, variant = "default" }: NavListProps) => {
    return (
        <>
            {list.map((item, index) => {
                let title = "";
                let href = "";

                if ("title" in item && "href" in item) {
                    title = item.title;
                    href = item.href;
                } else if ("subName" in item && "slug" in item) {
                    title = item?.subName;
                    href = `/event/${item?.slug}`;
                }

                if (variant === "dropdown") {
                    return (
                        <Link
                            key={index}
                            to={href}
                            className="block px-4 py-2 text-slate-700 hover:text-primary transition-colors"
                        >
                            {title}
                        </Link>
                    );
                }

                return (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                            <Link
                                to={href}
                                className="text-slate-700 hover:text-primary transition-colors hover:bg-transparent font-normal"
                            >
                                {title}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                );
            })}
        </>
    );
};

export default NavList;
