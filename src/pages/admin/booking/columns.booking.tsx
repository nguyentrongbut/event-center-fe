// ** React table
import type {ColumnDef} from "@tanstack/react-table";

// ** React hot toast
import toast from "react-hot-toast";

// ** Components


// ** Shadcn ui
import {Badge} from "@/components/ui/badge.tsx";

// ** Lucide Icon
import {ArrowUpDown} from "lucide-react";

// ** types
import type {TBooking} from "@/types/data";

// ** Services
import {changeStatus} from "@/services/booking";

export const columnsBooking = (
    fetchListBooking: () => Promise<void>
): ColumnDef<TBooking>[] => [
    {
        accessorKey: "orderCode",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Order Code
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "event.name",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Event Name
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "venue.name",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Venue
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "room.name",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Room
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "people",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    People
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "eventDate",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Event Date
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "eventTime",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Event Time
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({column}) => {
            return (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 size-4"/>
                </div>
            );
        },
        cell: ({row}) => {
            const status = row.getValue("status") as string;
            const bookingId = row.original.id;

            const statusMap: Record<string, { label: string; color: string }> = {
                pending: {label: "Pending", color: "bg-yellow-500"},
                confirmed: {label: "Confirmed", color: "bg-blue-500"},
                paid: {label: "Paid", color: "bg-green-500"},
                cancelled: {label: "Cancelled", color: "bg-red-500"},
            };

            const statusData = statusMap[status] ?? {
                label: "Unknown",
                color: "bg-gray-400",
            };

            const handleClick = async () => {

                try {
                    const result = await changeStatus(bookingId, status === "pending" ? "confirmed" : "pending");
                    if (!result) return toast.error("Error changing status");
                    fetchListBooking()
                    toast.success("Change status booking successfully.")

                } catch (e) {
                    console.error(e);
                }
            };

            return (
                <Badge
                    onClick={handleClick}
                    className={`${statusData.color} text-white ${status === "pending" ? "cursor-pointer hover:opacity-80" : "cursor-default"}`}
                >
                    {statusData.label}
                </Badge>
            );
        },
    }
]