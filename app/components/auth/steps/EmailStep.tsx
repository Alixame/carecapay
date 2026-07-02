"use client";

import { Mail, Loader2, Lock } from "lucide-react";
import type { FormEvent } from "react";

interface EmailStepProps {
    email: string;
    onChange: (email: string) => void;
    onSubmit: () => void;
    loading: boolean;
}

export function EmailStep({
    email,
    onChange,
    onSubmit,
    loading,
}: EmailStepProps) {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!email.trim()) return;
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <h1 className="font-(--font-careca-display) text-4xl font-extrabold leading-tight text-[#19150F]">
                    Bem-vindo ao <span className="text-[#FF7A00]">CarecaPay</span>
                </h1>
                <p className="mt-3 text-sm text-[#3B342B]">
                    Digite seu e-mail para entrar ou criar sua conta.
                </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#19150F]">
                E-mail
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3">
                    <Mail className="h-4 w-4 text-[#9A8F7F]" />
                    <input
                        type="email"
                        required
                        autoFocus
                        value={email}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder="seu@email.com"
                        className="w-full text-sm font-normal text-[#19150F] outline-none placeholder:text-[#9A8F7F]"
                    />
                </div>
            </label>

            <button
                type="submit"
                disabled={loading || !email.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#FF8A00] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Verificando...
                    </>
                ) : (
                    "Continuar"
                )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-[#9A8F7F]">
                <Lock className="h-3.5 w-3.5" />
                Seus dados estão protegidos com segurança.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold text-[#9A8F7F]">
                <span className="h-px flex-1 bg-black/10" />
                ou
                <span className="h-px flex-1 bg-black/10" />
            </div>

            <button
                type="button"
                disabled
                title="Em breve"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#3B342B] opacity-60"
            >
                Continuar com Google
            </button>

            <p className="text-center text-xs text-[#9A8F7F]">
                Ao continuar, você concorda com nossos{" "}
                <a href="#" className="text-[#FF7A00] hover:underline">
                    Termos de Uso
                </a>{" "}
                e a{" "}
                <a href="#" className="text-[#FF7A00] hover:underline">
                    Política de Privacidade
                </a>
                .
            </p>
        </form>
    );
}
