// ** Shadcn ui
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// ** Lucide Icon
import { ChefHat } from "lucide-react";

// ** Types
import type {TMenu, TService} from "@/types/data";
// ** pages
import type {TBookingFormProps} from "@/pages/client/booking/components/step/step1.event.location.tsx";
import type {BookingForm} from "@/pages/client/booking";


type TStep3 = TBookingFormProps & {
    eventMenus: TMenu[];
    eventServices: TService[];
};

const Step3MenuService = ({
                              bookingForm,
                              setBookingForm,
                              errors,
                              eventMenus,
                              eventServices
                          }: TStep3) => {
    const handleMenuSelect = (menuId: number) => {
        setBookingForm((prev: BookingForm) => ({
            ...prev,
            selectedMenu: prev.selectedMenu === menuId ? null : menuId,
        }));
    };

    const handleAddOnToggle = (addOnId: number) => {
        setBookingForm((prev: BookingForm) => ({
            ...prev,
            selectedAddOns: prev.selectedAddOns.includes(addOnId)
                ? prev.selectedAddOns.filter((id) => id !== addOnId)
                : [...prev.selectedAddOns, addOnId],
        }));
    };

    return (
        <div className="space-y-2.5">
            {/* Select menu */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Select Menu</Label>
                <div className="max-h-[50vh] overflow-y-auto">
                    <div className="grid gap-4">
                        {eventMenus.length > 0 ? eventMenus.map((menu) => (
                            <Card
                                key={menu.id}
                                className={`cursor-pointer transition-all hover:shadow-md border ${
                                    bookingForm.selectedMenu === menu.id
                                        ? "bg-amber-50 border-amber-200"
                                        : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                                onClick={() => {
                                    if (menu.id) handleMenuSelect(menu.id);
                                }}
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <ChefHat className="h-6 w-6 text-amber-600" />
                                            <div>
                                                <h3 className="font-semibold">{menu.name}</h3>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-amber-600">
                                                {menu.price.toLocaleString("vi-VN")}₫/guest
                                            </p>
                                            <Checkbox
                                                className="hidden"
                                                checked={bookingForm.selectedMenu === menu.id}
                                                onCheckedChange={() => handleMenuSelect(menu.id!)}
                                            />
                                        </div>
                                    </div>

                                    {menu.dishes && menu.dishes.length > 0 && (
                                        <div
                                            className="mt-3 pt-3 border-t border-gray-200"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Accordion type="single" collapsible>
                                                <AccordionItem value={`menu-${menu.id}`} className="border-none">
                                                    <AccordionTrigger className="text-sm font-medium text-gray-700 py-2 hover:no-underline">
                                                        View menu details ({menu.dishes.length} items)
                                                    </AccordionTrigger>
                                                    <AccordionContent className="pt-2">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            {menu.dishes.map((dish, index) => (
                                                                <div key={index} className="text-sm text-gray-600 flex items-center">
                                                                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 flex-shrink-0"></span>
                                                                    <span>{dish?.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )) : (<div className='text-center text-gray-500'>Don't have menu in this event</div>)}
                    </div>
                </div>
                {errors?.selectedMenu && (
                    <p className="text-sm text-red-500 mt-2">{errors.selectedMenu}</p>
                )}
            </div>

            {/* Additional services */}
            <div>
                <Label className="text-base font-semibold mb-4 block">Additional Services</Label>
                <div className="grid gap-4">
                    {eventServices.length > 0 ? eventServices.map((service) => (
                        <Card
                            key={service.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                                bookingForm.selectedAddOns.includes(service.id)
                                    ? "bg-amber-50"
                                    : ""
                            }`}
                            onClick={() => handleAddOnToggle(service.id)}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-xl">{service.icon}</span>
                                        <div>
                                            <h3 className="font-semibold">{service.name}</h3>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-amber-600">
                                            {service.price.toLocaleString("vi-VN")}₫
                                        </p>
                                        <Checkbox
                                            className="hidden"
                                            checked={bookingForm.selectedAddOns.includes(service.id)}
                                            onCheckedChange={() => handleAddOnToggle(service.id)}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )) : (<div className='text-center text-gray-500'>Don't have service in this event</div>)}
                </div>
            </div>
        </div>
    );
};

export default Step3MenuService;
