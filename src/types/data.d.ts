export type TRole = 'CUSTOMER' | 'ADMIN';

export type TStatus = 'active' | 'inactive';

export type TSignIn = {
    id: number
    name: string
    role: TRole
    token: string
}

export type TProfile = {
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    phone: string;
    address: string;
};

export type TProfileAPI = TProfile & {
    id: number;
    role: TRole;
    status: TStatus;
    deleted: boolean;
};

export type TMenu = {
    id: number,
    name: string,
    price: number,
    dishes: TDish[],
}

export type TDish = {
    id: number,
    name: string,
}

export type TEvent = {
    id:  number,
    icon: string,
    name: string,
    subName: string,
    slug: string,
    description: string,
    menus: TMenu[],
    services: TService[],
    images: string[],
    hot: boolean,
}

export type TVenue = {
    id: number,
    name: string,
    slug: string,
    description: string,
    area: string,
    people: number,
    rooms: TRoom[],
    image: string,
    heroBanners: string[],
    thumbnailImages: string[],
    galleryImages: string[],
    address: string,
    open: string,
    close: string,
    days: string[],
}


export type TService = {
    id: number,
    name: string,
    icon: string,
    price: number,
    description: string,
    images: string[],
}