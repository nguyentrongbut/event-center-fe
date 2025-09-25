// ** Shadcn ui
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ** Lucide Icon
import { CreditCard } from "lucide-react";

// ** Pages
import type {BookingForm, BookingFormErrors} from "@/pages/client/booking";
import type {TBookingFormProps} from "@/pages/client/booking/components/step/step1.event.location.tsx";

type TStep4Props = TBookingFormProps & {
    calculateTotal: () => number;
    errors?: BookingFormErrors;
};

const Step4CustomerPayment = ({
                                  bookingForm,
                                  setBookingForm,
                                  calculateTotal,
                                  errors = {},
                              }: TStep4Props) => {
    const { customerInfo } = bookingForm;
    const customerErrors = errors.customerInfo || {};

    return (
        <div className="space-y-6">
            {/* Contact information */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Contact Information</Label>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                            Full Name *
                        </Label>
                        <Input
                            id="name"
                            value={customerInfo.name}
                            onChange={(e) =>
                                setBookingForm((prev: BookingForm) => ({
                                    ...prev,
                                    customerInfo: {
                                        ...prev.customerInfo,
                                        name: e.target.value,
                                    },
                                }))
                            }
                        />
                        {customerErrors.name && (
                            <p className="text-sm text-red-600 mt-1">{customerErrors.name}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                            Phone Number *
                        </Label>
                        <Input
                            id="phone"
                            value={customerInfo.phone}
                            onChange={(e) =>
                                setBookingForm((prev: BookingForm) => ({
                                    ...prev,
                                    customerInfo: {
                                        ...prev.customerInfo,
                                        phone: e.target.value,
                                    },
                                }))
                            }
                        />
                        {customerErrors.phone && (
                            <p className="text-sm text-red-600 mt-1">{customerErrors.phone}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="mt-4">
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email *
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) =>
                            setBookingForm((prev: BookingForm) => ({
                                ...prev,
                                customerInfo: {
                                    ...prev.customerInfo,
                                    email: e.target.value,
                                },
                            }))
                        }
                    />
                    {customerErrors.email && (
                        <p className="text-sm text-red-600 mt-1">{customerErrors.email}</p>
                    )}
                </div>

                {/* Notes */}
                <div className="mt-4">
                    <Label htmlFor="notes" className="text-sm font-medium mb-2 block">
                        Additional Notes
                    </Label>
                    <Textarea
                        id="notes"
                        placeholder="Special requests, event details..."
                        value={customerInfo.notes}
                        onChange={(e) =>
                            setBookingForm((prev: BookingForm) => ({
                                ...prev,
                                customerInfo: {
                                    ...prev.customerInfo,
                                    notes: e.target.value,
                                },
                            }))
                        }
                    />
                </div>
            </div>

            {/* Payment method */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                <div className="grid md:grid-cols-2 gap-5">
                    <Button
                        variant="outline"
                        className={`h-16 flex text-sm items-center justify-center px-4 gap-8 cursor-pointer hover:bg-amber-50 ${
                            bookingForm.paymentMethod === "deposit" ? "bg-amber-100" : ""
                        }`}
                        onClick={() =>
                            setBookingForm((prev: BookingForm) => ({
                                ...prev,
                                paymentMethod: "deposit",
                            }))
                        }
                    >
                        <div className="flex items-center gap-2">
                            <CreditCard className="size-5 text-amber-600" />
                            <span className="font-semibold">30% Deposit</span>
                        </div>
                        <p className="text-sm text-slate-600">
                            {Math.floor(calculateTotal() * 0.3).toLocaleString("vi-VN")}₫
                        </p>
                    </Button>

                    <Button
                        variant="outline"
                        className={`h-16 flex text-sm items-center justify-center px-4 gap-8 cursor-pointer hover:bg-amber-50 ${
                            bookingForm.paymentMethod === "full" ? "bg-amber-100" : ""
                        }`}
                        onClick={() =>
                            setBookingForm((prev: BookingForm) => ({
                                ...prev,
                                paymentMethod: "full",
                            }))
                        }
                    >
                        <div className="flex items-center gap-2">
                            <CreditCard className="size-5 text-amber-600" />
                            <span className="font-semibold">Full Payment</span>
                        </div>
                        <p className="text-sm text-slate-600">
                            {calculateTotal().toLocaleString("vi-VN")}₫
                        </p>
                    </Button>
                </div>
                {errors.paymentMethod && (
                    <p className="text-sm text-red-600 mt-2">{errors.paymentMethod}</p>
                )}
            </div>
        </div>
    );
};

export default Step4CustomerPayment;
