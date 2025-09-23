// ** Pages
import type {SignInForm} from "src/pages/auth/sign-in";
import type {SignUpForm} from "@/pages/auth/sign-up";

// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** utils
import {setCookie} from "@/utils/cookieUtils.ts";

// ** types
import type {TSignIn} from "@/types/data";

export async function signIn(values: SignInForm) {
    try {
        const response = await axios.post(CONFIG_API.AUTH.LOGIN, values);

        const data: TSignIn = response.data;

        if (!data) return null;

        const {id, role, token } = data;

        const infoUser = JSON.stringify({id, role, token})

        setCookie('ECTA-info', infoUser, 365)

        return data
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function signUp(values: SignUpForm) {
    try {
        const response = await axios.post(CONFIG_API.AUTH.REGISTER, values);

        const data = response.data;

        if (!data) return null;

        return 201
    } catch (error) {
        console.error(error);
        return null
    }
}

export async function getProfile() {
    return null
}

export async function logout() {
    return true
}