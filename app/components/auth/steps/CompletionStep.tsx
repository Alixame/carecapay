"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface CompletionStepProps {
    onFinish: () => void;
}

const CHECKLIST = [
    "Conta criada com sucesso",
    "Ambiente de testes liberado",
    "Documentação completa",
    "Suporte humanizado",
];

export function CompletionStep({ onFinish }: CompletionStepProps) {
    return (
        <div className="flex flex-col items-center gap-6 text-center">
            <Image
                src="/assets/careca-final-cta.png"
                alt=""
                width={160}
                height={160}
                className="h-40 w-40 object-contain"
            />

            <div>
                <h2 className="font-(--font-careca-display) text-3xl font-extrabold leading-tight text-[#19150F]">
                    Tudo pronto! 🎉
                </h2>
                <p className="mt-2 text-sm text-[#3B342B]">
                    Sua conta foi criada com sucesso. Vamos nessa!
                </p>
            </div>

            <ul className="flex w-full flex-col gap-2 text-left">
                {CHECKLIST.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-2 text-sm font-semibold text-[#3B342B]"
                    >
                        <CheckCircle2 className="h-4 w-4 text-[#FF7A00]" />
                        {item}
                    </li>
                ))}
            </ul>

            <button
                type="button"
                onClick={onFinish}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#FF8A00]"
            >
                Acessar dashboard
                <ArrowRight className="h-4 w-4" />
            </button>

            <a
                href="#"
                className="text-sm font-semibold text-[#FF7A00] hover:underline"
            >
                Explorar a documentação
            </a>
        </div>
    );
}
