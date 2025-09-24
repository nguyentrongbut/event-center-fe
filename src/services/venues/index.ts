// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
import type {TVenue} from "@/types/data";

export async function getListVenue() {
    try {
        const response: TVenue[] = await axios.get(CONFIG_API.VENUE.INDEX);

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}