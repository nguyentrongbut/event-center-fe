// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// TDish,
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

export async function getListDish() {
    // try {
    //     const response: TDish[] = await axios.get(CONFIG_API.DISH.INDEX);
    //
    //     return response;
    // } catch (error) {
    //     console.error(error);
    // }
    return [
        {
            "id": 1,
            "name": "Nộm sứa ngũ sắc",
        },
        {
            "id": 2,
            "name": "Gà ta hấp lá chanh",
        },
        {
            "id": 3,
            "name": "Nem hải sản Phú Quốc",
        },
        {
            "id": 4,
            "name": "Ếch rang muối",
        },
        {
            "id": 5,
            "name": "Bê tái chanh",
        },
        {
            "id": 6,
            "name": "Cá lăng chiên hoàng bào",
        },
        {
            "id": 7,
            "name": "Củ quả luộc chấm muối vừng",
        },
        {
            "id": 8,
            "name": "Canh ngao nấu chua",
        },
        {
            "id": 99,
            "name": "Cơm Tám",
        },
        {
            "id": 10,
            "name": "Xôi Hoàng Phố",
        }
    ]
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

        return response.data;
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

        return response.data;
    } catch (error) {
        console.log(error);
    }
}