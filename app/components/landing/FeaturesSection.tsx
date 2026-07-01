import { Icon, IconName } from "./icons";

const FEATURES: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "pix", title: "Pix instantâneo", text: "Receba na hora, todos os dias." },
    { icon: "card", title: "Cartão de crédito", text: "Parcele em até 12x e aumente conversões." },
    { icon: "refresh", title: "Assinaturas", text: "Cobre recorrências sem complicação." },
    { icon: "columns", title: "Links de pagt.", text: "Crie, compartilhe e receba." },
    { icon: "bolt", title: "Webhooks", text: "Notificações em tempo real." },
    { icon: "code", title: "API simples", text: "Integração rápida, documentação top." },
    { icon: "layers", title: "SDKs oficiais", text: "SDKs pra várias linguagens." },
    { icon: "flaskConical", title: "Sandbox", text: "Teste tudo sem impactar vendas." },
];

export function FeaturesSection() {
    return (
        <section id="produto" className="bg-[#FDFDFD] px-6 lg:px-0 py-10">
            <div className="mx-auto max-w-7xl">
                <h2 className={`[font-family:var(--font-careca-display)] max-w-xl text-3xl font-extrabold tracking-tight text-[#19150F] sm:text-4xl`}>
                    Tudo que você precisa para vender mais
                </h2>

                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-8">
                    {FEATURES.map((feature) => (
                        <div key={feature.title}>
                            <span className="flex h-8 w-8 items-center justify-center text-[#FF7A00] [&_svg]:h-7 [&_svg]:w-7">
                                <Icon name={feature.icon} />
                            </span>

                            <h3 className="mt-4 text-[15px] font-bold text-[#19150F]">{feature.title}</h3>

                            <p className="mt-1.5 text-[13px] leading-relaxed text-[#6F665A]">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}