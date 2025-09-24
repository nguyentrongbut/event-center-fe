// ** React router
import {Link} from "react-router-dom";

// ** Shadcn ui
import {Button} from "@/components/ui/button";

// ** Lucide Icon
import {Plus} from "lucide-react";

interface PageHeaderWithCreateButtonProps {
    title: string;
    createUrl: string;
    buttonLabel?: string;
}
const TitleWithCreateBtn = (
    {
        title,
        createUrl,
        buttonLabel = "Create new",
    }: PageHeaderWithCreateButtonProps
) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <Link to={createUrl}>
                <Button>
                    <Plus className="size-4 mr-2"/>
                    {buttonLabel}
                </Button>
            </Link>
        </div>
    )
}

export default TitleWithCreateBtn