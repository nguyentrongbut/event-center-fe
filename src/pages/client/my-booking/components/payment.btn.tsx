// ** react hot toast
import toast from "react-hot-toast";

// ** Shadcn ui
import { Button } from "@/components/ui/button";

// ** Services
import {createMomoPayment} from "@/services/booking";


const PaymentBtn = ({ bookingId }: { bookingId: number }) => {
    const handleSubmit = async () => {
        try {
            const paymentUrl = await createMomoPayment(bookingId);

            if (!paymentUrl) {
                toast.error("Payment URL not found.");
                return;
            }

            window.location.href = paymentUrl;
        } catch (error) {
            console.error("Error when initiating MoMo payment:", error);
            toast.error("An error occurred while creating the payment.");
        }
    };

    return (
        <Button
            onClick={handleSubmit}
            className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors font-medium text-sm"
        >
            Pay Now
        </Button>
    );
};

export default PaymentBtn;
