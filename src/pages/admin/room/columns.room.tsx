// ** React table
import type {ColumnDef} from "@tanstack/react-table";

// ** Lucide Icon
import { ArrowUpDown, Dice6, User } from "lucide-react";

// ** Components
import ImgWPlaceholder from "@/components/common/img.w.placeholder";
import EntityActions from "@/components/common/admin/entity.actions.tsx";

// ** Types
import type {TRoom} from "@/types/data";

// ** utils
import {formatCurrency} from "@/utils/format.ts";

// ** services
import {deleteRoom} from "@/services/room";

export const columnsRoom: ColumnDef<TRoom>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Room Name
                    <ArrowUpDown className="ml-2 size-4" />
                </div>
            )
        },
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
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 size-4" />
                </div>
            )
        },
        cell: ({ row }) => {
            const price: number = row.getValue("price");

            return (
                <div className="text-primary">
                    {formatCurrency(price)}
                </div>
            );
        },
    },
    {
        accessorKey: "area",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Area
                    <ArrowUpDown className="ml-2 size-4" />
                </div>
            )
        },
    },
    {
        accessorKey: "people",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Capacity
                    <ArrowUpDown className="ml-2 size-4" />
                </div>
            )
        },
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
        accessorKey: "table",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Table Count
                    <ArrowUpDown className="ml-2 size-4" />
                </div>
            )
        },
        cell: ({ row }) => {
            const table: never = row.getValue("table");

            return (
                <div className="flex gap-2 items-center">
                    <span>{table}</span>
                    <Dice6 className="size-4" />
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const room = row.original;
            const roomId = room.id;
            return (
                <EntityActions
                    id={roomId}
                    editUrl={`/dashboard/venue/room/edit/${roomId}`}
                    entityName="room"
                    onDelete={() => deleteRoom(roomId)}
                />
            )
        },
    },
];
