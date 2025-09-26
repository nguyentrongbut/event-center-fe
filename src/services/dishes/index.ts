// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
import type { TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

export async function getListDish() {
    try {
        const response = await axios.get(CONFIG_API.DISH.INDEX);

        return response?.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteDish(id: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.delete(`${CONFIG_API.DISH.INDEX}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.data) return false;

        return true;
    } catch (error) {
        console.error("Failed to delete dish:", error);
    }
}

export async function createDish(name: string) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.post(`${CONFIG_API.DISH.INDEX}`, {name}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateDish(id: number, name: string) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${CONFIG_API.DISH.INDEX}/${id}`, {name}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}