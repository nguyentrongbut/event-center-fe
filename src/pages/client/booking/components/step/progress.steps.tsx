// ** Configs
import {steps} from "@/configs/pages.tsx";

const ProgressSteps = ({currentStep}: { currentStep: number }) => {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const isCompleted = currentStep > step.number;
                    const isActive = currentStep === step.number;

                    return (
                        <div key={step.number} className="flex items-center">
                            <div
                                className={`
                                    shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                                    ${isCompleted
                                    ? "bg-primary text-white"
                                    : isActive
                                        ? "bg-white border-2 bordbg-primary text-primary/80"
                                        : "bg-slate-200 text-slate-600"}
                                `}
                                aria-current={isActive ? "step" : undefined}
                            >
                                {isCompleted ? "✓" : step.number}
                            </div>

                            <div className="ml-3 hidden sm:block">
                                <p className={`text-sm font-medium ${isActive ? "text-primary/80" : "text-slate-600"}`}>
                                    {step.title}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div
                                    className={`w-16 h-0.5 mx-4 ${isCompleted ? "bg-primary" : "bg-slate-200"}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressSteps;
