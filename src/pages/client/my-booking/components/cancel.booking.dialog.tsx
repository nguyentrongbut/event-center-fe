// ** React
import {useState} from "react";

// ** React hot toast
import toast from "react-hot-toast";

// ** Shadcn ui
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

// ** Lucide Icon
import {X} from "lucide-react";

// ** Services
import {cancelBooking} from "@/services/booking";

const CancelBookingDialog = ({bookingId, orderCode, status}: {
    bookingId: number;
    orderCode: string;
    status: string;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [reason, setReason] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCancel = async () => {
        if (!reason.trim()) {
            toast.error("Please provide a reason for the cancellation.");
            return;
        }

        setIsLoading(true);
        try {
            await cancelBooking(bookingId, reason);
            toast.success("Booking has been cancelled.");
            setIsOpen(false);
            setReason("");
        } catch (error) {
            console.error(error);
            toast.error("Unable to cancel the booking. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const getCancelWarning = () => {
        if (status === 'confirmed') {
            return "This booking has already been confirmed. A cancellation fee may apply according to our policy.";
        }
        return "Are you sure you want to cancel this booking?";
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    <X className="w-4 h-4 mr-2"/>
                    Cancel this booking
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Booking Cancellation</AlertDialogTitle>
                    <AlertDialogDescription className="space-y-3" asChild>
                        <div>
                            <p>Booking: <span className="font-mono font-medium">{orderCode}</span></p>
                            <p>{getCancelWarning()}</p>
                            {status === 'confirmed' && (
                                <p className="text-amber-600 text-sm font-medium">
                                    ⚠️ Note: A cancellation fee may apply according to our policy.
                                </p>
                            )}
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="space-y-2">
                    <Label htmlFor="cancel-reason">Reason for cancellation *</Label>
                    <Textarea
                        id="cancel-reason"
                        placeholder="Please let us know why you're cancelling this booking..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows={3}
                        className="resize-none"
                    />
                    <p className="text-xs text-gray-500">
                        This information helps us improve our services.
                    </p>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isLoading}>
                        Don&apos;t cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleCancel}
                        disabled={isLoading || !reason.trim()}
                        className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
                    >
                        {isLoading ? "Cancelling..." : "Confirm Cancellation"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CancelBookingDialog;
