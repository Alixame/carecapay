"use client";

import { Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { AuthFormData } from "../types";

interface SignupPasswordStepProps {
    data: AuthFormData;
    onChange: (field: "password" | "confirmPassword", value: string) => void;
}

export function SignupPasswordStep({
    data,
    onChange,
}: SignupPasswordStepProps) {
    const [visible, setVisible] = useState(false);
    const passwordsMismatch =
        data.confirmPassword.length > 0 && data.password !== data.confirmPassword;

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-(--font-careca-display) text-3xl font-extrabold leading-tight text-[#19150F]">
                    Crie uma senha segura
                </h2>
                <p className="mt-2 text-sm text-[#3B342B]">
                    Ela será usada para acessar sua conta.
                </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Senha
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Lock className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type={visible ? "text" : "password"}
                        required
                        minLength={8}
                        autoFocus
                        value={data.password}
                        onChange={(event) => onChange("password", event.target.value)}
                        placeholder="Mínimo de 8 caracteres"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
                    >
                        {visible ? (
                            <EyeOff className="h-4 w-4 text-[#9A8F7F]" />
                        ) : (
                            <Eye className="h-4 w-4 text-[#9A8F7F]" />
                        )}
                    </button>
                </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Confirmar senha
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Lock className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type={visible ? "text" : "password"}
                        required
                        value={data.confirmPassword}
                        onChange={(event) =>
                            onChange("confirmPassword", event.target.value)
                        }
                        placeholder="Repita a senha"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
                {passwordsMismatch ? (
                    <span className="text-xs font-semibold text-red-500">
                        As senhas não coincidem.
                    </span>
                ) : null}
            </label>
        </div>
    );
}
