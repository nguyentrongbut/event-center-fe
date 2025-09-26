// ** Components
import MenuCard from "@/components/menu/menu.card.tsx";

// ** types
import type {TDish, TMenu} from "@/types/data";

type TListMenuProps = {
    menus:TMenu[]
    isAdminView?: boolean;
    listDish?: TDish[];
    onReload?: () => void
};

const ListMenu = ({menus, listDish, isAdminView = false, onReload}: TListMenuProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {menus.map((menu) => (
                <MenuCard
                    isAdminView={isAdminView}
                    key={menu.id}
                    id={menu.id}
                    name={menu.name}
                    dishes={menu.dishes}
                    price={menu.price}
                    listDish={listDish}
                    onReload={onReload}
                />
            ))}
        </div>
    )
}

export default ListMenu