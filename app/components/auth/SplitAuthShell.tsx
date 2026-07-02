/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MascotColumn } from "./MascotColumn";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
    "API simples e poderosa",
    "Pix, cartão e assinaturas",
    "Ambiente de testes 100% gratuito",
];

interface SplitAuthShellProps {
    children: ReactNode;
}

export function SplitAuthShell({ children }: SplitAuthShellProps) {
    return (
        <div className="min-h-screen bg-[#F3EEE4]">
            <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 py-12 lg:grid-cols-[1.05fr_1fr] lg:px-10">
                <div className="-mt-20 items-start lg:flex hidden flex-col">
                    <img
                        alt="Careca mascot"
                        src={"/assets/careca-auth-1.png"}
                        className="relative z-10 h-auto w-full max-w-2xl"
                    />

                    <div className="-mt-5 flex flex-col gap-1">
                        <h2 className="text-4xl font-extrabold leading-[1.1] text-[#19150F]">
                            A infraestrutura de pagamentos que{" "}
                            <span className="text-[#FF7A00]">simplifica</span> seu
                            negócio.
                        </h2>
                        
                        <p className="mt-1 max-w-md text-base leading-relaxed text-[#3B342B]">
                            Conecte sua plataforma em minutos e comece a receber pagamentos, assinaturas e Pix via API.
                        </p>
                    </div>

                    <ul className="mt-2 flex flex-col gap-1">
                        {BENEFITS.map((benefit) => (
                            <li
                                key={benefit}
                                className="flex items-center gap-2 text-sm font-semibold text-[#3B342B]"
                            >
                                <CheckCircle2 className="size-4 text-[#FF7A00]" />

                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mx-auto w-full max-w-md rounded-3xl border border-black/5 bg-white p-5 lg:p-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
