// ** React
import { useEffect, useState } from "react";

// ** React Router
import { useNavigate } from "react-router-dom";

// ** React hot toast
import toast from "react-hot-toast";

// ** Components
import Container from "@/components/common/container.tsx";

// ** Pages
import ProgressSteps from "@/pages/client/booking/components/step/progress.steps.tsx";
import Step1EventLocation from "@/pages/client/booking/components/step/step1.event.location.tsx";
import Step2DateGuest from "@/pages/client/booking/components/step/step2.date.guest.tsx";
import Step3MenuService from "@/pages/client/booking/components/step/step3.menu.service.tsx";
import Step4CustomerPayment from "@/pages/client/booking/components/step/step4.customer.payment.tsx";
import NavigateBtn from "@/pages/client/booking/components/step/navigate.btn.tsx";
import PriceSummary from "@/pages/client/booking/components/step/price.summary.tsx";

// ** Shadcn ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ** Configs
import {steps} from "@/configs/pages.tsx";

// ** Types
import type {TEvent, TProfileAPI, TVenue} from "@/types/data";

// ** Services
import {getProfile} from "@/services/auth";
import {sendBooking} from "@/services/booking";

export interface BookingForm {
    userId: number | null;
    eventType: number | null;
    locationType: "venue" | "customer";
    venueId: number | null;
    roomId: number | null;
    customerAddress: string;
    guestCount: number;
    paymentMethod: "deposit" | "full";
    eventDate: string;
    eventTime: string;
    selectedMenu: number | null;
    selectedAddOns: number[];
    customerInfo: {
        name: string;
        email: string;
        phone: string;
        notes: string;
    };
}

export type BookingFormErrors = {
    eventType?: string;
    venueId?: string;
    roomId?: string;
    customerAddress?: string;
    eventDate?: string;
    eventTime?: string;
    guestCount?: string;
    paymentMethod?: string;
    selectedMenu?: string;
    selectedAddOns?: string;
    customerInfo?: {
        name?: string;
        email?: string;
        phone?: string;
    };
};

