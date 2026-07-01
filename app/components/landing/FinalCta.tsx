/* eslint-disable @next/next/no-img-element */
 

export function FinalCta() {
    return (
        <>
            <img
                src="/assets/careca-final-cta.png"
                alt="Careca sorrindo e apontando para o botão de criar conta"
                className="pointer-events-none absolute -bottom-10 lg:-bottom-6 right-[-10%] lg:right-[14%] w-65 z-10"
            />

            <section id="final-cta-section" className="relative overflow-hidden bg-linear-to-r from-[#FF7A00] to-[#FF9A2E] text-white">
                <svg viewBox="0 0 223 95" className="pointer-events-none absolute -top-6 right-[8%] z-0 hidden h-20 w-44 rotate-12 opacity-30 lg:block" fill="none">
                    <path d="M0 94.0087C17 94.0087 52.0292 86.2165 71 69.0087C92.5 49.5068 101.5 8.00815 65 1.50874C24.668 -5.67303 10.5971 65.0454 84 78.5087C168.5 94.0074 209 34.0088 222 8.00883" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 10" />
                </svg>

                <svg viewBox="0 0 105 297" className="pointer-events-none absolute -bottom-16 left-[38%] z-0 hidden h-56 w-auto -rotate-12 opacity-20 lg:block" fill="none">
                    <path d="M0.345459 295.997C40.1788 281.331 116.145 231.197 101.345 147.997C82.8455 43.9975 13.8455 59.9975 9.84546 79.4975C5.84546 98.9975 38.3455 126.498 72.3455 102.998C99.5455 84.1975 94.3455 46.1642 88.3455 29.4976C83.3455 20.8309 66.0455 2.99756 36.8455 0.997559" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 10" />
                </svg>

                <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-12 md:flex-row md:items-center md:justify-start">
                    <div>
                        <h2 className={`[font-family:var(--font-careca-display)] text-2xl font-extrabold leading-tight sm:text-3xl hover:underline cursor-pointer`}>
                            Chega de dor de cabeça com pagamentos.
                        </h2>

                        <p className="mt-1 text-lg font-semibold text-white/90">
                            Vem pro lado careca da força!
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#"
                            className="rounded-xl bg-[#19150F] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-black"
                        >
                            Criar conta agora →
                        </a>

                        <a
                            href="#"
                            className="rounded-xl border border-white/60 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                        >
                            Falar com suporte
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}