// ** React
import { useState } from "react";

// ** React router
import { useNavigate } from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** Shadcn ui
import { Button } from "@/components/ui/button";

// ** lucide icon
import { RefreshCw } from "lucide-react";

// ** Services
import {reBooking} from "@/services/booking";

const ReorderButton = ({ bookingId }: { bookingId: number }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleReorder = async () => {
        setIsLoading(true);
        try {
            const id = await reBooking(bookingId);
            if (!id) {
                toast.error("Booking not found.");
                return;
            }
            navigate(`/my-booking/${id}`);
            toast.success("Rebooking successful.");
        } catch (error) {
            console.error(error);
            toast.error("Unable to reorder. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            onClick={handleReorder}
            disabled={isLoading}
            size="sm"
            className="bg-amber-600 hover:bg-amber-700"
        >
            <RefreshCw className="w-4 h-4 mr-2" />
            {isLoading ? "Processing..." : "Reorder"}
        </Button>
    );
};

export default ReorderButton;
