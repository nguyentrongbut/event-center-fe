// ** React
import { useState } from "react";

// ** React router
import {Link} from "react-router-dom";

// ** Components
import DialogDelete from "@/components/common/admin/dialog.delete.tsx";

// ** Shadcn ui
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// ** Lucide Icon
import { Trash2, Edit, Eye, MoreHorizontal } from "lucide-react";

interface EntityActionsProps {
    id: number;
    viewUrl?: string;
    editUrl: string;
    entityName: string;
    onDelete: () => Promise<void>;
}

const EntityActions = ({
                           viewUrl,
                           editUrl,
                           entityName,
                           onDelete,
                       }: EntityActionsProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="size-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {viewUrl && (
                        <DropdownMenuItem asChild>
                            <Link to={viewUrl} className="flex items-center gap-2">
                                <Eye className="size-4" />
                                <span>View Details</span>
                            </Link>
                        </DropdownMenuItem>
                    )}

                    <DropdownMenuItem asChild>
                        <Link to={editUrl} className="flex items-center gap-2">
                            <Edit className="size-4" />
                            <span>Edit</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        className="text-red-600 cursor-pointer"
                        onSelect={() => setOpen(true)}
                    >
                        <Trash2 className="mr-2 size-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogDelete
                open={open}
                onOpenChange={setOpen}
                name={entityName}
                onConfirm={async () => {
                    await onDelete()
                    return true
                }}
                successMessage={`Successfully deleted ${entityName}`}
                errorMessage={`Failed to delete ${entityName}, please try again`}
            />
        </div>
    );
};

export default EntityActions;
