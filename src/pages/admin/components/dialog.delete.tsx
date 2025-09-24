// ** React
import {useState} from "react"

// ** Shadcn ui
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button"

// ** Lucide Icon
import {AlertTriangle} from "lucide-react"

// ** React hot toast
import toast from "react-hot-toast";

interface IDialogDeleteProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    name: string
    onConfirm: () => Promise<boolean>
    successMessage?: string
    errorMessage?: string
}

const DialogDelete = ({
                          open,
                          onOpenChange,
                          name,
                          onConfirm,
                          successMessage,
                          errorMessage
                      }: IDialogDeleteProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async () => {
        setIsLoading(true)
        try {
            const result = await onConfirm()
            if (!result) return toast.error(errorMessage || `Unable to delete ${name}`)
            toast.success(successMessage || `${name} has been successfully deleted`)
            onOpenChange(false)
        } catch (error) {
            console.error(error)
            toast.error(errorMessage || `Error deleting ${name}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="w-5 h-5"/>
                        Confirm deletion of {name}
                    </DialogTitle>
                </DialogHeader>

                <div className="text-sm text-muted-foreground px-1 py-2">
                    Are you sure you want to delete <strong>{name}</strong>? This action cannot be undone.
                </div>

                <DialogFooter className="flex justify-end gap-2">
                    <DialogClose asChild>
                        <Button variant="outline" disabled={isLoading}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        className="text-white"
                        onClick={handleDelete}
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDelete
