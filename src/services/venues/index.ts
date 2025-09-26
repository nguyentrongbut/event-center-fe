// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** types
import type {TSignIn} from "@/types/data";

const url = CONFIG_API.VENUE.INDEX

export async function getListVenue() {
    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getDetailVenue(slug: string) {
    try {
        const response = await axios.get(`${url}/${slug}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createVenue(formData: FormData) {
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

export async function editVenue(formData: FormData, id: number) {
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


export async function deleteVenue(id: number) {

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