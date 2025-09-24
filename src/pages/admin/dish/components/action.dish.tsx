// ** React
import {useState} from "react";

// ** Shadcn ui
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

// ** Lucide Icon
import {Edit, MoreHorizontal, Trash2} from "lucide-react";

// ** Pages
import DialogEditDish from "@/pages/admin/dish/components/dialog.edit.dish.tsx";
import DialogDelete from "@/pages/admin/components/dialog.delete.tsx";

// ** services
import {deleteDish} from "@/services/dishes";

const ActionDish = ({id, name}: { id: number, name: string }) => {

    const [open, setOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="size-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setOpen(true)}>
                        <Edit className="mr-2 size-4"/>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => setDeleteOpen(true)}>
                        <Trash2 className="mr-2 size-4"/>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogEditDish id={id} name={name} open={open} onOpenChange={setOpen}/>
            <DialogDelete
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                name="dish"
                onConfirm={() => deleteDish(id)}
                successMessage="Delete dish successfully"
                errorMessage="Delete dish failed"
            />
        </>
    )
}

export default ActionDish