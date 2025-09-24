export const BASE_URL = import.meta.env.VITE_API_URL

export const CONFIG_API = {
    AUTH: {
        INDEX: `${BASE_URL}/auth`,
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
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
    }
}