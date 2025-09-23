// ** Layouts
import NavListMobile from "@/layouts/DefaultLayout/components/header/components/nav/nav.list.mobile.tsx";

// ** Components
import Logo from "@/components/common/logo.tsx";

// ** Shadcn ui
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";

// ** Lucide icon
import {ChevronRight, Menu} from "lucide-react";

// ** Configs
import {listDropdownNav, listNav} from "@/configs/layout.tsx";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";
import {Link} from "react-router-dom";

const NavMobileMenu = () => {
    const infoProfile = false;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="size-5 cursor-pointer text-primary"/>
            </SheetTrigger>
            <SheetContent side="left" className="w-60">
                <div className="p-6">
                    <SheetTitle className="mt-4 flex">
                        <Logo/>
                    </SheetTitle>
                    {infoProfile ? (
                        <div>dkd</div>
                    ) : (
                        <nav className="flex flex-col space-y-3 mt-10 text-sm text-gray-500 dark:text-gray-300">
                            <Collapsible className="group">
                                <CollapsibleTrigger asChild>
                                    <div
                                        className="w-full cursor-pointer flex items-center justify-between text-sm hover:text-amber-600 transition-colors">
                                        Dịch vụ
                                        <ChevronRight
                                            className="size-4 transition-transform group-data-[state=open]:rotate-90"/>
                                    </div>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <div className="ml-4 mt-3 flex flex-col space-y-2">
                                        {listDropdownNav.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className="text-[13px] text-gray-600 hover:text-primary transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <NavListMobile list={listNav}/>
                        </nav>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavMobileMenu;