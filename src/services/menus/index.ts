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
            "name": "Menu 1",
            "price": 129000,
            "dishes": [
                { "id": 1, "name": "Nộm sứa ngũ sắc" },
                { "id": 2, "name": "Gà ta hấp lá chanh" },
                { "id": 3, "name": "Nem hải sản Phú Quốc" },
                { "id": 4, "name": "Ếch rang muối" },
                { "id": 5, "name": "Bê tái chanh" },
                { "id": 6, "name": "Cá lăng chiên hoàng bào" },
                { "id": 7, "name": "Củ quả luộc chấm muối vừng" },
                { "id": 8, "name": "Canh ngao nấu chua" },
                { "id": 9, "name": "Cơm Tám" },
                { "id": 10, "name": "Xôi Hoàng Phố" }
            ]
        },
        {
            "id": 2,
            "name": "Menu 10",
            "price": 400000,
            "dishes": [
                { "id": 1, "name": "Nộm sứa ngũ sắc" },
                { "id": 3, "name": "Nem hải sản Phú Quốc" },
                { "id": 4, "name": "Ếch rang muối" },
                { "id": 5, "name": "Bê tái chanh" },
                { "id": 6, "name": "Cá lăng chiên hoàng bào" },
                { "id": 7, "name": "Củ quả luộc chấm muối vừng" },
                { "id": 8, "name": "Canh ngao nấu chua" },
                { "id": 9, "name": "Cơm Tám" },
                { "id": 10, "name": "Xôi Hoàng Phố" }
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