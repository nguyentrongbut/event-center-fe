// ** Types
import type {TEventType} from "@/types";

// ** Home
// Services section

export const eventTypes: TEventType[] = [
    {
        id: "wedding",
        name: "Wedding",
        slug: "wedding",
        nameVi: "Wedding Party",
        icon: "💒",
        description: "Celebrate your special day with a memorable wedding party, tailored to your style and love story.",
    },
    {
        id: "birthday",
        name: "Birthday",
        slug: "birthday",
        nameVi: "Birthday",
        icon: "🎂",
        description: "Make every birthday unforgettable with joyful gatherings, delicious treats, and personalized themes.",
    },
    {
        id: "corporate",
        name: "Corporate Event",
        slug: "corporate-event",
        nameVi: "Corporate Event",
        icon: "🏢",
        description: "Host professional meetings, conferences, and team-building activities designed to inspire and connect.",
    }
]

//** End Home

// ** Venue (Create, update)
export const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];