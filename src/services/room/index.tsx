// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** Pages
import type {CreateRoomForm} from "@/pages/admin/room/create/form.create.room.tsx";
import type {EditRoomForm} from "@/pages/admin/room/edit/form.edit.room.tsx";

const url = CONFIG_API.ROOM.INDEX

export async function getListRoom() {
    try {
        const response = await axios.get(`${url}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function getDetailRoom(id: number) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
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