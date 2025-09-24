// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// TMenu,
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

const url = CONFIG_API.MENU.INDEX

export async function getListMenu() {
    // try {
    //     const response: TMenu[] = await axios.get(url);
    //
    //     return response;
    // } catch (error) {
    //     console.error(error);
    // }
    return [
        {
            "id": 1,
            "name": "Set 1",
            "price": 200000,
            "dishes": [
                {
                    "id": 2,
                    "name": "Gà nướng mật ong"
                },
                {
                    "id": 3,
                    "name": "Gà chiên mắm 2"
                }
            ]
        }
    ]
}

export async function createMenu(name: string, dishIds: number[], price: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.post(`${url}`, {name, dishIds, price}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateMenu(id: number, name: string, dishIds: number[], price: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${url}/${id}`, {name, dishIds, price}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMenu(id: number) {

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
        console.error("Failed to delete menu:", error);
    }
}