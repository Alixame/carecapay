import { MoveRightIcon } from "lucide-react";
import { Icon, IconName } from "./icons";

const DOCS: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "code", title: "API Reference", text: "Todas as rotas e parâmetros." },
    { icon: "bolt", title: "Webhooks", text: "Receba eventos em tempo real." },
    { icon: "layers", title: "SDKs", text: "Bibliotecas oficiais, para várias linguagens." },
    { icon: "card", title: "Checkout", text: "Interface pronta para cobrar online." },
    { icon: "refresh", title: "Assinaturas", text: "Gestão completa de recorrências." },
    { icon: "pix", title: "Pix", text: "Cobranças instantâneas e QR Code dinâmico." },
];

export function DocsSection() {
    return (
        <section className="bg-[#FDFDFD] px-6 py-10 lg:px-0">
            <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.8fr_2fr]">
                <div>
                    <h2 className={`[font-family:var(--font-careca-display)] text-3xl font-extrabold leading-tight tracking-tight text-[#19150F] hover:underline`}>
                        Documentação que é um show à parte
                    </h2>

                    <p className="mt-5 text-[15px] leading-relaxed text-[#6F665A]">
                        Guias completos, exemplos reais e referência de API detalhada. Tudo para você integrar com confiança e rapidez.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {DOCS.map((doc) => (
                        <a
                            key={doc.title}
                            href="#docs"
                            className="group p-5"
                        >
                            <span className="group-hover:bg-[#FF7A00] group-hover:text-white flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1E2] text-[#FF7A00] [&_svg]:h-5 [&_svg]:w-5">
                                <Icon name={doc.icon} />
                            </span>

                            
                            <div className="flex items-center gap-2 mt-4">
                                <h3 className="group-hover:underline text-sm font-bold text-[#19150F]">{doc.title}</h3>

                                <MoveRightIcon className="group-hover:translate-x-1 transition-transform group-hover:text-[#FF7A00]" />
                            </div>

                            <p className="mt-1 text-[12.5px] leading-snug text-[#6F665A]">{doc.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}