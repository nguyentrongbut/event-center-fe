// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";
import EntityActions from "@/components/common/admin/entity.actions.tsx";

// ** React Table
import type {ColumnDef} from "@tanstack/react-table";

// ** Lucide Icon
import {ArrowUpDown} from "lucide-react";

// ** utils
import {formatCurrency} from "@/utils/format.ts";

// ** types
import type {TService} from "@/types/data";

// ** services
import {deleteService} from "@/services/services";

export const columnsService = (
    fetchListService: () => Promise<void>
): ColumnDef<TService>[] => [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Service Name
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "images",
        header: "Image",
        cell: ({row}) => {
            const name: string = row.getValue("name");
            const images: string[] = row.getValue("images");
            const image = images[0];

            return (
                <div className="w-[100px] h-[80px] flex items-center justify-center">
                    <ImgWPlaceholder
                        src={image}
                        alt={name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            );
        },
    },
    {
        accessorKey: "price",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
        cell: ({row}) => {
            const price: number = row.getValue("price");

            return (
                <div className="text-primary">
                    {formatCurrency(price)}
                </div>
            );
        },
    },
    {
        accessorKey: "icon",
        header: "Icon",
    },

    {
        accessorKey: "description",
        header: "Description",
        cell: ({row}) => {
            const description: string = row.getValue("description");

            return (
                <div className="lg:max-w-[400px] truncate text-wrap line-clamp-5">
                    {description}
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({row}) => {
            const service = row.original;
            const serviceId = service.id;
            return (
                <EntityActions
                    id={serviceId}
                    viewUrl={`/dashboard/service/view/${serviceId}`}
                    editUrl={`/dashboard/service/edit/${serviceId}`}
                    entityName="service"
                    onDelete={() => deleteService(serviceId)}
                    onReload={fetchListService}
                />
            )
        },
    },
];
