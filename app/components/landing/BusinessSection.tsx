/* eslint-disable @next/next/no-img-element */
import { Icon, IconName } from "./icons";

const BUSINESS: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "grid", title: "SaaS", text: "Cobranças recorrentes com gestão completa." },
    { icon: "layers", title: "Marketplaces", text: "Split de pagamento e repasses automáticos." },
    { icon: "bolt", title: "Infoprodutores", text: "Venda mais com Pix, cartão e links." },
    { icon: "code", title: "Plataformas", text: "Integre pagamentos no seu sistema." },
    { icon: "refresh", title: "Clubes", text: "Assinaturas flexíveis e retenção maior." },
];

export function BusinessSection() {
    return (
        <section id="para-quem" className="bg-[#F3EEE4] px-6 lg:px-0 py-10 overflow-hidden">
            <div className="relative mx-auto max-w-7xl grid items-center gap-4 lg:grid-cols-8">
                <div className="col-span-3">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
                        Para negócios digitais
                    </p>
                    
                    <h2 className={`[font-family:var(--font-careca-display)] mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#19150F] hover:underline`}>
                        Mais que um gateway, <br/> um parceiro de crescimento.
                    </h2>
                    
                    <p className="mt-5 text-[15px] leading-relaxed text-[#6F665A]">
                        Do SaaS ao infoproduto, do marketplace ao clube de assinatura. O CarecaPay se adapta ao seu modelo de negócio.
                    </p>
                </div>

                <div className="col-span-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {BUSINESS.map((item) => (
                        <div
                            key={item.title}
                            className="group cursor-pointer hover:bg-[#FF7A00]  flex items-center justify-center flex-col text-center rounded-2xl bg-white py-4 px-2"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1E2] text-[#FF7A00] [&_svg]:h-5 [&_svg]:w-5">
                                <Icon name={item.icon} />
                            </span>
                            
                            <h3 className="group-hover:text-white mt-3 text-sm font-bold text-[#19150F]">{item.title}</h3>

                            <p className="group-hover:text-white mt-1 text-[10px] leading-snug text-[#6F665A]">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Balão de mensagem  */}
                <div className="absolute top-[77%] right-20 lg:top-[-22%] lg:-right-6 bg-white z-11 px-5 py-2 lg:px-10 lg:py-4 -rotate-6 rounded-full border lg:border-2 border-[#F3EEE4]">
                    <p className={`[font-family:var(--font-careca-display)] text-xs lg:text-lg font-extrabold leading-none text-[#19150F]`}>
                        Careca <span className="text-[#FF7A00]">aprova</span>
                        <br />
                        <span className="text-[8px] lg:text-sm font-bold text-[#6F665A]">e seu caixa também!</span>
                    </p>
                </div>

                {/* perninha do balao em forma de triângulo */}
                <div className="absolute bottom-29 right-35 rotate-115 lg:top-3 lg:right-10 z-11 size-3 lg:size-6 lg:rotate-45 bg-white" />

                {/* Careca */}
                <img
                    src="/assets/careca-business.png"
                    alt="Careca aprovando o seu negócio"
                    className="absolute pointer-events-none -bottom-12 -right-10 lg:-right-18 w-70 z-10"
                />

                <svg className="absolute -bottom-9 left-[60%]" width="309" height="42" viewBox="0 0 409 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.598633 0.801147C28.932 21.9678 109.799 57.0011 206.599 27.8011C327.599 -8.69885 373.599 27.8011 389.099 40.3011" stroke="#FE983C" strokeWidth="2" strokeDasharray="10 10"/>
                    <path d="M393.598 27.1471L401.099 48.6788L377.099 50.1469L379.099 43.526L394.099 43.526L388.598 32.1471L393.598 27.1471Z" fill="#FE983C"/>
                </svg>
            </div>
        </section>
    );
}