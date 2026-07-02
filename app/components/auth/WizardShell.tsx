import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import type { ReactNode } from "react";
import { MascotColumn } from "./MascotColumn";
import { Stepper } from "./Stepper";

interface WizardShellProps {
    currentStep: number;
    mascot: string;
    footer?: ReactNode;
    children: ReactNode;
}

export function WizardShell({
    currentStep,
    mascot,
    footer,
    children,
}: WizardShellProps) {
    return (
        <div className="flex min-h-screen flex-col bg-[#F3EEE4]">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
                <Stepper currentStep={currentStep} />
            </div>

            <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-16 px-6 py-12 lg:grid-cols-[1.05fr_1fr] lg:px-10">
                <div className="hidden lg:block">
                    <MascotColumn
                        heading="Vamos criar sua conta"
                        subtitle="É rápido e seguro. Leva menos de 2 minutos."
                    />
                </div>

                <div className="mx-auto w-full max-w-md rounded-3xl border border-black/5 bg-white p-10 shadow-[0_20px_60px_-15px_rgba(25,21,15,0.15)]">
                    {children}
                </div>
            </div>

            {footer}
        </div>
    );
}
