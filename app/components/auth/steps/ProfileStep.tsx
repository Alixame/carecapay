"use client";

import { User, Phone } from "lucide-react";
import type { AuthFormData } from "../types";

interface ProfileStepProps {
    data: AuthFormData;
    onChange: (field: "fullName" | "phone", value: string) => void;
}

export function ProfileStep({ data, onChange }: ProfileStepProps) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-(--font-careca-display) text-3xl font-extrabold leading-tight text-[#19150F]">
                    Fale sobre você
                </h2>
                <p className="mt-2 text-sm text-[#3B342B]">
                    Precisamos de algumas informações básicas.
                </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Nome completo
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <User className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type="text"
                        required
                        autoFocus
                        value={data.fullName}
                        onChange={(event) => onChange("fullName", event.target.value)}
                        placeholder="Seu nome"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Telefone (opcional)
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Phone className="h-4 w-4 text-[#9A8F7F]" />
                    <span className="text-sm text-[#3B342B]">🇧🇷 +55</span>
                    <input
                        type="tel"
                        value={data.phone}
                        onChange={(event) => onChange("phone", event.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
            </label>
        </div>
    );
}
