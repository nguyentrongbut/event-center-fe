// ** Components
import MenuCard from "@/components/menu/menu.card.tsx";

// ** types
import type {TDish, TMenu} from "@/types/data";

const ListMenu = ({menus, listDish}:{menus:TMenu[], listDish?:TDish[]}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {menus.map((menu) => (
                <MenuCard
                    hover
                    key={menu.id}
                    id={menu.id}
                    name={menu.name}
                    dishes={menu.dishes}
                    price={menu.price}
                    listDish={listDish}
                />
            ))}
        </div>
    )
}

export default ListMenu