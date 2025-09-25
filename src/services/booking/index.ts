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
    // try {
    //     const response = await axios.get(url);
    //     return response.data;
    // } catch (error) {
    //     console.error("Booking error:", error);
    //     throw error;
    // }

    return [
        {
            "id": 1,
            "orderCode": "CE-20250702-0009",
            "name": "cloly",
            "email": "levana@gmail.com",
            "phone": "0326654301",
            "eventDate": "2025-07-11",
            "eventTime": "10:04",
            "event": {
                "id": 101,
                "name": "Wedding"
            },
            "venue": {
                "id": 201,
                "name": "địa điểm test"
            },
            "room": {
                "id": 301,
                "name": "phòng test"
            },
            "menu": {
                "id": 401,
                "name": "Menu 1",
                "price": 129000,
                "dishes": [
                    { "id": 501, "name": "Súp gà ngô nấm test" },
                    { "id": 502, "name": "Nộm sứa ngũ sắc" },
                    { "id": 503, "name": "Gà ta hấp lá chanh" },
                    { "id": 504, "name": "Nem hải sản Phú Quốc" },
                    { "id": 505, "name": "Ếch rang muối" },
                    { "id": 506, "name": "Bê tái chanh" },
                    { "id": 507, "name": "Cá lăng chiên hoàng bào" },
                    { "id": 508, "name": "Củ quả luộc chấm muối vừng" },
                    { "id": 509, "name": "Canh ngao nấu chua" },
                    { "id": 510, "name": "Cơm Tám" },
                    { "id": 511, "name": "Xôi Hoàng Phố" }
                ]
            },
            "services": [
                {
                    "id": 601,
                    "name": "Trang trí tiệc"
                }
            ],
            "people": 50,
            "address": "",
            "paymentMethod": "deposit",
            "notes": "",
            "status": "confirmed",
            "createdAt": "2025-07-02T15:04:50.381Z"
        },
        {
            "id": 2,
            "orderCode": "CE-20250702-0008",
            "name": "cloly",
            "email": "cloly1941@gmail.com",
            "phone": "0326654301",
            "eventDate": "2025-07-10",
            "eventTime": "10:59",
            "event": {
                "id": 101,
                "name": "Wedding"
            },
            "venue": {
                "id": 202,
                "name": "Cảnh Hồ"
            },
            "room": {
                "id": 302,
                "name": "Phòng Star"
            },
            "menu": {
                "id": 401,
                "name": "Menu 1",
                "price": 129000,
                "dishes": [
                    { "id": 501, "name": "Súp gà ngô nấm test" },
                    { "id": 502, "name": "Nộm sứa ngũ sắc" },
                    { "id": 503, "name": "Gà ta hấp lá chanh" },
                    { "id": 504, "name": "Nem hải sản Phú Quốc" },
                    { "id": 505, "name": "Ếch rang muối" },
                    { "id": 506, "name": "Bê tái chanh" },
                    { "id": 507, "name": "Cá lăng chiên hoàng bào" },
                    { "id": 508, "name": "Củ quả luộc chấm muối vừng" },
                    { "id": 509, "name": "Canh ngao nấu chua" },
                    { "id": 510, "name": "Cơm Tám" },
                    { "id": 511, "name": "Xôi Hoàng Phố" }
                ]
            },
            "services": [
                {
                    "id": 601,
                    "name": "Trang trí tiệc"
                }
            ],
            "people": 50,
            "address": "",
            "paymentMethod": "deposit",
            "notes": "",
            "status": "pending",
            "createdAt": "2025-07-02T14:58:59.448Z"
        }
    ]
}

export async function getBookingDetail(id: number) {
    // try {
    //     const response = await axios.get(`${url}/${id}`);
    //     return response.data;
    // } catch (error) {
    //     console.error("Booking error:", error);
    //     throw error;
    // }
    console.log(id)
    return   {
        "id": 1,
        "orderCode": "CE-20250702-0009",
        "name": "cloly",
        "email": "levana@gmail.com",
        "phone": "0326654301",
        "eventDate": "2025-07-11",
        "eventTime": "10:04",
        "event": {
            "id": 101,
            "name": "Wedding"
        },
        "venue": {
            "id": 201,
            "name": "địa điểm test"
        },
        "room": {
            "id": 301,
            "name": "phòng test"
        },
        "menu": {
            "id": 401,
            "name": "Menu 1",
            "price": 129000,
            "dishes": [
                { "id": 501, "name": "Súp gà ngô nấm test" },
                { "id": 502, "name": "Nộm sứa ngũ sắc" },
                { "id": 503, "name": "Gà ta hấp lá chanh" },
                { "id": 504, "name": "Nem hải sản Phú Quốc" },
                { "id": 505, "name": "Ếch rang muối" },
                { "id": 506, "name": "Bê tái chanh" },
                { "id": 507, "name": "Cá lăng chiên hoàng bào" },
                { "id": 508, "name": "Củ quả luộc chấm muối vừng" },
                { "id": 509, "name": "Canh ngao nấu chua" },
                { "id": 510, "name": "Cơm Tám" },
                { "id": 511, "name": "Xôi Hoàng Phố" }
            ]
        },
        "services": [
            {
                "id": 601,
                "name": "Trang trí tiệc"
            }
        ],
        "people": 50,
        "address": "",
        "paymentMethod": "deposit",
        "notes": "",
        "status": "confirmed",
        "createdAt": "2025-07-02T15:04:50.381Z"
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

    console.log("Payload gửi callback:", payload);

    try {
        const response = await axios.post(
            `${urlPaymentCallback}`,
            payload
        );
        console.log("Callback Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Callback Error:", error);
        throw error;
    }
}