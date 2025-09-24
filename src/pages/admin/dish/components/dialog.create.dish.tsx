// ** React
import {useState} from "react";

// ** Pages
import FormCreateDish from "@/pages/admin/dish/components/form.create.dish.tsx";

// ** Shadcn ui
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

// ** Lucide Icon
import {Plus} from "lucide-react";

const DialogCreateDish = () => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="size-4 mr-2"/>
                    Add New Dish
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Add New Dish</DialogTitle>
                </DialogHeader>
                <FormCreateDish onSuccess={() => setOpen(false)}/>
            </DialogContent>
        </Dialog>
    )
}

export default DialogCreateDish