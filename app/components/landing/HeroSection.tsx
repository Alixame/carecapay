/* eslint-disable @next/next/no-img-element */
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
    return (
        <section
            id="hero-section"
            className="h-[80dvh] mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:px-0 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24"
        >
            <div className="max-w-xl">
                <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                    Pagamentos, assinaturas e{" "}
                    <span className="text-[#FF7A00]">Pix</span> via{" "}
                    <span className="text-[#FF7A00]">API</span> em minutos.
                </h1>

                <p className="mt-6 max-w-md text-base leading-relaxed text-[#5C564C] sm:text-lg">
                    O CarecaPay é a infrastrutura de pagamentos para SaaS, marketplaces e plataformas digitais que precisam vender, cobrar recorrencia e automatizar tudo via API.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href="/docs" className="rounded-xl bg-[#FF7A00] px-7 py-3.5 text-center font-semibold text-white shadow-sm transition-colors hover:bg-[#FF8A00]">
                        Começar agora →
                    </a>

                    <a href="/docs" className="rounded-xl border border-[#E2D9C8] bg-white px-7 py-3.5 text-center font-semibold text-[#19150F] transition-colors hover:border-[#FF7A00] hover:text-[#FF7A00]">
                        Ver documentação
                    </a>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#5C564C]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">✓</span>
                    Ambiente de testes 100% gratuito
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center">
                {/* Foguete + linhas de movimento */}
                <div className="absolute left-0 top-4 z-30 hidden -rotate-[20deg] sm:block lg:left-6 lg:top-8">
                    <svg viewBox="0 0 48 56" className="h-14 w-14 lg:h-16 lg:w-16" fill="none">
                        <path d="M24 4C32 10 34 22 32 32L16 32C14 22 16 10 24 4Z" fill="#fff" stroke="#19150F" strokeWidth="2.5" strokeLinejoin="round" />
                        <circle cx="24" cy="18" r="4" fill="#FFD37A" stroke="#19150F" strokeWidth="2.5" />
                        <path d="M16 28L8 38L16 34Z" fill="#FF7A00" stroke="#19150F" strokeWidth="2.5" strokeLinejoin="round" />
                        <path d="M32 28L40 38L32 34Z" fill="#FF7A00" stroke="#19150F" strokeWidth="2.5" strokeLinejoin="round" />
                        <path d="M20 34L24 46L28 34Z" fill="#FF7A00" />
                        <path d="M22 34L24 41L26 34Z" fill="#FFD37A" />
                    </svg>

                    <svg viewBox="0 0 60 40" className="absolute -bottom-3 -left-8 h-8 w-12 rotate-[20deg]" fill="none">
                        <path d="M2 30C16 28 24 22 30 10" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" />
                        <path d="M10 36C24 34 32 28 40 16" stroke="#FFB13A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" />
                    </svg>
                </div>

                {/* Sparkles / acentos */}
                <svg viewBox="0 0 24 24" className="absolute right-10 top-2 z-30 hidden h-6 w-6 text-[#FF7A00] sm:block" fill="currentColor">
                    <path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z" />
                </svg>

                <svg viewBox="0 0 24 24" className="absolute bottom-24 left-2 z-30 hidden h-4 w-4 text-[#FFB13A] sm:block" fill="currentColor">
                    <path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z" />
                </svg>

                <span className="absolute right-24 top-24 z-30 hidden h-2 w-2 rounded-full bg-[#FF7A00] sm:block" />
                <span className="absolute left-16 top-10 z-30 hidden h-1.5 w-1.5 rounded-full bg-[#FFB13A] sm:block" />

                {/* Balão de fala */}
                <div className="absolute right-0 top-10 z-30 hidden max-w-[190px] rounded-2xl bg-white px-4 py-3 text-center shadow-xl shadow-black/10 sm:block lg:right-2 lg:top-16">
                    <p className="text-sm font-bold leading-snug text-[#19150F]">
                        Menos burocracia, <span className="text-[#FF7A00]">mais integração.</span>
                    </p>
                    <p className="mt-2 text-xs leading-snug text-[#5C564C]">
                        Do jeito que <span className="font-semibold text-[#FF7A00]">careca</span> gosta!
                    </p>
                    <span className="absolute -bottom-1.5 left-8 h-3 w-3 rotate-45 bg-white" />
                </div>

                <img
                    src={"/assets/careca-hero.png"}
                    alt="Hero Illustration"
                    className="relative z-20 w-full max-w-lg"
                />

                <svg
                    viewBox="0 0 1000 760"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2"
                >
                    <defs>
                        <linearGradient id="g1" x1="230" y1="80" x2="820" y2="650" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FFD37A" />
                            <stop offset="0.45" stopColor="#FFAD2E" />
                            <stop offset="1" stopColor="#FF7A00" />
                        </linearGradient>
                        <linearGradient id="g2" x1="250" y1="120" x2="800" y2="640" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FFC868" stopOpacity="0.65" />
                            <stop offset="0.55" stopColor="#FF9C14" stopOpacity="0.38" />
                            <stop offset="1" stopColor="#FF6F00" stopOpacity="0.28" />
                        </linearGradient>
                        <linearGradient id="g3" x1="215" y1="90" x2="760" y2="540" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FFE09A" stopOpacity="0.58" />
                            <stop offset="0.5" stopColor="#FFB02E" stopOpacity="0.26" />
                            <stop offset="1" stopColor="#FF8A00" stopOpacity="0.18" />
                        </linearGradient>
                    </defs>

                    <path d="
                            M 125 555
                            C 95 455, 115 360, 205 305
                            C 282 258, 255 150, 342 91
                            C 442 24, 610 52, 676 143
                            C 724 210, 758 211, 826 191
                            C 903 168, 964 224, 951 313
                            C 941 381, 889 415, 886 486
                            C 882 582, 790 660, 688 637
                            C 612 620, 585 546, 513 560
                            C 441 574, 431 662, 338 672
                            C 248 682, 217 604, 125 555
                            Z" fill="url(#g1)"
                    />

                    <path d="
                            M 176 548
                            C 130 465, 152 385, 238 333
                            C 314 287, 295 190, 370 139
                            C 460 78, 600 104, 656 183
                            C 708 257, 748 272, 818 244
                            C 888 216, 932 263, 912 352
                            C 895 428, 824 454, 826 527
                            C 829 610, 748 663, 660 637
                            C 584 615, 560 536, 488 552
                            C 416 568, 414 646, 322 651
                            C 252 655, 232 594, 176 548
                            Z" fill="url(#g2)" />

                    <path d="
                            M 204 491
                            C 160 423, 184 355, 262 307
                            C 332 264, 320 182, 392 142
                            C 477 94, 585 126, 635 195
                            C 688 268, 734 300, 803 272
                            C 849 253, 884 274, 891 322
                            C 840 307, 787 325, 735 366
                            C 665 421, 607 405, 548 361
                            C 477 308, 417 314, 369 382
                            C 313 461, 265 468, 204 491
                            Z" fill="url(#g3)" />

                    <path d="M 675 170 C 710 225 768 226 827 203" stroke="#FFB13A" strokeOpacity="0.13" strokeWidth="2" />
                    <path d="M 330 614 C 397 640 438 607 483 563" stroke="#FF8A00" strokeOpacity="0.11" strokeWidth="2" />
                </svg>

                <div className="mt-6 w-full max-w-md lg:absolute lg:-bottom-10 lg:right-0 lg:z-10 lg:mt-0 lg:w-[82%]">
                    <DashboardMockup />
                </div>
            </div>
        </section>
    )
}
