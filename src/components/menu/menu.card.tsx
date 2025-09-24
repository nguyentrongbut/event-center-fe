// ** Components
import ActionMenu from "@/components/menu/action.menu.tsx";

// ** utils
import {formatCurrency} from "@/utils/format.ts";

// ** types
import type {TDish, TMenu} from "@/types/data";


type TMenuProps = TMenu & {
    hover?: boolean;
    listDish?: TDish[];
};

const MenuCard = ({ id, name, price, dishes, hover, listDish }: TMenuProps) => {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-md transition hover:shadow-lg">
            <div
                className="relative bg-cover bg-center px-6 py-8 text-center text-[#333] h-[540px] w-full bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://datcotainha24h.vn/wp-content/uploads/2022/10/Menu-1-1.png")',
                    backgroundSize: "100% 100%",
                }}
            >

                <div className="relative w-[90%] h-[60px] mx-auto mb-4">
                    <img
                        src="https://datcotainha24h.vn/wp-content/uploads/2022/10/vectormenu.png"
                        alt="Decorative banner"
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl lg:text-lg xl:text-2xl">
                        {name}
                    </div>
                </div>

                <div className="text-amber-600 text-xl italic font-semibold mb-2">
                    {formatCurrency(price)} / people
                </div>

                <img
                    src="https://datcotainha24h.vn/wp-content/uploads/2022/10/Vector-7.png"
                    alt="decorative"
                    className="mx-auto mb-4"
                    width={45}
                />

                <div className="space-y-1 text-[15px] text-gray-800">
                    {dishes.map((item, index) => (
                        <p key={index} className="truncate">{item.name}</p>
                    ))}
                </div>
            </div>

            {hover && (
                <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white border rounded-md p-2 shadow-lg flex flex-col gap-2"
                >
                    <ActionMenu
                        id={id!}
                        name={name}
                        dishes={dishes}
                        price={price}
                        listDish={listDish!}
                    />
                </div>
            )}
        </div>
    );
};

export default MenuCard;
