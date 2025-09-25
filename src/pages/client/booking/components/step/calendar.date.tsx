// ** React
import React, {useState} from "react";

// ** Shadcn ui
import { Button } from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";

// ** Lucide Icon
import { ChevronDownIcon } from 'lucide-react';

interface CalendarDateProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}

const CalendarDate: React.FC<CalendarDateProps> = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);

    const getMinDate = () => {
        const today = new Date();
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 7);
        minDate.setHours(0, 0, 0, 0);
        return minDate;
    };

    return (
        <div className="flex flex-col gap-3">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal border-[#191720]"
                    >
                        {value ? value.toLocaleDateString() : 'Select date'}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                    <Calendar
                        mode="single"
                        selected={value}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            onChange(date);
                            setOpen(false);
                        }}
                        disabled={(date) => date < getMinDate()}
                        fromDate={getMinDate()}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default CalendarDate;
