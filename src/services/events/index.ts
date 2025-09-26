// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

import {getCookie} from "@/utils/cookieUtils.ts";
import type {TSignIn} from "@/types/data";

const url = CONFIG_API.EVENT.INDEX

export async function getListEvent() {
    try {
        const response = await axios.get(CONFIG_API.EVENT.INDEX);

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getDetailEvent(slug: string) {
    try {
        const response = await axios.get(`${url}/${slug}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createEvent(formData: FormData) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error creating venue:", error);
        return null;
    }
}

export async function editEvent(formData: FormData, id: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error creating venue:", error);
        return null;
    }
}

export async function deleteEvent(id: number) {

    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}