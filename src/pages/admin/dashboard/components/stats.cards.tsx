// ** Shadcn ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ** Lucide Icon
import { Calendar, CalendarDays, DollarSign, Users } from "lucide-react";

// ** utils
import { formatCurrency } from "@/utils/format.ts";

interface StatCardProps {
    title: string;
    value: number | string;
    icon: React.ReactNode;
    change?: string;
    description?: string;
}

const StatCardItem = ({ title, value, icon, change, description }: StatCardProps) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium capitalize">{title}</CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            {change && (
                <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{change}</span> {description || "compared to last month"}
                </p>
            )}
        </CardContent>
    </Card>
);

const statsData = [
    {
        title: "Total Bookings",
        value: 1247,
        icon: <CalendarDays className="h-4 w-4 text-muted-foreground" />,
        change: "+12.5%",
    },
    {
        title: "Revenue",
        value: formatCurrency(89650),
        icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
        change: "+8.2%",
    },
    {
        title: "Total Events",
        value: 156,
        icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
        change: "+5.1%",
    },
    {
        title: "Total Attendees",
        value: 8934,
        icon: <Users className="h-4 w-4 text-muted-foreground" />,
        change: "+15.3%",
    },
];

const StatsCards = () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
            <StatCardItem key={index} {...stat} />
        ))}
    </div>
);

export default StatsCards;
