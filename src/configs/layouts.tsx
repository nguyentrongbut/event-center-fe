// ** types
import type {TLink} from "@/types/layout";

// Lucide Icon
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";

// ** Header
export const listNav: TLink[] = [
    {
        title: 'About Us',
        href: '/about-us',
    },
    {
        title: 'Venues',
        href: '/venue',
    },
    {
        title: 'Menu',
        href: '/menu',
    }
];

export const listDropdownNav: TLink[] = [
    {
        title: 'Wedding Party',
        href: '/event/wedding',
    },
    {
        title: 'Corporate Event',
        href: '/event/corporate-event',
    },
    {
        title: 'Birthday Party',
        href: '/event/birthday',
    }
];

// ** End Header

// ** Footer
export const services = [
    {label: "Book Event", to: "/booking"},
    {label: "Venue", to: "/venues"},
    {label: "Menu", to: "/menu"},
    {label: "Add-on", to: "/services"},
];

export const supports = [
    {label: "Help Center", to: "/help"},
    {label: "Contact", to: "/contact"},
    {label: "Terms", to: "/terms"},
    {label: "Privacy", to: "/privacy"},
];

export const contacts = [
    { icon: Phone, text: "0123 456 789", href: "tel:0123456789" },
    { icon: Mail, text: "contact@evenetcenter.com", href: "mailto:contact@everevent.com" },
    { icon: MapPin, text: "123 Main St, HN", href: "https://maps.google.com/?q=123+Main+St+HN" },
]

export const socials = [
    {
        icon: Facebook,
        href: "https://facebook.com",
        variant: "default",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com",
        variant: "secondary",
    },
    {
        icon: Instagram,
        href: "https://instagram.com",
        variant: "secondary",
    },
    {
        icon: Twitter,
        href: "https://twitter.com",
        variant: "secondary",
    },
]

// ** End Footer