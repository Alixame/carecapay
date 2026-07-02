/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

import { CheckCircle2 } from "lucide-react";

interface MascotColumnProps {
    heading: ReactNode;
    subtitle: string;
    benefits?: string[];
}

export function MascotColumn({
    heading,
    subtitle,
    benefits,
}: MascotColumnProps) {
    return (
        <div className="flex flex-col gap-3">
            <img
                alt="Careca mascot"
                src={"/assets/careca-auth.png"}
                className="relative z-10 h-auto w-full max-w-2xl"
            />

            <div>
                <h2 className="text-4xl font-extrabold leading-[1.1] text-[#19150F]">
                    {heading}
                </h2>
                
                <p className="mt-3 max-w-md text-base leading-relaxed text-[#3B342B]">
                    {subtitle}
                </p>
            </div>

            {benefits ? (
                <ul className="flex flex-col gap-2.5">
                    {benefits.map((benefit) => (
                        <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm font-semibold text-[#3B342B]"
                        >
                            <CheckCircle2 className="h-4 w-4 text-[#FF7A00]" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
