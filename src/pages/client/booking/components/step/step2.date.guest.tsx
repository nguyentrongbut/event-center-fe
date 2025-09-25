// ** Shadcn ui
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// ** Pages
import type {TBookingFormProps} from "@/pages/client/booking/components/step/step1.event.location.tsx";
import CalendarDate from "@/pages/client/booking/components/step/calendar.date.tsx";


type Props = TBookingFormProps & {
    errors?: Partial<Record<"eventDate" | "eventTime" | "guestCount", string>>;
};

const Step2DateGuest = ({
                            bookingForm,
                            setBookingForm,
                            errors
                        }: Props) => {
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="eventDate" className="text-sm font-medium mb-2 block">
                        Event Date (At least 7 days in advance)
                    </Label>
                    <CalendarDate
                        value={bookingForm.eventDate ? new Date(bookingForm.eventDate) : undefined}
                        onChange={(date) =>
                            setBookingForm((prev) => ({
                                ...prev,
                                eventDate: date ? date.toLocaleDateString('sv-SE') : "",
                            }))
                        }
                    />
                    {errors?.eventDate && (
                        <p className="text-sm text-red-500 mt-1">{errors.eventDate}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="eventTime" className="text-sm font-medium mb-2 block">
                        Start Time (Between 7:00 AM and 5:00 PM)
                    </Label>
                    <Input
                        id="eventTime"
                        type="time"
                        value={bookingForm.eventTime}
                        onChange={(e) =>
                            setBookingForm((prev) => ({
                                ...prev,
                                eventTime: e.target.value,
                            }))
                        }
                    />
                    {errors?.eventTime && (
                        <p className="text-sm text-red-500 mt-1">{errors.eventTime}</p>
                    )}
                </div>
            </div>

            <div>
                <Label htmlFor="guestCount" className="text-sm font-medium mb-2 block">
                    Number of Guests
                </Label>
                <Input
                    id="guestCount"
                    type="number"
                    min="10"
                    max="1000"
                    value={bookingForm.guestCount}
                    onChange={(e) =>
                        setBookingForm((prev) => ({
                            ...prev,
                            guestCount: Number.parseInt(e.target.value) || 0,
                        }))
                    }
                />
                <p className="text-sm text-slate-600 mt-1">
                    Minimum 50 guests, maximum 1000 guests
                </p>
                {errors?.guestCount && (
                    <p className="text-sm text-red-500 mt-1">{errors.guestCount}</p>
                )}
            </div>
        </div>
    );
};

export default Step2DateGuest;
