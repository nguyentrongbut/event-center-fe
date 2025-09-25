// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// TRoom,
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** Pages
import type {CreateRoomForm} from "@/pages/admin/room/create/form.create.room.tsx";
import type {EditRoomForm} from "@/pages/admin/room/edit/form.edit.room.tsx";

const url = CONFIG_API.ROOM.INDEX

export async function getListRoom() {
    // try {
    //     const response: TRoom[] = await axios.get(`${url}`);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    return [
        {
            "id": 1,
            "name": "phòng test",
            "area": "10",
            "people": 2,
            "table": 2,
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751433783/snappr-S7twrJmc_1k-unsplash_ya6idz.jpg",
            "price": 500000,
            "deleted": false
        },
        {
            "id": 2,
            "name": "room test",
            "area": "200",
            "people": 20,
            "table": 100,
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751468954/snappr-S7twrJmc_1k-unsplash_svsvdt.jpg",
            "price": 500000,
            "deleted": false
        }
    ]
}


export async function getDetailRoom(id: number) {
    // try {
    //     const response = await axios.get(`${url}/${id}`);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(id)
    return {
        "id": 1,
        "name": "phòng test",
        "area": "10",
        "people": 2,
        "table": 2,
        "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751433783/snappr-S7twrJmc_1k-unsplash_ya6idz.jpg",
        "price": 500000,
        "deleted": false
    }
}

export async function createRoom(dataRoom: CreateRoomForm) {

    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();
    formData.append("Name", dataRoom.name);
    formData.append("Price", dataRoom.price.toString());
    formData.append("Area", dataRoom.area.toString());
    formData.append("People", dataRoom.people.toString());
    formData.append("Table", dataRoom.table.toString());

    dataRoom.images.forEach((img) => {
        if (img instanceof File) {
            formData.append("Image", img);
        }
    });

    try {
        const response = await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error creating room:", error);
        return null;
    }
}

export async function editRoom(
    dataRoom: EditRoomForm,
    id: number,
) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();
    formData.append("Name", dataRoom.name);
    formData.append("Price", dataRoom.price.toString());
    formData.append("Area", dataRoom.area.toString());
    formData.append("People", dataRoom.people.toString());
    formData.append("Table", dataRoom.table.toString());

    if (dataRoom.image instanceof File) {
        formData.append("Image", dataRoom.image);
    }

    try {
        const response = await axios.patch(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteRoom(id: number) {

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