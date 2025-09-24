// ** React
import {useState} from "react";

// ** Components
import FormCreateMenu from "@/components/menu/form.create.menu.tsx";

// ** Shadcn ui
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

// ** Lucide Icon
import {Plus} from "lucide-react";

// ** types
import type {TOption} from "@/types";

const DialogCreateMenu = ({dishes} : {dishes: TOption[]}) => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="size-4 mr-2"/>
                    Create Menu
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Menu</DialogTitle>
                </DialogHeader>
                <FormCreateMenu dishes={dishes} onSuccess={() => setOpen(false)}/>
            </DialogContent>
        </Dialog>
    )
}

export default DialogCreateMenu;