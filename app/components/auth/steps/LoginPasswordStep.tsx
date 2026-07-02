"use client";

import { Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";

interface LoginPasswordStepProps {
    email: string;
    password: string;
    onChange: (password: string) => void;
    onSubmit: () => void;
    onBack: () => void;
    loading: boolean;
}

export function LoginPasswordStep({
    email,
    password,
    onChange,
    onSubmit,
    onBack,
    loading,
}: LoginPasswordStepProps) {
    const [visible, setVisible] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!password) return;
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <h1 className="font-(--font-careca-display) text-4xl font-extrabold leading-tight text-[#19150F]">
                    Que bom te ver de novo!
                </h1>
                <p className="mt-2 text-sm text-[#3B342B]">
                    Digite a senha da conta{" "}
                    <span className="font-semibold">{email}</span>.
                </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                Senha
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Lock className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type={visible ? "text" : "password"}
                        required
                        autoFocus
                        value={password}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder="Sua senha"
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

            <button
                type="submit"
                disabled={loading || !password}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#FF8A00] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Entrando...
                    </>
                ) : (
                    "Entrar"
                )}
            </button>

            <button
                type="button"
                onClick={onBack}
                className="text-center text-sm font-semibold text-[#3B342B] transition-colors hover:text-[#FF7A00]"
            >
                Usar outro e-mail
            </button>
        </form>
    );
}
