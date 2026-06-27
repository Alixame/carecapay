"use client";

import { useState } from "react";
import { Brand } from "./Brand";
import { menuContent, navItems, type MenuKey } from "./data";
import { Icon } from "./icons";

export function Header() {
    const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-[60] border-b border-[#E6DECF] bg-[#F3EEE4]/85 backdrop-blur-xl"
            onMouseLeave={() => setOpenMenu(null)}
        >
            <div className="mx-auto grid h-[76px] w-[min(calc(100%-64px),1200px)] grid-cols-[1fr_auto_1fr] items-center gap-6 max-lg:w-[min(calc(100%-40px),720px)] max-lg:grid-cols-[auto_1fr] max-sm:h-[68px] max-sm:w-[min(calc(100%-28px),520px)]">
                <a href="#top" className="justify-self-start" onMouseEnter={() => setOpenMenu(null)}>
                    <Brand compact />
                </a>

                <nav className="flex items-center gap-1.5 justify-self-center max-lg:hidden" aria-label="Navegação principal">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex h-[76px] items-center gap-1.5 px-3 text-[15px] font-semibold text-[#39322A] transition-colors hover:text-[#D6480F]"
                            onMouseEnter={() => setOpenMenu("menu" in item && item.menu ? item.menu : null)}
                        >
                            {item.label}
                            {"menu" in item ? <span className="text-[13px] text-[#918676]">⌄</span> : null}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-[18px] justify-self-end">
                    <a href="#" className="text-[14.5px] font-semibold text-[#39322A] transition-colors hover:text-[#D6480F] max-lg:hidden">
                        Entrar
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-[13px] bg-[#19150F] px-5 py-3 text-[14.5px] font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-[#FF5A1F] max-lg:hidden"
                    >
                        Criar conta <Icon name="arrowRight" />
                    </a>
                    <button
                        type="button"
                        className="hidden h-[42px] w-[42px] rounded-xl border border-[#E6DECF] bg-[#FCFAF5] max-lg:block"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileOpen((current) => !current)}
                    >
                        <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-full bg-[#19150F]" />
                        <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-full bg-[#19150F]" />
                    </button>
                </div>
            </div>

            {openMenu ? <MegaMenu activeMenu={openMenu} /> : null}

            <div
                id="mobile-menu"
                className={
                    mobileOpen
                        ? "grid gap-3.5 border-t border-[#E6DECF] bg-[#FCFAF5] px-5 pb-5 lg:hidden"
                        : "hidden"
                }
            >
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="py-2 font-bold text-[#39322A]"
                        onClick={() => setMobileOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-[13px] bg-[#FF5A1F] px-5 py-3 font-bold leading-none text-white shadow-[0_14px_28px_-12px_#FF5A1F]"
                >
                    Criar conta grátis <Icon name="arrowRight" />
                </a>
            </div>
        </header>
    );
}

function MegaMenu({ activeMenu }: { activeMenu: MenuKey }) {
    return (
        <div className="absolute inset-x-0 top-full border-y border-[#E6DECF] bg-[#FCFAF5] shadow-[0_24px_40px_-28px_rgba(40,30,15,0.3)] animate-[cc-menu_0.2s_ease_forwards] max-lg:hidden">
            <div className="mx-auto flex w-[min(calc(100%-64px),1200px)] gap-[72px] py-[34px] pb-[38px]">
                {menuContent[activeMenu].map((column) => (
                    <div className="flex min-w-44 flex-col gap-[13px]" key={column.title}>
                        <p className="mb-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#A99E8B]">
                            {column.title}
                        </p>
                        {column.links.map((link) => (
                            <a href="#" className="text-[14.5px] font-medium text-[#39322A] hover:text-[#D6480F]" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
                <div className="ml-auto flex min-w-[230px] flex-col justify-between self-stretch rounded-[18px] bg-[#19150F] p-[22px] text-[#F3EEE4]">
                    <div>
                        <strong className="mb-1.5 block font-[var(--font-careca-display)] text-[17px]">
                            Comece em minutos
                        </strong>
                        <span className="text-[13px] leading-normal text-[#F3EEE4]/60">
                            Sem mensalidade. Você só paga quando recebe.
                        </span>
                    </div>
                    <a href="#" className="mt-[18px] self-start rounded-[11px] bg-[#FF5A1F] px-4 py-2.5 text-[13.5px] font-bold text-[#19150F]">
                        Criar conta grátis →
                    </a>
                </div>
            </div>
        </div>
    );
}
