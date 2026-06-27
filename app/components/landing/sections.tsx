import type { ReactNode } from "react";
import Image from "next/image";
import { Brand } from "./Brand";
import { faqItems, footerColumns, integrationIcons, productCards } from "./data";
import { FaqList } from "./FaqList";
import { Icon } from "./icons";

const container = "mx-auto w-[min(calc(100%-64px),1200px)] max-lg:w-[min(calc(100%-40px),720px)] max-sm:w-[min(calc(100%-28px),520px)]";
const displayTitle = "font-[var(--font-careca-display)] font-extrabold tracking-[-0.03em] leading-[1.05] text-balance";
const buttonBase = "inline-flex items-center justify-center gap-2 rounded-[13px] font-bold leading-none transition hover:-translate-y-0.5";
const integrationNodePositions = [
    "left-[46%] top-9",
    "left-[20%] top-28 [animation-duration:7s]",
    "left-[10%] top-[222px] [animation-duration:6.4s]",
    "right-[14%] top-[108px] [animation-duration:6.8s]",
    "right-[9%] top-[236px] [animation-duration:7.2s]",
    "bottom-[38px] left-[41%] [animation-duration:6.2s]",
];

export function ProductsSection() {
    return (
        <section id="produtos" className="relative">
            <div className={`${container} pb-24 pt-8 max-sm:py-16`}>
                <SectionHeading eyebrow="O que a gente faz">
                    Três formas de receber.
                    <br />
                    Uma plataforma só.
                </SectionHeading>

                <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
                    {productCards.map((card, index) => (
                        <article
                            className={`flex min-h-[292px] flex-col rounded-[22px] border p-7 animate-[cc-up_0.7s_cubic-bezier(.16,1,.3,1)_both] ${
                                card.featured
                                    ? "relative overflow-hidden border-[#19150F] bg-[#19150F] text-[#F3EEE4] after:absolute after:right-[-40px] after:top-[-40px] after:h-40 after:w-40 after:rounded-full after:bg-[radial-gradient(closest-side,color-mix(in_srgb,#FF5A1F_45%,transparent),transparent)]"
                                    : "border-[#E6DECF] bg-[#FCFAF5]"
                            }`}
                            style={{ animationDelay: `${index * 90}ms` }}
                            key={card.title}
                        >
                            <span
                                className={`relative z-[1] mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[15px] ${
                                    card.featured ? "bg-[#FF5A1F] text-white" : "bg-[#19150F] text-[#FF5A1F]"
                                }`}
                            >
                                <Icon name={card.icon} />
                            </span>
                            <h3 className={`relative z-[1] mb-2 font-[var(--font-careca-display)] text-[22px] font-bold ${card.featured ? "text-white" : "text-[#19150F]"}`}>
                                {card.title}
                            </h3>
                            <p className={`relative z-[1] mb-5 text-[14.5px] leading-[1.6] ${card.featured ? "text-[#F3EEE4]/65" : "text-[#6F665A]"}`}>
                                {card.description}
                            </p>
                            <div className="relative z-[1] mt-auto flex flex-wrap gap-2">
                                {card.tags.map((tag) => (
                                    <span
                                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                                            card.featured
                                                ? "border-white/15 bg-white/10 text-[#F3EEE4]"
                                                : "border-[#E6DECF] bg-[#F3EEE4] text-[#39322A]"
                                        }`}
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PricingBand() {
    return (
        <section id="precos" className="bg-[#19150F] text-[#F3EEE4]">
            <div className={`${container} flex items-center justify-between gap-10 py-16 max-lg:flex-col max-lg:items-start max-sm:py-14`}>
                <div>
                    <span className="mb-3.5 block text-[13px] font-bold uppercase tracking-[0.12em] text-[#FF5A1F]">
                        Preço sem letra miúda
                    </span>
                    <h2 className={`${displayTitle} mb-3 text-[38px] text-white max-sm:text-[34px]`}>
                        Você só paga quando
                        <br />o dinheiro entra.
                    </h2>
                    <p className="m-0 text-base text-[#F3EEE4]/65">
                        Sem mensalidade, sem fidelidade e sem surpresa no fim do mês.
                    </p>
                </div>
                <div className="flex items-end gap-7 max-lg:flex-col max-lg:items-start">
                    <div>
                        <strong className="block font-[var(--font-careca-display)] text-[64px] font-extrabold leading-none tracking-[-0.04em] text-[#FF5A1F] max-sm:text-[52px]">
                            R$0,80
                        </strong>
                        <small className="mt-1.5 block text-sm text-[#F3EEE4]/65">por Pix recebido</small>
                    </div>
                    <a href="#" className={`${buttonBase} bg-white px-5 py-3.5 text-[15px] text-[#19150F] hover:bg-[#FF5A1F] hover:text-white`}>
                        Ver tabela completa <Icon name="arrowRight" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export function IntegrationsSection() {
    return (
        <section id="integracoes" className="relative overflow-hidden">
            <div className={`${container} grid grid-cols-[1fr_1.05fr] items-center gap-14 py-[92px] max-lg:grid-cols-1 max-sm:py-16`}>
                <div>
                    <SectionHeading eyebrow="Integrações" className="mb-4">
                        Integre do seu jeito.
                        <br />
                        <span className="text-[#FF5A1F]">Code, vibe-code, no-code.</span>
                    </SectionHeading>
                    <p className="mb-8 max-w-[440px] text-[16.5px] leading-[1.6] text-[#6F665A]">
                        API REST limpa, SDKs prontos e um MCP pra integrar até com IA. Funciona
                        lindamente no Cursor, Lovable e afins.
                    </p>
                    <div className="flex flex-wrap items-center gap-3.5">
                        <a href="#" className={`${buttonBase} bg-[#FF5A1F] px-5 py-3 text-[14.5px] text-white shadow-[0_14px_28px_-12px_#FF5A1F] hover:bg-[#D6480F]`}>
                            Ver documentação
                        </a>
                        <a href="#" className="text-[14.5px] font-bold text-[#19150F] hover:text-[#D6480F]">
                            ou conheça o MCP →
                        </a>
                    </div>
                </div>

                <div className="relative h-[430px] overflow-hidden rounded-[26px] bg-[#19150F] animate-[cc-up_0.85s_cubic-bezier(.16,1,.3,1)_both] max-sm:h-[360px]" aria-label="Ecossistema de integrações CarecaPay">
                    <div className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F3EEE4]/10 animate-[cc-spin_80s_linear_infinite]" />
                    <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F3EEE4]/10 animate-[cc-spin_60s_linear_infinite_reverse]" />
                    <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,#FF5A1F_32%,transparent),transparent_70%)] animate-[cc-pulse_4s_ease-in-out_infinite]" />
                    <div className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[20px] border border-white/20 bg-[#FF5A1F] text-white shadow-[0_16px_30px_-10px_#FF5A1F] [&_svg]:h-8 [&_svg]:w-8">
                        <Icon name="react" />
                    </div>
                    {integrationIcons.map((icon, index) => (
                        <span
                            className={`absolute flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#F3EEE4]/10 bg-[#F3EEE4]/5 text-[#F3EEE4]/60 animate-[cc-float-sm_6s_ease-in-out_infinite] ${integrationNodePositions[index]}`}
                            key={icon}
                        >
                            <Icon name={icon} />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FaqSection() {
    return (
        <section className="border-t border-[#E6DECF] bg-[#FCFAF5]">
            <div className={`${container} grid grid-cols-[0.82fr_1.18fr] items-start gap-14 py-[88px] max-lg:grid-cols-1 max-sm:py-16`}>
                <div>
                    <h2 className={`${displayTitle} mb-4 text-4xl max-sm:text-[34px]`}>
                        Dúvidas? A gente <span className="text-[#FF5A1F]">responde.</span>
                    </h2>
                    <p className="m-0 max-w-[300px] text-[15.5px] leading-[1.65] text-[#6F665A]">
                        Juntamos as perguntas que mais chegam pra gente. Se ficar com outra, é só
                        chamar no suporte.
                    </p>
                </div>
                <FaqList items={faqItems} />
            </div>
        </section>
    );
}

export function FinalCta() {
    return (
        <section className="py-[72px] max-sm:py-14">
            <div className={container}>
                <div className="relative overflow-hidden rounded-[28px] bg-[#FF5A1F] px-[54px] py-14 max-sm:rounded-[22px] max-sm:px-7 max-sm:py-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.16)_1.4px,transparent_1.5px)] bg-[length:26px_26px] opacity-50" />
                    <div className="relative flex items-center justify-between gap-8 max-lg:flex-col max-lg:items-start">
                        <div>
                            <h2 className={`${displayTitle} mb-3.5 max-w-[640px] text-[42px] text-white max-sm:text-[34px]`}>
                                Bora receber por Pix, cartão e assinaturas?
                            </h2>
                            <p className="mb-6 max-w-[440px] text-[16.5px] leading-[1.55] text-white/90">
                                Cria sua conta em minutos e comece a cobrar hoje. Sem mensalidade:
                                você só paga quando o dinheiro entra.
                            </p>
                            <div className="flex flex-wrap items-center gap-[18px]">
                                <a href="#" className={`${buttonBase} bg-white px-7 py-[15px] text-base text-[#D6480F] hover:bg-[#19150F] hover:text-white`}>
                                    Criar conta grátis <Icon name="arrowRight" />
                                </a>
                                <a href="#" className="text-base font-bold text-white hover:text-[#19150F]">
                                    Falar com a gente
                                </a>
                            </div>
                        </div>
                        <Image
                            src="/assets/carecapay-icon.svg"
                            alt=""
                            width={188}
                            height={188}
                            className="h-[188px] w-[188px] flex-none animate-[cc-float-sm_5.5s_ease-in-out_infinite] drop-shadow-[0_18px_30px_rgba(40,28,12,0.35)] max-sm:h-[132px] max-sm:w-[132px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-[#19150F] text-[#F3EEE4]">
            <div className={`${container} grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 py-[62px] pb-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:pt-12`}>
                <div>
                    <Brand compact light />
                    <p className="mb-5 mt-4 max-w-[260px] text-[13.5px] leading-[1.6] text-[#F3EEE4]/55">
                        Pix, cartão e assinaturas num só lugar. Pra você crescer rápido e sem dor de
                        cabeça.
                    </p>
                    <div className="flex gap-2.5" aria-label="Redes sociais">
                        {["in", "X", "ig"].map((social) => (
                            <a
                                href="#"
                                className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#F3EEE4]/15 text-xs text-[#F3EEE4]/60 hover:text-[#FF5A1F]"
                                key={social}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
                {footerColumns.map((column) => (
                    <div className="flex flex-col gap-3" key={column.title}>
                        <strong className="mb-1 text-[12.5px] uppercase tracking-[0.06em] text-[#F3EEE4]/45">
                            {column.title}
                        </strong>
                        {column.links.map((link) => (
                            <a href="#" className="text-sm text-[#F3EEE4]/70 hover:text-[#FF5A1F]" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
            <div className="border-t border-[#F3EEE4]/10">
                <div className={`${container} flex items-center justify-between gap-4 py-5 text-[12.5px] text-[#F3EEE4]/45 max-sm:flex-col max-sm:items-start`}>
                    <span>© 2026 CarecaPay Tecnologia LTDA — Pagamentos pra quem cresce rápido.</span>
                    <span>Feito no Brasil</span>
                </div>
            </div>
        </footer>
    );
}

function SectionHeading({
    eyebrow,
    children,
    className = "",
}: {
    eyebrow: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`mb-11 max-w-[650px] animate-[cc-up_0.85s_cubic-bezier(.16,1,.3,1)_both] ${className}`}>
            <span className="mb-4 flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#D6480F]">
                <i className="h-0.5 w-[18px] rounded-full bg-[#FF5A1F]" />
                {eyebrow}
            </span>
            <h2 className={`${displayTitle} text-[40px] max-sm:text-[34px]`}>{children}</h2>
        </div>
    );
}
