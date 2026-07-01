import { ReactNode } from "react";

import { CreditCardIcon, RefreshCcwIcon, ColumnsIcon, CableIcon, CodeIcon, LayersIcon, FlaskConicalIcon } from "lucide-react";

const PixIcon = () => (
    <svg fill="#FF7A00" width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>
)

const FEATURES: Array<{ icon: ReactNode; title: string; text: string }> = [
    { icon: <PixIcon />, title: "Pix instantâneo", text: "Receba na hora, todos os dias." },
    { icon: <CreditCardIcon className="size-8" />, title: "Cartão de crédito", text: "Parcele em até 12x e aumente conversões." },
    { icon: <RefreshCcwIcon className="size-8" />, title: "Assinaturas", text: "Cobre recorrências sem complicação." },
    { icon: <ColumnsIcon className="size-8" />, title: "Links de pagt.", text: "Crie, compartilhe e receba." },
    { icon: <CableIcon className="size-8" />, title: "Webhooks", text: "Notificações em tempo real." },
    { icon: <CodeIcon className="size-8" />, title: "API simples", text: "Integração rápida, documentação top." },
    { icon: <LayersIcon className="size-8" />, title: "SDKs oficiais", text: "SDKs pra várias linguagens." },
    { icon: <FlaskConicalIcon className="size-8" />, title: "Sandbox", text: "Teste tudo sem impactar vendas." },
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
                            <span className="flex h-8 w-8 items-center justify-center text-[#FF7A00]">
                                {feature.icon}
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