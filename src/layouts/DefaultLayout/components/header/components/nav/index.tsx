// ** Shadcn ui
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

// ** Layouts
import DropdownNav from "@/layouts/DefaultLayout/components/header/components/nav/components/dropdown.nav.tsx";
import NavList from "@/layouts/DefaultLayout/components/header/components/nav/components/nav.list.tsx";

// ** Configs
import {listNav} from "@/configs/layouts.tsx";

const Nav = () => {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavList list={listNav}></NavList>
                <DropdownNav/>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Nav