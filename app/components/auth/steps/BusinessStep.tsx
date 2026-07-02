"use client";

import { Building2, Link as LinkIcon } from "lucide-react";
import type { AuthFormData } from "../types";

const SEGMENTS = [
    "E-commerce",
    "SaaS / Software",
    "Educação",
    "Saúde",
    "Serviços financeiros",
    "Marketplace",
    "Outro",
];

interface BusinessStepProps {
    data: AuthFormData;
    onChange: (
        field: "companyName" | "website" | "segment",
        value: string,
    ) => void;
}

export function BusinessStep({ data, onChange }: BusinessStepProps) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-(--font-careca-display) text-3xl font-extrabold leading-tight text-[#19150F]">
                    Sobre seu negócio
                </h2>
                <p className="mt-2 text-sm text-[#3B342B]">
                    Conte um pouco sobre sua empresa ou projeto.
                </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Nome da empresa (opcional)
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Building2 className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type="text"
                        autoFocus
                        value={data.companyName}
                        onChange={(event) =>
                            onChange("companyName", event.target.value)
                        }
                        placeholder="Ex.: Minha Empresa LTDA"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Site ou link (opcional)
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <LinkIcon className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type="url"
                        value={data.website}
                        onChange={(event) => onChange("website", event.target.value)}
                        placeholder="https://seudominio.com.br"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Segmento
                <select
                    value={data.segment}
                    onChange={(event) => onChange("segment", event.target.value)}
                    className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-normal text-[#19150F] outline-none"
                >
                    <option value="">Selecione seu segmento</option>
                    {SEGMENTS.map((segment) => (
                        <option key={segment} value={segment}>
                            {segment}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
