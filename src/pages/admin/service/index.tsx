// ** React
import {useEffect, useState} from "react";

// ** React router
import {Link} from "react-router-dom";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";
import {DataTable} from "@/components/common/admin/data.table.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";

// ** Lucide Icon
import {Plus} from "lucide-react";

// ** columns
import {columnsService} from "@/pages/admin/service/columnsService.tsx";

// ** types
import type {TService} from "@/types/data";

// ** services
import {getListService} from "@/services/services";

const Service = () => {

    const [listService, setListService] = useState<TService[]>([])

    useEffect(() => {
        const fetchListService = async () => {
            const data = await getListService()
            setListService(data)
        }

        fetchListService()
    }, [])

     return (
        <ContainerAdmin>
            <div className="flex justify-between items-center mb-4">
                <HeadingAdmin>
                    List Service
                </HeadingAdmin>
                <Link to="/dashboard/service/create">
                    <Button>
                        <Plus className="size-4 mr-2"/>
                        Add new service
                    </Button>
                </Link>
            </div>
            <DataTable columns={columnsService} data={listService} />
        </ContainerAdmin>
    )
}

export default Service