const BookingClient = () => {
    const [infoProfile, setInfoProfile] = useState<TProfileAPI | null>(null)
    const [listVenue, setListVenues] = useState<TVenue[]>([]);
    const [listEvent, setListEvents] = useState<TEvent[]>([]);

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    console.log(infoProfile)

    const [bookingForm, setBookingForm] = useState<BookingForm>({
        userId: infoProfile?.id ?? null,
        eventType: null,
        locationType: "venue",
        venueId: null,
        roomId: null,
        customerAddress: "",
        guestCount: 50,
        paymentMethod: "deposit",
        eventDate: "",
        eventTime: "",
        selectedMenu: null,
        selectedAddOns: [],
        customerInfo: {
            name: infoProfile?.name || "",
            email: infoProfile?.email || "",
            phone: infoProfile?.phone || "",
            notes: "",
        },
    });
    const [formErrors, setFormErrors] = useState<BookingFormErrors>({});
    
    const [, setIsLoadingVenues] = useState(false);
    const [, setIsLoadingEvent] = useState(false);
    const [, setIsSubmitting] = useState(false);

    useEffect(() => {

        const fetchInfoProfile = async () => {
            try {
                const data = await getProfile()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setInfoProfile(data)
            } catch (error) {
                console.error("Failed to load profile:", error)
            }
        }

        fetchInfoProfile()
    }, []);

    useEffect(() => {
        const init = () => {
            setBookingForm({
                userId: infoProfile?.id ?? null,
                eventType: null,
                locationType: "venue",
                venueId: null,
                roomId: null,
                customerAddress: "",
                guestCount: 50,
                paymentMethod: "deposit",
                eventDate: "",
                eventTime: "",
                selectedMenu: null,
                selectedAddOns: [],
                customerInfo: {
                    name: infoProfile?.name || "",
                    email: infoProfile?.email || "",
                    phone: infoProfile?.phone || "",
                    notes: "",
                },
            });
        };
        init();
    }, [infoProfile]);

    const selectedEvent = listEvent.find(
        (event) => event.id.toString() === String(bookingForm?.eventType)
    );
    const eventServices = selectedEvent?.services || [];
    const eventMenus = selectedEvent?.menus || [];

    const validateStep1 = () => {
        if (!bookingForm) return false;
        const errors: BookingFormErrors = {};
        if (!bookingForm.eventType) errors.eventType = "Please select an event type.";
        if (bookingForm.locationType === "venue") {
            if (!bookingForm.venueId) errors.venueId = "Please select a venue.";
            if (!bookingForm.roomId) errors.roomId = "Please select a room.";
        }
        if (bookingForm.locationType === "customer" && !bookingForm.customerAddress.trim())
            errors.customerAddress = "Please enter an address.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateStep2 = () => {
        if (!bookingForm) return false;
        const errors: BookingFormErrors = {};
        if (!bookingForm.eventDate) {
            errors.eventDate = "Please select a date.";
        } else {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const eventDate = new Date(bookingForm.eventDate);
            eventDate.setHours(0, 0, 0, 0);
            const diff = (eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
            if (diff < 7) errors.eventDate = "Event must be at least 7 days from today.";
        }
        const [hour, minute] = bookingForm.eventTime.split(":").map(Number);
        if (!bookingForm.eventTime || hour < 7 || hour > 17 || (hour === 17 && minute > 0))
            errors.eventTime = "Time must be between 07:00 and 17:00.";
        if (bookingForm.guestCount < 50 || bookingForm.guestCount > 1000)
            errors.guestCount = "Guest count must be between 50 and 1000.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateStep3 = () => {
        if (!bookingForm) return false;
        const errors: BookingFormErrors = {};
        if (!bookingForm.selectedMenu) errors.selectedMenu = "Please select a menu.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateStep4 = () => {
        if (!bookingForm) return false;
        const errors: BookingFormErrors = {};
        const c = bookingForm.customerInfo;
        const ci: BookingFormErrors["customerInfo"] = {};
        if (!c.name.trim()) ci.name = "Name is required.";
        if (!c.phone.trim()) ci.phone = "Phone is required.";
        if (!c.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))
            ci.email = "Invalid email format.";
        if (!bookingForm.paymentMethod)
            errors.paymentMethod = "Please select a payment method.";
        if (Object.keys(ci).length > 0) errors.customerInfo = ci;
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmitBooking = async () => {
        if (!bookingForm) return;

        setIsSubmitting(true);
        try {
            const res = await sendBooking(bookingForm);
            toast.success("Booking successful!");
            navigate(`/my-booking/${res.id}`);
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Booking failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNextStep = () => {
        const validators = [validateStep1, validateStep2, validateStep3, validateStep4];
        const currentValidator = validators[currentStep - 1];
        if (currentValidator()) {
            setFormErrors({});
            if (currentStep === 4) {
                handleSubmitBooking();
            } else {
                setCurrentStep((prev) => Math.min(4, prev + 1));
            }
        }
    };

    const handlePrevStep = () => {
        setFormErrors({});
        setCurrentStep((prev) => Math.max(1, prev - 1));
    };

    const calculateTotal = () => {
        if (!bookingForm) return 0;
        let total = 0;
        const {guestCount, selectedAddOns, selectedMenu, venueId, roomId} = bookingForm;
        if (venueId && roomId) {
            const venue = listVenue.find((v) => v.id === venueId);
            const room = venue?.rooms.find((r) => r.id === roomId);
            if (room) total += room.price;
        }
        const menu = eventMenus.find((m) => m.id === selectedMenu);
        if (menu) total += menu.price * guestCount;
        selectedAddOns.forEach((id) => {
            const addOn = eventServices.find((s) => s.id === id);
            if (addOn) total += addOn.price;
        });
        return total;
    };

    if (!bookingForm) return "Loading...";

    return (
        <div className="min-h-screen bg-slate-50">
            <Container className="container mx-auto px-4 py-8">
                <ProgressSteps currentStep={currentStep} />
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {steps[currentStep - 1].title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {currentStep === 1 && (
                                    <Step1EventLocation
                                        {...{
                                            bookingForm,
                                            setBookingForm,
                                            errors: formErrors,
                                            listEvent,
                                            setIsLoadingEvent,
                                            setListEvents,
                                            listVenue,
                                            setIsLoadingVenues,
                                            setListVenues,
                                        }}
                                    />
                                )}
                                {currentStep === 2 && (
                                    <Step2DateGuest
                                        {...{ bookingForm, setBookingForm, errors: formErrors }}
                                    />
                                )}
                                {currentStep === 3 && (
                                    <Step3MenuService
                                        {...{
                                            eventServices,
                                            eventMenus,
                                            bookingForm,
                                            setBookingForm,
                                            errors: formErrors,
                                        }}
                                    />
                                )}
                                {currentStep === 4 && (
                                    <Step4CustomerPayment
                                        {...{ bookingForm, setBookingForm, calculateTotal, errors: formErrors }}
                                    />
                                )}
                                <NavigateBtn
                                    {...{
                                        currentStep,
                                        onNext: handleNextStep,
                                        onPrev: handlePrevStep,
                                        setCurrentStep,
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <PriceSummary
                        {...{
                            bookingForm,
                            calculateTotal,
                            listEvent,
                            listVenue,
                            eventMenus,
                            eventServices,
                        }}
                    />
                </div>
            </Container>
        </div>
    );
};

export default BookingClient;
