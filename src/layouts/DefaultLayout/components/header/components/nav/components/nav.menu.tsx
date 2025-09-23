// ** Shadcn ui
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

// ** Layouts
import DropdownNav from "@/layouts/DefaultLayout/components/header/components/nav/components/dropdown.nav.tsx";

// ** Configs


const NavMenu = () => {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <DropdownNav/>
                {/*<NavList list={listNav}></NavList>*/}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavMenu