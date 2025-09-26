import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { sendCallbackFromFE } from "@/services/booking";

export default function Payment() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const resultCode = Number(searchParams.get("resultCode"));
        const bookingId = searchParams.get("extraData");

        if (Number.isNaN(resultCode) || !bookingId) {
            navigate("/payment/fail");
            return;
        }

        const payload = Object.fromEntries(searchParams.entries());

        sendCallbackFromFE(payload)
            .then(() => {
                if (resultCode === 0) {
                    navigate("/payment/success");
                } else {
                    navigate("/payment/fail");
                }
            })
            .catch((err) => {
                console.error("Callback error:", err);
                navigate("/payment/fail");
            });
    }, [searchParams, navigate]);

    return (
        <div>
            <h1 className="text-center h-[50vh] flex justify-center items-center">
                Processing your payment...
            </h1>
        </div>
    );
}
