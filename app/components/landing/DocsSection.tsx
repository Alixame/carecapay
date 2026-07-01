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
        <section className="relative overflow-hidden bg-[#FDFDFD] px-6 py-10 lg:px-0">
            <svg viewBox="0 0 105 297" className="pointer-events-none absolute -right-6 top-1/2 z-0 hidden h-64 w-auto -translate-y-1/2 opacity-25 lg:block" fill="none">
                <path d="M0.345459 295.997C40.1788 281.331 116.145 231.197 101.345 147.997C82.8455 43.9975 13.8455 59.9975 9.84546 79.4975C5.84546 98.9975 38.3455 126.498 72.3455 102.998C99.5455 84.1975 94.3455 46.1642 88.3455 29.4976C83.3455 20.8309 66.0455 2.99756 36.8455 0.997559" stroke="#FE7B08" strokeWidth="2" strokeDasharray="10 10" />
            </svg>

            <svg viewBox="0 0 223 95" className="pointer-events-none absolute -top-8 left-6 z-0 hidden h-14 w-32 opacity-20 lg:block" fill="none">
                <path d="M0 94.0087C17 94.0087 52.0292 86.2165 71 69.0087C92.5 49.5068 101.5 8.00815 65 1.50874C24.668 -5.67303 10.5971 65.0454 84 78.5087C168.5 94.0074 209 34.0088 222 8.00883" stroke="#FEAF67" strokeWidth="2" strokeDasharray="10 10" />
            </svg>

            <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.8fr_2fr]">
                <div className="relative">
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