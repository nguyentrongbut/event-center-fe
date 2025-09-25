// ** React router
import {Link} from "react-router-dom";

// ** Shadcn ui
import { Button } from "@/components/ui/button";

export default function PaymentFail() {

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-3xl font-semibold text-red-600 mb-4">
                Payment Failed!
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md">
                An error occurred during the payment process. Please try again or check your booking details.
            </p>
            <div className="flex gap-4">
                <Link to='/'>
                    <Button variant="default">
                        Back to Home
                    </Button>
                </Link>

                <Link to='/my-booking'>
                    <Button variant="outline">
                        View My Booking
                    </Button>
                </Link>
            </div>
        </div>
    );
}
