export const BASE_URL = import.meta.env.VITE_API_URL

export const CONFIG_API = {
    AUTH: {
        INDEX: `${BASE_URL}/auth`,
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        USER: `${BASE_URL}/users`,
    },
    EVENT: {
        INDEX: `${BASE_URL}/events`,
    },
    VENUE: {
        INDEX: `${BASE_URL}/venue`,
    },
    DISH: {
        INDEX: `${BASE_URL}/dish`,
    },
    MENU: {
        INDEX: `${BASE_URL}/menus`,
    },
    SERVICE: {
        INDEX: `${BASE_URL}/service`,
    },
    ROOM: {
        INDEX: `${BASE_URL}/room`,
    },
    BOOKING: {
        INDEX: `${BASE_URL}/booking`,
        CANCEL: `${BASE_URL}/booking/cancel`,
    },
    PAYMENT: {
        INDEX: `${BASE_URL}/payment`,
        MOMO: `${BASE_URL}/payment/momo`,
        MOMO_CALL_BACK: `${BASE_URL}/payment/momo/callback`,
    }
}