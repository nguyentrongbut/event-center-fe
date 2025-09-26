// ** React
import { useEffect } from "react";

// ** Shadcn ui
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea.tsx";

// ** Pages
import type {BookingForm, BookingFormErrors} from "@/pages/client/booking";

// ** Lucide Icon
import { Home, MapPin } from "lucide-react";

// ** Types
import type {TEvent, TVenue} from "@/types/data";

// ** Services
import {getListEvent} from "@/services/events";
import {getListVenue} from "@/services/venues";


export type TBookingFormProps = {
    bookingForm: BookingForm;
    setBookingForm: React.Dispatch<React.SetStateAction<BookingForm>>;
    errors?: BookingFormErrors;
};

type TStep1 = TBookingFormProps & {
    listEvent: TEvent[];
    listVenue: TVenue[];
    setListVenues: React.Dispatch<React.SetStateAction<TVenue[]>>;
    setIsLoadingVenues: React.Dispatch<React.SetStateAction<boolean>>;
    setListEvents: React.Dispatch<React.SetStateAction<TEvent[]>>;
    setIsLoadingEvent: React.Dispatch<React.SetStateAction<boolean>>;
};

const Step1EventLocation = ({
                                bookingForm, setBookingForm, errors,
                                listEvent,
                                setListEvents,
                                setIsLoadingEvent,
                                listVenue,
                                setListVenues,
                                setIsLoadingVenues
                            }: TStep1) => {

    useEffect(() => {
        const fetchListVenue = async () => {
            setIsLoadingVenues(true);
            try {
                const data = await getListVenue();
                setListVenues(data);
            } catch (error) {
                console.error("Error fetching venues:", error);
                setListVenues([]);
            } finally {
                setIsLoadingVenues(false);
            }
        }
        fetchListVenue();
    }, []);

    useEffect(() => {
        const fetchListEvent = async () => {
            setIsLoadingEvent(true);
            try {
                const data = await getListEvent();
                setListEvents(data);
            } catch (error) {
                console.error("Error fetching event:", error);
                setListEvents([]);
            } finally {
                setIsLoadingEvent(false);
            }
        }
        fetchListEvent();
    }, []);


    const handleLocationTypeChange = (type: "venue" | "customer") => {
        setBookingForm((prev) => ({
            ...prev,
            locationType: type,
            venueId: type === "venue" ? null : prev.venueId,
            customerAddress: type === "customer" ? "" : prev.customerAddress,
            roomId: null
        }));
    };

    return (
        <div className="space-y-6">
            {/* Event type selection */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Select event type</Label>
                <div className="grid md:grid-cols-2 gap-4">
                    {listEvent.map((eventType) => (
                        <Card
                            key={eventType.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                                bookingForm.eventType === eventType.id ? "bg-primaryColor" : ""
                            }`}
                            onClick={() =>
                                setBookingForm((prev) => ({
                                    ...prev,
                                    eventType: eventType.id
                                }))
                            }
                        >
                            <CardContent className="p-4 text-center">
                                <div className="text-3xl mb-2">{eventType.icon}</div>
                                <h3 className="font-semibold">{eventType?.subName}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {errors?.eventType && (
                    <p className="text-sm text-red-600 mt-2">{errors.eventType}</p>
                )}
            </div>

            {/* Location type selection */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Select event location</Label>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* At a venue */}
                    <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                            bookingForm.locationType === "venue" ? "bg-primaryColor" : ""
                        }`}
                        onClick={() => handleLocationTypeChange("venue")}
                    >
                        <CardContent className="p-4 text-center">
                            <MapPin className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                            <h3 className="font-semibold">At a venue</h3>
                            <p className="text-sm text-slate-600">Host at a luxury venue</p>
                        </CardContent>
                    </Card>

                    {/* At home */}
                    <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                            bookingForm.locationType === "customer" ? "bg-primaryColor" : ""
                        }`}
                        onClick={() => handleLocationTypeChange("customer")}
                    >
                        <CardContent className="p-4 text-center">
                            <Home className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                            <h3 className="font-semibold">At home</h3>
                            <p className="text-sm text-slate-600">Host at your own location</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Venue selection */}
                {bookingForm.locationType === "venue" && (
                    <div>
                        <Label className="text-sm font-medium mb-2 block">Select venue</Label>
                        <Select
                            value={bookingForm.venueId?.toString() ?? ""}
                            onValueChange={(value) =>
                                setBookingForm((prev) => ({
                                    ...prev,
                                    venueId: Number(value),
                                    roomId: null
                                }))
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select venue" />
                            </SelectTrigger>
                            <SelectContent>
                                {listVenue?.map((venue) => (
                                    <SelectItem key={venue.id} value={venue.id.toString()}>
                                        {venue.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors?.venueId && (
                            <p className="text-sm text-red-600 mt-2">{errors.venueId}</p>
                        )}
                    </div>
                )}

                {/* Room selection */}
                {bookingForm.locationType === "venue" && (
                    <div className="mt-4">
                        <Label className="text-sm font-medium mb-2 block">Select room</Label>
                        <Select
                            value={bookingForm.roomId?.toString() ?? ""}
                            onValueChange={(value) =>
                                setBookingForm((prev) => ({
                                    ...prev,
                                    roomId: Number(value)
                                }))
                            }
                            disabled={!bookingForm.venueId}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select room" />
                            </SelectTrigger>
                            <SelectContent>
                                {listVenue?.find((v) => v.id === Number(bookingForm.venueId))?.rooms?.map((room) => (
                                    <SelectItem key={room.id} value={room.id.toString()}>
                                        {room.name} – {room.price.toLocaleString("vi-VN")} đ
                                        (includes service, tables, chairs, dishware)
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors?.roomId && (
                            <p className="text-sm text-red-600 mt-2">{errors.roomId}</p>
                        )}
                    </div>
                )}

                {/* Customer address input */}
                {bookingForm.locationType === "customer" && (
                    <div>
                        <Label htmlFor="address" className="text-sm font-medium mb-2 block">
                            Event address
                        </Label>
                        <Textarea
                            id="address"
                            placeholder="Enter detailed address..."
                            value={bookingForm.customerAddress}
                            onChange={(e) =>
                                setBookingForm((prev) => ({
                                    ...prev,
                                    customerAddress: e.target.value
                                }))
                            }
                        />
                        {errors?.customerAddress && (
                            <p className="text-sm text-red-600 mt-2">{errors.customerAddress}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Step1EventLocation;
