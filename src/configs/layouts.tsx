// ** types
import type {TLink, TNavItem} from "@/types/layout";

// Lucide Icon
import {
    Calendar,
    CalendarDays,
    ClipboardList,
    Facebook, Home,
    Instagram,
    Linkedin, List,
    Mail,
    MapPin,
    Phone,
    Twitter
} from "lucide-react";

// ** Header
export const listNav: TLink[] = [
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

//**  Dashboard
// ** breadcrumb
export const breadcrumbLabels: Record<string, string> = {
    booking: "Booking",
    event: "Event",
    customer: "Customer",
    venue: "Venue",
    dish: "Dish",
    menu: "Menu",
    room: "Room",
    view: "View",
    service: "Service",
    settings: "Settings",
    reports: "Reports",
    create: "Create",
    edit: "Edit"
};

// ** sidebar
export const MAIN_NAV: TNavItem[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Bookings",
        icon: CalendarDays,
        children: [
            { title: "All Bookings", url: "/dashboard/booking" },
        ],
    },
    {
        title: "Events",
        icon: Calendar,
        children: [
            { title: "All Events", url: "/dashboard/event" },
            { title: "Create New Event", url: "/dashboard/event/create" },
        ],
    },
    {
        title: "Venues",
        icon: MapPin,
        children: [
            { title: "All Venues", url: "/dashboard/venue" },
            { title: "Add Venue", url: "/dashboard/venue/create" },
            { title: "All Rooms", url: "/dashboard/venue/room" },
            { title: "Add Room", url: "/dashboard/venue/room/create" },
        ],
    },
    {
        title: "Services",
        icon: ClipboardList,
        children: [
            { title: "All Services", url: "/dashboard/service" },
            { title: "Add Service", url: "/dashboard/service/create" },
        ],
    },
    {
        title: "Menus",
        icon: List,
        children: [
            { title: "All Menus", url: "/dashboard/menu" },
            { title: "Dishes", url: "/dashboard/menu/dish" },
        ],
    }
];
//** End Dashboard

