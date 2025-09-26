// ** React
import { useState } from "react";

// ** Components
import DialogDelete from "@/components/common/admin/dialog.delete.tsx";
import FormEditMenu from "@/components/menu/form.edit.menu.tsx";

// ** Shadcn ui
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";

// ** Lucide Icon
import { Pen, Trash2 } from "lucide-react";

// ** types
import type {TDish, TMenu} from "@/types/data";

// ** Services
import {deleteMenu} from "@/services/menus";

type TEditMenu = TMenu & {
    listDish: TDish[];
    onReload?: () => void
}

const ActionMenu = ({ id, name, price, dishes, listDish, onReload }: TEditMenu) => {
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)

    return (
        <>
            <div
                className="hover:text-red-600 transition cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <Trash2 className="size-4" />
            </div>

            <DialogDelete
                open={open}
                onOpenChange={setOpen}
                name="menu"
                onConfirm={() => deleteMenu(id!)}
                successMessage="Menu deleted successfully"
                errorMessage="Failed to delete menu, please try again"
                onReload={onReload}
            />

            <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
                <DialogTrigger asChild>
                    <div className="hover:text-gray-700 transition cursor-pointer">
                        <Pen className="size-4" />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Update Menu
                        </DialogTitle>
                    </DialogHeader>
                    <FormEditMenu
                        id={id!}
                        name={name}
                        price={price}
                        dishesInMenu={dishes}
                        allDishes={listDish}
                        onReload={onReload}
                        onSuccess={() => setOpenUpdate(false)}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ActionMenu;
