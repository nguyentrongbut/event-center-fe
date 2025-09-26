// ** Shadcn ui
import {DialogClose, DialogHeader, DialogTitle} from "@/components/ui/dialog";

// ** Lucide Icon
import {X} from "lucide-react";

const DialogHeaderSticky = ({title}: { title: string }) => {
    return (
        <div className="sticky top-0 z-50 bg-background flex items-center justify-between p-6 border-b border-darkGray/10 dark:border-white/10">
            <DialogHeader className="m-0">
                <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogClose>
                <X className="size-4"/>
            </DialogClose>
        </div>
    )
}

export default DialogHeaderSticky