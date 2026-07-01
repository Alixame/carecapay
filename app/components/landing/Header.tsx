"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Produto", href: "#produto" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Taxas", href: "#taxas" },
    { label: "Documentação", href: "#docs" },
    { label: "Blog", href: "#blog" },
    { label: "Login", href: "#login" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F3EEE4]/85 backdrop-blur-xl">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
                <a href="#top" className="flex items-center gap-1.5">
                    <Image
                        src="/assets/carecapay-icon.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="h-9 w-9"
                    />

                    <span className="text-xl font-extrabold tracking-tight text-[#19150F]">
                        Careca<span className="text-[#FF7A00]">Pay</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-semibold text-[#3B342B] transition-colors hover:text-[#FF7A00]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#começar"
                        className="hidden rounded-xl bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF8A00] sm:inline-flex"
                    >
                        Começar agora →
                    </a>
                    <button
                        type="button"
                        aria-label="Abrir menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-white lg:hidden"
                    >
                        <span className="h-0.5 w-4 rounded-full bg-[#19150F]" />
                        <span className="h-0.5 w-4 rounded-full bg-[#19150F]" />
                    </button>
                </div>
            </div>

            {open ? (
                <div className="flex flex-col gap-1 border-t border-black/5 bg-[#FBF8F2] px-6 py-4 lg:hidden">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="py-2 font-semibold text-[#3B342B]"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#começar"
                        className="mt-2 rounded-xl bg-[#FF7A00] px-5 py-3 text-center font-bold text-white"
                    >
                        Começar agora →
                    </a>
                </div>
            ) : null}
        </header>
    );
}
