import { ArrowRight } from "lucide-react";

interface WizardFooterProps {
    currentStep: number;
    totalSteps: number;
    onCancel: () => void;
    onContinue: () => void;
    continueLabel?: string;
    continueDisabled?: boolean;
}

export function WizardFooter({
    currentStep,
    totalSteps,
    onCancel,
    onContinue,
    continueLabel = "Continuar",
    continueDisabled = false,
}: WizardFooterProps) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="sticky bottom-0 border-t border-black/5 bg-white/90 px-6 py-5 backdrop-blur-xl lg:px-10">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm font-semibold text-[#3B342B] transition-colors hover:text-[#FF7A00]"
                >
                    Cancelar
                </button>

                <div className="hidden flex-1 items-center gap-4 sm:flex">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10">
                        <div
                            className="h-full rounded-full bg-[#FF7A00] transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold text-[#3B342B]">
                        Passo {currentStep} de {totalSteps}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onContinue}
                    disabled={continueDisabled}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#FF8A00] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {continueLabel}
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
