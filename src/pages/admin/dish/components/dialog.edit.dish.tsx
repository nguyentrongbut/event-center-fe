// ** Shadcn ui
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

// ** Pages
import FormEditDish from "@/pages/admin/dish/components/form.edit.dish.tsx";


interface DialogEditDishProps {
    id: number
    name: string
    open: boolean
    onOpenChange: (open: boolean) => void
    onReload: () => void;
}

const DialogCreateDish = ({id, name, open, onOpenChange, onReload}: DialogEditDishProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Update name dish &apos;<span className="text-primary">{name}</span>&apos;
                    </DialogTitle>
                </DialogHeader>
                <FormEditDish id={id} name={name} onSuccess={() => onOpenChange(false)} onReload={onReload} />
            </DialogContent>
        </Dialog>
    )
}

export default DialogCreateDish