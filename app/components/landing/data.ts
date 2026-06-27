import type { IconName } from "./icons";

export type MenuKey = "produtos" | "solucoes" | "recursos";

export const navItems: Array<
    | { label: string; href: string; menu: MenuKey }
    | { label: string; href: string; menu?: never }
> = [
    { label: "Produtos", href: "#produtos", menu: "produtos" },
    { label: "Soluções", href: "#integracoes", menu: "solucoes" },
    { label: "Recursos", href: "#integracoes", menu: "recursos" },
    { label: "Preços", href: "#precos" },
];

export const menuContent: Record<
    MenuKey,
    Array<{ title: string; links: string[] }>
> = {
    produtos: [
        { title: "Pagamentos", links: ["Pix", "Cartão de crédito", "Assinaturas"] },
        {
            title: "Ferramentas",
            links: ["Checkout transparente", "Split de pagamento", "Conciliação", "Webhooks"],
        },
    ],
    solucoes: [
        { title: "Por estágio", links: ["Startups", "Empresas"] },
        {
            title: "Por caso de uso",
            links: ["SaaS", "Micro-SaaS", "E-commerce", "Marketplaces", "Criadores"],
        },
        { title: "Por setor", links: ["Educação", "Serviços", "Comunidades", "Software"] },
    ],
    recursos: [
        {
            title: "Desenvolvedores",
            links: ["Documentação", "Referência da API", "SDKs", "MCP", "Webhooks"],
        },
        { title: "Empresa", links: ["Blog", "Status dos serviços", "Suporte", "Discord"] },
    ],
};

export const heroBadges: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "lock", title: "Seguro", text: "Antifraude incluso" },
    { icon: "bolt", title: "Rápido", text: "Pix em segundos" },
    { icon: "check", title: "Fácil", text: "Integra em 1 dia" },
];

export const activityItems: Array<{
    icon: IconName;
    title: string;
    description: string;
    amount: string;
}> = [
    { icon: "pix", title: "Pix recebido", description: "agora • Loja online", amount: "+R$ 240" },
    {
        icon: "refresh",
        title: "Assinatura Pro",
        description: "recorrente • Maria S.",
        amount: "+R$ 49,90",
    },
    { icon: "card", title: "Cartão 12x", description: "crédito • João P.", amount: "+R$ 320" },
];

export const productCards: Array<{
    icon: IconName;
    title: string;
    description: string;
    tags: string[];
    featured?: boolean;
}> = [
    {
        icon: "pix",
        title: "Pix instantâneo",
        description:
            "Receba em segundos, 24/7. Liquidação na hora, QR Code dinâmico e conciliação automática direto no seu painel.",
        tags: ["Tempo real", "QR dinâmico"],
    },
    {
        icon: "card",
        title: "Cartão de crédito",
        description:
            "Alta taxa de aprovação e antifraude incluso. Cobre à vista ou parcele em até 12x, com checkout transparente.",
        tags: ["Até 12x", "Antifraude"],
    },
    {
        icon: "refresh",
        title: "Assinaturas",
        description:
            "Cobrança recorrente no automático: planos, trials e retentativa inteligente quando um pagamento falha.",
        tags: ["Recorrente", "Retentativa"],
        featured: true,
    },
];

export const integrationIcons: IconName[] = [
    "layers",
    "code",
    "grid",
    "bolt",
    "columns",
    "terminal",
];

export const faqItems = [
    {
        question: "O que é a CarecaPay e pra quem ela serve?",
        answer:
            "A CarecaPay é uma plataforma de pagamentos online para quem vende digital ou fisicamente: criadores, micro-SaaS, e-commerces e marketplaces. Você cobra por Pix, cartão de crédito e assinaturas em um só lugar.",
    },
    {
        question: "Quais formas de pagamento são aceitas?",
        answer:
            "Nosso foco são três: Pix com liquidação em tempo real, cartão de crédito com parcelamento em até 12x e cobranças recorrentes. Tudo pelo mesmo painel e a mesma integração.",
    },
    {
        question: "Posso usar como pessoa física ou preciso de CNPJ?",
        answer:
            "Você pode começar como pessoa física e migrar para CNPJ quando quiser. O cadastro leva poucos minutos e a verificação costuma ser automática.",
    },
    {
        question: "Como funcionam as assinaturas recorrentes?",
        answer:
            "Você cria planos com valor e periodicidade, define trials se quiser, e a CarecaPay cobra automaticamente todo ciclo. Se um pagamento falha, a retentativa inteligente tenta de novo.",
    },
    {
        question: "A CarecaPay integra com apps feitos com IA?",
        answer:
            "Sim. Além dos SDKs prontos, oferecemos MCP e exemplos para integrar com IA. Funciona muito bem em apps feitos no Cursor, Lovable e similares.",
    },
    {
        question: "Quanto tempo demora pra minha conta ser verificada?",
        answer:
            "Na maioria dos casos a verificação é instantânea. Quando precisamos de análise manual, o prazo médio é de algumas horas em dias úteis.",
    },
];

export const footerColumns = [
    {
        title: "Produtos",
        links: ["Pix", "Cartão de crédito", "Assinaturas", "Checkout transparente", "Split de pagamento"],
    },
    {
        title: "Desenvolvedores",
        links: ["Documentação", "Referência da API", "SDKs", "MCP", "Status"],
    },
    {
        title: "Empresa",
        links: ["Sobre", "Blog", "Suporte", "Discord", "Termos"],
    },
];
