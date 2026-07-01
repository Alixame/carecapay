/* eslint-disable @next/next/no-img-element */
 

export function FinalCta() {
    return (
        <>
            <img
                src="/assets/careca-final-cta.png"
                alt="Careca sorrindo e apontando para o botão de criar conta"
                className="pointer-events-none absolute -bottom-10 lg:-bottom-6 right-[-15dvw] lg:right-[15dvw] w-65 z-10"
            />

            <section id="final-cta-section" className="relative bg-linear-to-r from-[#FF7A00] to-[#FF9A2E] text-white">
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