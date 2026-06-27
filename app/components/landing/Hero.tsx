import Image from "next/image";
import { activityItems, heroBadges } from "./data";
import { Icon } from "./icons";

export function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div className="pointer-events-none absolute -left-[60px] -top-10 h-[360px] w-[360px] bg-[radial-gradient(circle,#d9cfba_1.3px,transparent_1.4px)] bg-[length:24px_24px] opacity-50" />
            <div className="mx-auto grid min-h-[600px] w-[min(calc(100%-64px),1200px)] grid-cols-[1.08fr_0.92fr] items-center gap-10 py-[70px] pb-[84px] max-lg:w-[min(calc(100%-40px),720px)] max-lg:grid-cols-1 max-lg:pt-12 max-sm:min-h-0 max-sm:w-[min(calc(100%-28px),520px)] max-sm:py-10 max-sm:pb-14">
                <div className="relative z-[3] animate-[cc-up_0.85s_cubic-bezier(.16,1,.3,1)_both]">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6DECF] bg-[#FCFAF5] py-1.5 pl-2 pr-3 text-[12.5px] font-semibold text-[#39322A]">
                        <span className="rounded-full bg-[#FF5A1F] px-2 py-0.5 text-[11px] font-extrabold tracking-[0.02em] text-white">
                            BETA 1.0
                        </span>
                        Pagamentos pra quem cresce rápido
                    </div>
                    <h1 className="m-0 mb-5 max-w-[680px] text-balance font-[var(--font-careca-display)] text-[clamp(42px,6vw,60px)] font-extrabold leading-none tracking-[-0.035em] text-[#19150F]">
                        Pix, cartão e assinaturas <span className="text-[#FF5A1F]">sem dor de cabeça.</span>
                    </h1>
                    <p className="mb-9 max-w-[468px] text-[18.5px] leading-[1.55] text-[#6F665A] max-sm:text-[17px]">
                        A CarecaPay coloca seu sistema cobrando em minutos: Pix na hora, cartão com
                        alta aprovação e cobrança recorrente no automático. Uma API, um painel, zero
                        burocracia.
                    </p>
                    <div className="mb-12 flex flex-wrap items-center gap-6">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#FF5A1F] py-[15px] pl-6 pr-[18px] text-base font-bold leading-none text-white shadow-[0_14px_28px_-12px_#FF5A1F] transition hover:-translate-y-0.5 hover:bg-[#D6480F]"
                        >
                            Criar conta grátis <Icon name="arrowRight" />
                        </a>
                        <a href="#produtos" className="inline-flex items-center gap-2 text-base font-bold text-[#19150F] hover:text-[#D6480F]">
                            <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-[#19150F]">
                                <Icon name="play" />
                            </span>
                            Como funciona
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-[30px] max-sm:gap-[18px]">
                        {heroBadges.map((badge) => (
                            <div className="flex items-center gap-3" key={badge.title}>
                                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] border border-[#E6DECF] bg-[#FCFAF5] text-[#FF5A1F] [&_svg]:h-[19px] [&_svg]:w-[19px]">
                                    <Icon name={badge.icon} />
                                </span>
                                <div>
                                    <strong className="block text-sm leading-tight text-[#19150F]">{badge.title}</strong>
                                    <small className="block text-[12.5px] text-[#6F665A]">{badge.text}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex min-h-[600px] items-center justify-center animate-[cc-up_0.95s_cubic-bezier(.16,1,.3,1)_both] max-lg:min-h-[560px] max-sm:min-h-[520px] max-sm:scale-[0.86] max-sm:origin-top">
                    <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,#FF5A1F_22%,transparent),transparent_72%)]" />
                    <div className="pointer-events-none absolute right-1.5 top-[30px] h-[300px] w-[300px] rounded-full border border-dashed border-[#E6DECF]" />
                    <PhoneMockup />
                    <div className="absolute left-[-8px] top-24 z-[4] flex items-center gap-3 rounded-[15px] border border-[#E6DECF] bg-[#FCFAF5] px-3.5 py-3 shadow-[0_22px_40px_-20px_rgba(40,28,12,0.4)] animate-[cc-float-sm_6s_ease-in-out_infinite] max-sm:left-[-22px]">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17996B] text-white">
                            <Icon name="check" />
                        </span>
                        <div>
                            <strong className="block text-sm leading-tight text-[#19150F]">+ R$ 240,00</strong>
                            <small className="block text-[11.5px] text-[#6F665A]">Pix recebido • agora</small>
                        </div>
                    </div>
                    <div className="absolute bottom-[108px] right-[-6px] z-[4] flex items-center gap-2.5 rounded-[14px] bg-[#19150F] px-3.5 py-3 text-[#F3EEE4] shadow-[0_22px_40px_-20px_rgba(40,28,12,0.5)] animate-[cc-float-sm_7.4s_ease-in-out_.6s_infinite] max-sm:right-[-28px]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#FF5A1F] text-white">
                            <Icon name="refresh" />
                        </span>
                        <div>
                            <strong className="block text-[13px] leading-tight text-[#F3EEE4]">Nova assinatura</strong>
                            <small className="block text-[11px] text-[#F3EEE4]/55">Plano Pro • R$ 49,90/mês</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhoneMockup() {
    return (
        <div className="relative h-[592px] w-72 rounded-[54px] bg-[#19150F] p-[9px] shadow-[0_40px_80px_-30px_rgba(40,28,12,0.55),0_0_0_1px_rgba(0,0,0,0.04)] animate-[cc-float_7s_ease-in-out_infinite]">
            <div className="relative h-full w-full overflow-hidden rounded-[46px] bg-[#FBF7F0]">
                <div className="absolute left-1/2 top-3 z-[5] h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-[#19150F]" />
                <div className="flex items-center justify-between px-6 pt-[15px] text-xs font-bold text-[#19150F]">
                    <span>9:41</span>
                    <span className="inline-flex h-[13px] items-end gap-1">
                        <span className="h-1.5 w-1 rounded-sm bg-[#19150F]" />
                        <span className="h-2.5 w-1 rounded-sm bg-[#19150F]" />
                        <span className="h-[11px] w-5 rounded-[3px] border border-[#19150F]" />
                    </span>
                </div>

                <div className="px-[18px] pt-[18px]">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image src="/assets/carecapay-icon.svg" alt="" width={34} height={34} className="rounded-full border border-[#E6DECF] bg-white" />
                            <div>
                                <small className="block text-[11px] leading-tight text-[#6F665A]">Bom dia,</small>
                                <strong className="block text-sm leading-tight text-[#19150F]">Bruno R.</strong>
                            </div>
                        </div>
                        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6DECF] bg-white text-[#7A7060] [&_svg]:h-4 [&_svg]:w-4">
                            <Icon name="bell" />
                        </span>
                    </div>

                    <div className="relative overflow-hidden rounded-[20px] bg-[#19150F] px-4.5 py-4.25 text-[#F3EEE4] after:absolute after:right-[-30px] after:top-[-30px] after:h-[120px] after:w-[120px] after:rounded-full after:bg-[radial-gradient(closest-side,color-mix(in_srgb,#FF5A1F_55%,transparent),transparent)]">
                        <small className="relative z-1 text-[11.5px] text-[#F3EEE4]/60">Saldo disponível</small>
                        
                        <strong className="relative z-1 my-1 block text-[27px] font-extrabold tracking-[-0.02em]">
                            R$ 12.480<span className="text-lg opacity-70">,50</span>
                        </strong>

                        <div className="relative z-1 flex items-center gap-2">
                            <span className="rounded-full bg-[#FF5A1F] px-2 py-0.5 text-[8px] font-bold text-[#19150F]">↑ 18% no mês</span>
                            <small className="text-[8px] text-[#F3EEE4]/60">entrou hoje R$ 1.290</small>
                        </div>
                    </div>

                    <div className="mx-0.5 mb-2.5 mt-4 flex items-center justify-between">
                        <strong className="text-[13px]">Recebido hoje</strong>
                        <span className="text-[11.5px] font-semibold text-[#D6480F]">Ver tudo</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {activityItems.map((item) => (
                            <div className="flex items-center gap-3 rounded-[14px] border border-[#E6DECF] bg-white px-3 py-2.5" key={item.title}>
                                <span className="flex h-8.5 w-8.5 flex-none items-center justify-center rounded-[10px] bg-[color-mix(in_srgb,#FF5A1F_13%,#fff)] text-[#D6480F] [&_svg]:h-4 [&_svg]:w-4">
                                    <Icon name={item.icon} />
                                </span>

                                <div className="min-w-0 flex-1">
                                    <strong className="block text-[13px] leading-tight text-[#19150F]">{item.title}</strong>
                                    <small className="block text-[11px] leading-tight text-[#6F665A]">{item.description}</small>
                                </div>
                                
                                <b className="text-[13px] text-[#17996B]">{item.amount}</b>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#E6DECF] bg-[#FBF7F0]/95 px-7 pb-5 pt-3 text-[#BDB3A2] backdrop-blur-md [&>svg]:h-[21px] [&>svg]:w-[21px] [&>svg:first-child]:text-[#D6480F]">
                    <Icon name="home" />
                    <Icon name="list" />
                    <span className="-mt-2 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#FF5A1F] text-white shadow-[0_8px_18px_-6px_#FF5A1F]">
                        <Icon name="plus" />
                    </span>
                    <Icon name="headset" />
                    <Icon name="profile" />
                </div>
                <div className="absolute bottom-[7px] left-1/2 h-[5px] w-[110px] -translate-x-1/2 rounded-full bg-[#19150F] opacity-85" />
            </div>
        </div>
    );
}
