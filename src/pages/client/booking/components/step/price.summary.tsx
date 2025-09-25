// ** Shadcn ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ** Types
import type {TEvent, TMenu, TService, TVenue} from "@/types/data";

// ** pages
import type {BookingForm} from "@/pages/client/booking";

type PriceSummaryProps = {
    bookingForm: BookingForm;
    calculateTotal: () => number;
    listEvent: TEvent[];
    listVenue: TVenue[];
    eventMenus: TMenu[];
    eventServices: TService[];
};

const formatCurrency = (amount: number) => {
    return amount.toLocaleString("vi-VN") + "đ";
};

const PriceSummary = ({
                          bookingForm,
                          calculateTotal,
                          listEvent,
                          listVenue,
                          eventMenus,
                          eventServices,
                      }: PriceSummaryProps) => {
    const selectedEvent = listEvent.find((e) => e.id === bookingForm.eventType);
    const selectedVenue = listVenue.find((v) => v.id === bookingForm.venueId);
    const selectedRoom = selectedVenue?.rooms.find((r) => r.id === bookingForm.roomId);
    const selectedMenu = eventMenus.find((m) => m.id === bookingForm.selectedMenu);

    return (
        <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Event */}
                    {selectedEvent && (
                        <div className="flex justify-between">
                            <span>
                                {selectedEvent.subName}
                                <br />
                                <span className="text-sm text-slate-600">
                                    {bookingForm.guestCount} guests
                                </span>
                            </span>
                        </div>
                    )}

                    {/* Venue */}
                    {selectedVenue && selectedRoom && (
                        <div className="flex justify-between">
                            <span>
                                {selectedVenue.name}
                                <br />
                                <span className="text-sm text-slate-600">{selectedRoom.name}</span>
                            </span>
                            <span className="font-semibold">
                                {formatCurrency(selectedRoom.price)}
                            </span>
                        </div>
                    )}

                    {/* Menu */}
                    {selectedMenu && (
                        <div className="flex justify-between">
                            <span>
                                {selectedMenu.name}
                                <br />
                                <span className="text-sm text-slate-600">
                                    {bookingForm.guestCount} guests
                                </span>
                            </span>
                            <span className="font-semibold">
                                {formatCurrency(selectedMenu.price * bookingForm.guestCount)}
                            </span>
                        </div>
                    )}

                    {/* Add-on services */}
                    {bookingForm.selectedAddOns.map((id) => {
                        const service = eventServices.find((s) => s.id === id);
                        if (!service) return null;
                        return (
                            <div key={id} className="flex justify-between">
                                <span>{service.name}</span>
                                <span className="font-semibold">
                                    {formatCurrency(service.price)}
                                </span>
                            </div>
                        );
                    })}

                    <Separator />

                    {/* Total */}
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">{formatCurrency(calculateTotal())}</span>
                    </div>

                    <div className="text-sm text-slate-600 space-y-1">
                        <p>• VAT included</p>
                        <p>• You can pay a 30% deposit to reserve</p>
                        <p>• Supports Momo payments</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PriceSummary;
