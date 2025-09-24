export type TLink = {
    title: string;
    href: string;
    type?: "default" | "dropdown";
}

export type TNavItem = {
    title: string
    url?: string
    icon: React.ElementType
    children?: { title: string; url: string }[]
}

export type TOption = {
    value: number,
    label: string,
}