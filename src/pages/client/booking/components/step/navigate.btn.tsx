// ** React
import React from "react";

// ** Shadcn ui
import { Button } from "@/components/ui/button";

// ** Lucide Icon
import { ArrowLeft, ArrowRight, CreditCard } from "lucide-react";

type NavigateBtnProps = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    onNext?: () => void;
    onPrev?: () => void;
    isSubmitting?: boolean;
    disableNext?: boolean;
};

const NavigateBtn = ({
                         currentStep,
                         setCurrentStep,
                         onNext,
                         onPrev,
                         isSubmitting = false,
                         disableNext = false,
                     }: NavigateBtnProps) => {
    const handlePrev = () => {
        if (onPrev) {
            onPrev();
        } else {
            setCurrentStep((prev) => Math.max(1, prev - 1));
        }
    };

    const handleNext = () => {
        if (onNext) {
            onNext();
        } else {
            setCurrentStep((prev) => Math.min(4, prev + 1));
        }
    };

    return (
        <div className="flex justify-between pt-6 border-t">
            {/* Back button */}
            <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1 || isSubmitting}
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
            </Button>

            {/* Next or Submit button */}
            {currentStep < 4 ? (
                <Button
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/80"
                    disabled={disableNext || isSubmitting}
                >
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        if (onNext) {
                            onNext();
                        }
                    }}
                    className="bg-primary hover:bg-primary/80"
                    disabled={isSubmitting}
                >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Confirm Booking
                </Button>
            )}
        </div>
    );
};

export default NavigateBtn;
