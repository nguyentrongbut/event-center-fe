// ** Pages
import type {SignInForm} from "src/pages/auth/sign-in";
import type {SignUpForm} from "@/pages/auth/sign-up";

export async function signIn(values: SignInForm) {
    console.log(values)
    return true
}

export async function signUp(values: SignUpForm) {
    console.log(values)
    return true
}

export async function getProfile() {
    return null
}

export async function logout() {
    return true
}