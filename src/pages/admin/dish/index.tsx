// ** React
import {useEffect, useState} from "react";

// ** Components
import {HeadingAdmin} from "@/components/typography/admin";
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";

// ** Shadcn ui
import {Card} from "@/components/ui/card";

// ** Pages
import ActionDish from "@/pages/admin/dish/components/action.dish.tsx";
import DialogCreateDish from "@/pages/admin/dish/components/dialog.create.dish.tsx";

// ** Services
import {getListDish} from "@/services/dishes";

// ** types
import type {TDish} from "@/types/data";

interface IDishCardItem {
    id: number,
    name: string,
    onReload: () => void,
}

const DishCardItem = ({id, name, onReload}: IDishCardItem) => {
    return (
        <Card className="flex justify-center items-center relative">
            {name}
            <div className="absolute right-4 top-4 cursor-pointer">
                <ActionDish id={id} name={name} onReload={onReload}/>
            </div>
        </Card>
    )
}

const Dish = () => {
    const [listDish, setListDish] = useState<TDish[]>([])

    const fetchListDish = async () => {
        try {
            const data = await getListDish()
            setListDish(data)
        } catch (error) {
            console.error("Failed to load dish:", error)
        }
    }

    useEffect(() => {
        fetchListDish()
    }, [])

    return (
        <ContainerAdmin>
            <div className="flex justify-between items-center mb-4">
                <HeadingAdmin>Lish Dish</HeadingAdmin>
                <DialogCreateDish onReload={fetchListDish}/>
            </div>
            {listDish.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listDish?.map((dish) => (
                        <DishCardItem key={dish.id} id={dish.id!} name={dish.name} onReload={fetchListDish}/>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No dishes found. Create a new one now.</p>
            )}
        </ContainerAdmin>
    )
}

export default Dish