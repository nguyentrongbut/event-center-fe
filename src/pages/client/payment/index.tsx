// ** React
import { useEffect } from "react";

// ** React router
import { useSearchParams, useNavigate } from "react-router-dom";

// ** Services
import {sendCallbackFromFE} from "@/services/booking";


export default function Payment() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const errorCode = searchParams.get("errorCode");
        const bookingId = searchParams.get("extraData");

        if (errorCode && bookingId) {
            const payload = Object.fromEntries(searchParams.entries());

            sendCallbackFromFE(payload)
                .then(() => {
                    if (errorCode === "0") {
                        navigate("/payment/success");
                    } else {
                        navigate("/payment/fail");
                    }
                })
                .catch((err) => {
                    console.error("Callback error:", err);
                    navigate("/payment/fail");
                });
        }
    }, [searchParams, navigate]);

    return (
        <div>
            <h1 className='text-center h-[50vh] flex justify-center items-center'>Processing your payment...</h1>
        </div>
    );
}
