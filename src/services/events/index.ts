// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
import type {TEvent} from "@/types/data";

export async function getListEvent() {
    try {
        const response: TEvent[] = await axios.get(CONFIG_API.EVENT.INDEX);

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}