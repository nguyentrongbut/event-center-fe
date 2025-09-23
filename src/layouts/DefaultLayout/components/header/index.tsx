// ** React
import {useEffect, useState} from "react";

// ** React router
import {Link, useNavigate} from "react-router-dom";

// ** Layouts
import NavMobileMenu from "@/layouts/DefaultLayout/components/header/components/nav.mobile.menu.tsx";
import Nav from "@/layouts/DefaultLayout/components/header/components/nav";

// ** Components
import Container from "@/components/common/container.tsx";
import Logo from "@/components/common/logo.tsx";
import {TextIcon} from "@/components/typography";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

// ** Lucide Icon
import {Calendar, LogOut, Phone, User} from "lucide-react";

// ** Service
import {getProfile, logout} from "@/services/auth";

// ** types
import type {TProfile} from "@/types/data";
import toast from "react-hot-toast";

// ** Hooks
import useTailwindBreakpoints from "@/hooks/useTailwindBreakpoints.tsx";

interface IUserDropdownProps {
    infoProfile: TProfile;
    handleLogout: () => void;
}

const UserDropdown = ({infoProfile, handleLogout}: IUserDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className='size-10 sm:size-11'>
                    <AvatarImage src={infoProfile?.avatar || '/default-avatar.png'}
                                 alt={infoProfile?.name}
                    />
                    <AvatarFallback>
                        <img
                            src={infoProfile?.avatar || "/default-avatar.png"}
                            alt="@shadcn"
                            width={50}
                            height={50}
                            className="object-cover size-9"
                        />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" sideOffset={10}>
                <p className="text-sm py-1.5 px-2 my-1 max-w-[123px]">
                    <b className="line-clamp-1 capitalize">
                        Hello {infoProfile?.name}!
                    </b>
                </p>
                <DropdownMenuItem asChild>
                    <TextIcon
                        to="/profile"
                        icon={<User className="size-4"/>}
                    >
                        Profile
                    </TextIcon>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <TextIcon icon={<LogOut className="size-4"/>} onClick={handleLogout}>
                        Logout
                    </TextIcon>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const Header = () => {

    const navigate = useNavigate();
    const {isLg} = useTailwindBreakpoints()

    const [infoProfile, setInfoProfile] = useState<TProfile | null>(null)
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

    const handleLogout = async () => {
        try {
            const result = await logout()
            if (result) {
                toast.success('Logout Successfully')
                return navigate("/sign-in")
            }

        } catch (error) {
            console.error("Failed to logout:", error)
        }
    }
    return (
        <header className="bg-primaryColor backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 py-5">
            <Container>
                <div className="flex items-center justify-between h-16">

                    <Logo/>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <Nav/>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="tel:0987654321"
                              className="flex items-center cursor-pointer text-red-600 hover:text-red-800 mr-4">
                            <Phone className="size-5 mr-2"/>
                            Hotline
                        </Link>
                        <Link to="/booking">
                            <Button className="bg-primary cursor-pointer">
                                <Calendar className="size-4 mr-2"/>
                                Book Event
                            </Button>
                        </Link>
                        {!infoProfile ? (
                            <Link to="/sign-in">
                                <Button variant='secondary'>
                                    <User className="size-4 mr-2"/>
                                    Sign in
                                </Button>
                            </Link>
                        ) : (
                            isLg ? <UserDropdown infoProfile={infoProfile} handleLogout={handleLogout}/> : <span></span>
                        )}
                    </div>

                    {/* Mobile Navigation */}

                    {!isLg &&
                        <div className='flex justify-center items-center gap-8'>
                            <UserDropdown infoProfile={infoProfile as TProfile} handleLogout={handleLogout}/>
                            <NavMobileMenu/>
                        </div>
                    }

                </div>
            </Container>
        </header>
    )
}

export default Header