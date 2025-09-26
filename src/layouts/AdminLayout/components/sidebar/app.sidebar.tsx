// ** React
import {useEffect, useState} from "react"

// ** React Router
import {Link, useNavigate} from "react-router-dom";

// ** Lucide Icon
import {
    ChefHat,
    LogOut,
    ChevronRight,
} from "lucide-react"

// ** Shadncn ui
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarRail,
} from "@/components/ui/sidebar"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ** lib
import {cn} from "@/lib/utils"

// ** types
import type {TProfile} from "@/types/data";

// ** services
import {getProfile, logout} from "@/services/auth";

// ** configs
import {MAIN_NAV} from "@/configs/layouts.tsx";


const AppSideBar = () => {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

    const [infoProfile, setInfoProfile] = useState<TProfile | null>(null)

    const navigate = useNavigate()
    useEffect(() => {

        const fetchInfoProfile = async () => {
            try {
                const data = await getProfile()
                setInfoProfile(data)
            } catch (error) {
                console.error("Failed to load profile:", error)
            }
        }

        fetchInfoProfile()
    }, []);

    const toggleMenu = (title: string) => {
        setOpenMenus((prev) => ({...prev, [title]: !prev[title]}))
    }

    const handleLogout = async () => {
        await logout()
        navigate("/sign-in")
    }

    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/dashboard">
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                                    <ChefHat className="size-4"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Event Center</span>
                                    <span className="truncate text-xs">Admin Dashboard</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {MAIN_NAV.map((item) => {
                                const Icon = item.icon
                                const isOpen = openMenus[item.title] ?? false
                                const hasChildren = !!item.children?.length

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton onClick={() => hasChildren ? toggleMenu(item.title) : null}
                                                           asChild>
                                            {item.url && !hasChildren ? (
                                                <Link to={item.url} className="cursor-pointer">
                                                    <Icon className="w-4 h-4"/>
                                                    <span>{item.title}</span>
                                                </Link>
                                            ) : (
                                                <div
                                                    className="flex items-center justify-between w-full cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <Icon className="w-4 h-4"/>
                                                        <span>{item.title}</span>
                                                    </div>
                                                    {hasChildren && (
                                                        <ChevronRight
                                                            className={cn("w-4 h-4 transition-transform", isOpen && "rotate-90")}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                        </SidebarMenuButton>

                                        {hasChildren && isOpen && (
                                            <SidebarMenuSub
                                                className="ml-4 border-l border-sidebar-border pl-4 cursor-pointer">
                                                {item.children && item.children.length > 0 && item?.children.map((sub) => (
                                                    <SidebarMenuItem key={sub.title}>
                                                        <SidebarMenuButton asChild size="sm">
                                                            <Link to={sub.url}>{sub.title}</Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                            </SidebarMenuSub>
                                        )}
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <SidebarMenuButton size="lg">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={infoProfile?.avatar || ''} alt={infoProfile?.name}/>
                                        <AvatarFallback className="rounded-lg">CE</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{infoProfile?.name}</span>
                                        <span className="truncate text-xs">{infoProfile?.email}</span>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="bottom" align="end" className="min-w-56 rounded-lg">
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4"/>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}


export default AppSideBar