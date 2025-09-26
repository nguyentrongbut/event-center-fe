// ** React table
import type {ColumnDef} from "@tanstack/react-table";

// ** Lucide Icon
import { ArrowUpDown, User } from "lucide-react";

// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";
import EntityActions from "@/components/common/admin/entity.actions.tsx";

// ** types
import type {TVenue} from "@/types/data";

// ** services
import {deleteVenue} from "@/services/venues";

export const columnsVenue = (
    fetchListVenue: () => Promise<void>
): ColumnDef<TVenue>[] => [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Venue Name
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const name: string = row.getValue("name");
            const image: string = row.getValue("image");

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
        accessorKey: "area",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Area
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "people",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Capacity
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const people: never = row.getValue("people");

            return (
                <div className="flex gap-2 items-center">
                    <span>{people}</span>
                    <User className="size-4" />
                </div>
            );
        },
    },
    {
        accessorKey: "address",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Address
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            const description: string = row.getValue("description");

            return (
                <div className="lg:max-w-[200px] truncate text-wrap line-clamp-4">
                    {description}
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const venue = row.original;
            const venueId = venue.id;
            const venueSlug = venue.slug;

            return (
                <EntityActions
                    id={venueId}
                    viewUrl={`/dashboard/venue/view/${venueSlug}`}
                    editUrl={`/dashboard/venue/edit/${venueSlug}`}
                    entityName="venue"
                    onDelete={() => deleteVenue(venueId)}
                    onReload={fetchListVenue}
                />
            );
        },
    },
];
