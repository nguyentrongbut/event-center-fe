import type {ColumnDef} from "@tanstack/react-table";
import type {TBooking} from "@/types/data";
import {ArrowUpDown} from "lucide-react";

export const columnsBooking: ColumnDef<TBooking>[] = [
    {
        accessorKey: "orderCode",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Order Code
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "event.name",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Event Name
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "venue.name",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Venue
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "room.name",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Room
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
                Guest Count
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "eventDate",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Event Date
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "eventTime",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Event Time
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Status
                <ArrowUpDown className="ml-2 size-4" />
            </div>
        ),
    }
];
