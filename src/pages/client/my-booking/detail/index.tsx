// ** React
import React, { useEffect, useState } from "react";

// ** react router
import { useParams } from "react-router-dom";

// ** Lucide Icon
import {
    Calendar,
    Clock,
    User,
    Phone,
    Mail,
    CreditCard,
    Users,
    FileText,
    CheckCircle,
    XCircle,
    AlertCircle,
} from "lucide-react";
import type {TDetailBooking, TProfileAPI} from "@/types/data";
import {getProfile} from "@/services/auth";
import {getBookingDetail} from "@/services/booking";
import {formatCurrency, formatDate} from "@/utils/format.ts";
import PaymentBtn from "@/pages/client/my-booking/components/payment.btn.tsx";
import CancelBookingDialog from "@/pages/client/my-booking/components/cancel.booking.dialog.tsx";
import ReorderButton from "@/pages/client/my-booking/components/re.order.button.tsx";

// ** Components


// ** Utils


// ** Services


// ** Types


const MyBookingDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [bookingDetail, setBookingDetail] = useState<TDetailBooking | null>(null);
    const [userInfo, setUserInfo] = useState<TProfileAPI>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                if (!id) return
                const booking = await getBookingDetail(+id);
                const user = await getProfile();
                setBookingDetail(booking);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setUserInfo(user);
            } catch (err) {
                console.error("Error fetching booking detail:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div className="p-6 text-center">Loading booking details...</div>;
    }

    if (!bookingDetail) {
        return <div className="p-6 text-center">No booking found</div>;
    }

    // destructure sau khi đã có data
    const {
        menu,
        services,
        venue,
        orderCode,
        paymentMethod,
        email,
        name,
        phone,
        notes,
        eventDate,
        eventTime,
        createdAt,
        room,
        event,
        people,
        status,
        address,
    } = bookingDetail;

    // Status config
    const getStatusConfig = (status: string) => {
        switch (status) {
            case "confirmed":
                return {
                    icon: CheckCircle,
                    color: "text-green-600 bg-green-50 border-green-200",
                    text: "Confirmed",
                    description:
                        "Your order has been confirmed and is ready for payment.",
                };
            case "pending":
                return {
                    icon: AlertCircle,
                    color: "text-yellow-600 bg-yellow-50 border-yellow-200",
                    text: "Pending",
                    description: "Your order is pending review and approval by admin.",
                };
            case "cancelled":
                return {
                    icon: XCircle,
                    color: "text-red-600 bg-red-50 border-red-200",
                    text: "Cancelled",
                    description: "Your order has been cancelled.",
                };
            case "paid":
                return {
                    icon: CheckCircle,
                    color: "text-amber-600 bg-amber-50 border-amber-200",
                    text: "Paid",
                    description: "Your order has been successfully paid.",
                };
            default:
                return {
                    icon: AlertCircle,
                    color: "text-gray-600 bg-gray-50 border-gray-200",
                    text: "Unknown",
                    description: "",
                };
        }
    };

    const statusConfig = getStatusConfig(status);
    const StatusIcon = statusConfig.icon;

    const calculateTotal = () => {
        const roomTotal = room?.price || 0;
        const menuTotal = (menu?.price || 0) * people;
        const serviceTotal =
            services?.reduce((sum, service) => sum + service.price, 0) || 0;
        return roomTotal + menuTotal + serviceTotal;
    };

    const calculatePayableAmount = () => {
        const total = calculateTotal();
        return paymentMethod === "deposit" ? total * 0.3 : total;
    };

    const canCancel = ["pending", "confirmed"].includes(status);
    const canReorder = ["cancelled", "paid"].includes(status);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Info Your Booking
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Order Code: {orderCode}
                                </p>
                            </div>
                            <div
                                className={`flex items-center px-3 py-1 rounded-full border ${statusConfig.color}`}
                            >
                                <StatusIcon className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">{statusConfig.text}</span>
                            </div>
                        </div>
                        {statusConfig.description && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-700">{statusConfig.description}</p>
                                {status === 'pending' && (
                                    <div className="mt-3 text-sm text-yellow-700">
                                        <p className="font-medium">Estimated processing time: 24 hours</p>
                                        <p>We will send you an email notification once the order is approved.</p>
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="mt-4">
                            {canReorder && userInfo && (
                                <ReorderButton bookingId={Number(id)}/>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Customer Information */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Info Customer</h2>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                <div className="flex items-center">
                                    <User className="w-5 h-5 text-gray-400 mr-3"/>
                                    <span className="text-gray-900">{name}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-gray-400 mr-3"/>
                                    <span className="text-gray-900">{phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-gray-400 mr-3"/>
                                    <span className="text-gray-900">{email}</span>
                                </div>
                            </div>
                        </div>

                        {/* Event Information */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Info Event</h2>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                {event && (
                                    <div className="bg-amber-50 rounded-lg p-4">
                                        <h3 className="font-medium text-amber-900">{event.subName}</h3>
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 text-gray-400 mr-3"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Event Date</p>
                                            <p className="text-gray-900">{formatDate(eventDate)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 text-gray-400 mr-3"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Event Time</p>
                                            <p className="text-gray-900">{eventTime}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Users className="w-5 h-5 text-gray-400 mr-3"/>
                                    <div>
                                        <p className="text-sm text-gray-500">People</p>
                                        <p className="text-gray-900">{people} people</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Venue & Rooms */}
                        {venue && (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900">Venue & Room</h2>
                                </div>
                                <div className="px-6 py-4 space-y-4">
                                    <div className="border-l-4 border-amber-500 pl-4">
                                        <h3 className="font-medium text-gray-900">{venue.name}</h3>
                                        <p className="text-sm text-gray-600">{venue.address}</p>
                                    </div>
                                    {room && (
                                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                                            <div>
                                                <p className="font-medium text-gray-900">{room.name}</p>
                                                <p className="text-sm text-gray-600">Capacity: {room.people} people</p>
                                            </div>
                                            <p className="font-semibold text-amber-600">{formatCurrency(room.price)}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Menu */}
                        {menu && (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="flex justify-between px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900">Menu - {menu.name}</h2>
                                    <div className="text-amber-600 font-semibold">{formatCurrency(menu.price)}</div>
                                </div>
                                <div className="px-6 py-4">
                                    {menu.dishes && menu.dishes.length > 0 && (
                                        <div className="space-y-2">
                                            <div className="space-y-1">
                                                {menu.dishes.map((dish, index) => (
                                                    <div key={dish.id || index} className="text-sm text-gray-700">
                                                        • {dish.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Services */}
                        {services && services.length > 0 && (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900">Additional Services</h2>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="space-y-3">
                                        {services.map((service, index) => (
                                            <div key={service.id || index}
                                                 className="flex justify-between items-center">
                                                <p className="text-gray-700">{service.name}</p>
                                                <p className="font-semibold text-amber-600">{formatCurrency(service.price)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notes */}
                        {notes && (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                                        <FileText className="w-5 h-5 mr-2"/>
                                        Notes
                                    </h2>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-gray-700 leading-relaxed">{notes}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Order Summary */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-20">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                            </div>
                            <div className="px-6 py-4 space-y-3">
                                {room && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Phòng</span>
                                        <span className="text-gray-900">{formatCurrency(room.price)}</span>
                                    </div>
                                )}
                                {menu && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Menu ({people} people)</span>
                                        <span className="text-gray-900">{formatCurrency(menu.price * people)}</span>
                                    </div>
                                )}
                                {services && services.length > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Service</span>
                                        <span className="text-gray-900">
                                            {formatCurrency(services.reduce((sum, service) => sum + service.price, 0))}
                                        </span>
                                    </div>
                                )}
                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-semibold text-gray-900">Total</span>
                                        <span
                                            className="text-lg font-bold text-amber-600">{formatCurrency(calculatePayableAmount())}</span>
                                    </div>
                                </div>

                                {status === 'pending' && (
                                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-xs text-yellow-700 text-center">
                                            Prices may change after admin review
                                        </p>
                                    </div>
                                )}

                                {status === 'confirmed' && (
                                    <div className="mt-4">
                                        <PaymentBtn bookingId={Number(id)}/>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Info Payment</h2>
                            </div>
                            <div className="px-6 py-4">
                                <div className="flex items-center mb-4">
                                    <CreditCard className="w-5 h-5 text-gray-400 mr-3"/>
                                    <span className="text-gray-900">
                                        {paymentMethod === "full" ? 'Full payment' : '30% deposit to reserve'}
                                    </span>
                                </div>

                                {status === 'pending' && (
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <div className="flex items-start">
                                            <div>
                                                <h3 className="text-sm font-medium text-yellow-800">Pending Approval for Payment</h3>
                                                <p className="text-sm text-yellow-700 mt-1">
                                                    Your order is currently under admin review. Once approved, you will receive payment instructions via email.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {status === 'confirmed' && (
                                    <div className="space-y-3">
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <div>
                                                    <h3 className="text-sm font-medium text-green-800">Approved – Ready for Payment</h3>
                                                    <p className="text-sm text-green-700 mt-1">
                                                        Your order has been approved. Please proceed with the payment to complete your reservation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <PaymentBtn bookingId={Number(id)}/>
                                    </div>
                                )}

                                {status === 'paid' && (
                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                        <div className="flex items-start">
                                            <div>
                                                <h3 className="text-sm font-medium text-amber-800">Payment Successful</h3>
                                                <p className="text-sm text-amber-700 mt-1">
                                                    Thank you for your payment. We will contact you shortly to confirm the event details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {status === 'cancelled' && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <div className="flex items-start">
                                            <div>
                                                <h3 className="text-sm font-medium text-red-800">Order Cancelled</h3>
                                                <p className="text-sm text-red-700 mt-1">
                                                    This order has been cancelled. Please contact us if you have any questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Info */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Order Information</h2>
                            </div>
                            <div className="px-6 py-4 space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500">Order Code</p>
                                    <p className="text-gray-900 font-mono">{orderCode}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Created At</p>
                                    <p className="text-gray-900">{formatDate(createdAt)}</p>
                                </div>
                                {address && (
                                    <div>
                                        <p className="text-sm text-gray-500">Customer Address</p>
                                        <p className="text-gray-900">{address}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2 mt-6">
                    {canCancel && userInfo && (
                        <CancelBookingDialog
                            bookingId={Number(id)}
                            orderCode={orderCode}
                            status={status}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookingDetail;
