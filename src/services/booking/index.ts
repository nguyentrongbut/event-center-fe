// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
import type {TSignIn} from "@/types/data";
// ** Pages
import type {BookingForm} from "@/pages/client/booking";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

const url = CONFIG_API.BOOKING.INDEX
const urlCancel = CONFIG_API.BOOKING.CANCEL
const urlPayment = CONFIG_API.PAYMENT.MOMO
const urlPaymentCallback = CONFIG_API.PAYMENT.MOMO_CALL_BACK

export async function getListBooking() {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function getBookingDetail(id: number) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function sendBooking(bookingForm: BookingForm) {
    const {
        userId,
        eventType,
        locationType,
        venueId,
        roomId,
        customerAddress,
        guestCount,
        paymentMethod,
        eventDate,
        eventTime,
        selectedMenu,
        selectedAddOns,
        customerInfo
    } = bookingForm;

    const payload = {
        userId,
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        eventDate,
        eventTime,
        eventId: eventType,
        people: guestCount,
        address: locationType === "customer" ? customerAddress : "",
        paymentMethod,
        roomId,
        menuId: selectedMenu,
        venueId,
        serviceIds: selectedAddOns,
        notes: customerInfo.notes,
    };

    try {
        const response = await axios.post(url, payload);

        return response.data;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function changeStatus(id: number, status?: string) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${url}/status/${id}`, {status}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function reBooking(id: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.post(`${url}/rebook/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.id;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function createMomoPayment(bookingId: number) {
    try {
        const response = await axios.post(urlPayment, {
            bookingId: bookingId,
        });

        return response.data.momoPayUrl
    } catch (error) {
        console.error("Error when payment with MoMo:", error);
        throw error;
    }
}

export async function cancelBooking(id: number, reason: string) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${urlCancel}/${id}`, {reason}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Booking error:", error);
        throw error;
    }
}

export async function sendCallbackFromFE(query: Record<string, string>) {
    const payload = {
        partnerCode: query["partnerCode"],
        accessKey: query["accessKey"],
        requestId: query["requestId"],
        amount: query["amount"],
        orderId: query["orderId"],
        orderInfo: query["orderInfo"],
        orderType: query["orderType"],
        transId: query["transId"],
        message: query["message"],
        localMessage: query["localMessage"],
        responseTime: query["responseTime"],
        errorCode: query["errorCode"],
        payType: query["payType"],
        extraData: query["extraData"],
        signature: query["signature"],
    };

    try {
        const response = await axios.post(
            `${urlPaymentCallback}`,
            payload
        );

        return response.data;
    } catch (error) {
        console.error("Callback Error:", error);
        throw error;
    }
}