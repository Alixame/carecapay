const STEPS = ["E-mail", "Senha", "Perfil", "Negócio", "Conclusão"];

interface StepperProps {
    currentStep: number;
}

export function Stepper({ currentStep }: StepperProps) {
    return (
        <ol className="flex items-center justify-center gap-4 py-6 sm:gap-8">
            {STEPS.map((label, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isDone = stepNumber < currentStep;

                return (
                    <li key={label} className="flex items-center gap-4 sm:gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <span
                                className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-bold transition-colors ${
                                    isActive
                                        ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                                        : isDone
                                          ? "bg-[#FF7A00] text-white"
                                          : "border border-black/10 bg-white text-[#9A8F7F]"
                                }`}
                            >
                                {stepNumber}
                            </span>
                            <span
                                className={`hidden text-xs font-semibold sm:block ${
                                    isActive ? "text-[#FF7A00]" : "text-[#9A8F7F]"
                                }`}
                            >
                                {label}
                            </span>
                        </div>

                        {stepNumber < STEPS.length ? (
                            <span
                                className={`hidden h-0.5 w-12 rounded-full sm:block ${
                                    isDone ? "bg-[#FF7A00]" : "bg-black/10"
                                }`}
                            />
                        ) : null}
                    </li>
                );
            })}
        </ol>
    );
}
