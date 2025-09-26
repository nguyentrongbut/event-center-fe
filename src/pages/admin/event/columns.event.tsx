// ** React table
import type {ColumnDef} from "@tanstack/react-table";

// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";
import EntityActions from "@/components/common/admin/entity.actions.tsx";

// ** Lucide Icon
import {ArrowUpDown} from "lucide-react";

// ** types
import type {TEvent} from "@/types/data";

// ** Services
import {deleteEvent} from "@/services/events";


export const columnsEvent = (
    fetchListEvent: () => Promise<void>
): ColumnDef<TEvent>[] => [
    {
        accessorKey: "subName",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tên
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "slug",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Slug
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "images",
        header: "Hình ảnh",
        cell: ({row}) => {
            const name = row.getValue("name");
            const images: string[] = row.getValue("images")
            const image = images[0]

            return (
                <div className="w-[100px] h-[80px] flex items-center justify-center">
                    <ImgWPlaceholder
                        src={image}
                        alt={name as string}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-lg"
                    />
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
        header: "Miêu tả",
        cell: ({row}) => {
            const description: string = row.getValue("description")

            return (
                <div className="lg:max-w-[300px] truncate text-wrap line-clamp-4">
                    {description}
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({row}) => {
            const event = row.original;
            const eventId = event.id;
            const eventSlug = event.slug
            return (
                <EntityActions
                    id={eventId}
                    viewUrl={`/dashboard/event/view/${eventSlug}`}
                    editUrl={`/dashboard/event/edit/${eventSlug}`}
                    entityName="event"
                    onDelete={() => deleteEvent(eventId)}
                    onReload={fetchListEvent}
                />
            )
        },
    },
]