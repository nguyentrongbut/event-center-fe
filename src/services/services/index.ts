// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// TService,
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** Pages
import type {CreateServiceForm} from "@/pages/admin/service/create/form.create.service.tsx";
import type {EditServiceForm} from "@/pages/admin/service/edit/form.edit.service.tsx";

const url = CONFIG_API.SERVICE.INDEX;

export async function getListService() {
    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getDetailService(id: number) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createService(dataService: CreateServiceForm) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();

    formData.append("name", dataService.name);
    formData.append("price", dataService.price.toString());
    formData.append("description", dataService.description);
    formData.append("icon", dataService.icon);

    dataService.images.forEach((img) => {
        if (img instanceof File) {
            formData.append("images", img);
        }
    });

    try {
        const response = await axios.post(`${url}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function editService(
    dataService: EditServiceForm,
    id: number,
    originalImages: string[]
) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();
    formData.append("Name", dataService.name);
    formData.append("Price", dataService.price.toString());
    formData.append("Description", dataService.description);
    formData.append("Icon", dataService.icon);

    const addImages = dataService.images.filter(img => img instanceof File);
    const removeImages = originalImages.filter(img => !dataService.images.includes(img));

    addImages.forEach((file) => formData.append("AddImages", file));
    removeImages.forEach((url) => formData.append("RemoveImages", url));

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

export async function deleteService(id: number) {

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
        console.error("Failed to delete service:", error);
    }
}