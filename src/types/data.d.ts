export type TRole = 'CUSTOMER' | 'ADMIN';

export type TSignIn = {
    id: number
    name: string
    role: TRole
    token: string
}