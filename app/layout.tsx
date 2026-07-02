import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
    variable: "--font-careca-display",
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});

const sans = Hanken_Grotesk({
    variable: "--font-careca-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "CarecaPay | Pix, assinaturas e cartão",
    description: "Receba por Pix, cartão de crédito e assinaturas com uma API simples, painel completo e zero mensalidade.",
    openGraph: {
        title: "CarecaPay | Pix, assinaturas e cartão",
        description: "Receba por Pix, cartão de crédito e assinaturas com uma API simples, painel completo e zero mensalidade.",
        url: "https://carecapay.com.br",
        siteName: "CarecaPay",
        images: [
            {
                url: "/assets/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "pt-BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CarecaPay | Pix, cartão e assinaturas",
        description:
            "Receba por Pix, cartão de crédito e assinaturas com uma API simples, painel completo e zero mensalidade.",
        images: ["/assets/og-image.png"],
    },
    alternates: {
        canonical: "https://carecapay.com.br",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${display.variable} ${sans.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <body className="min-h-screen bg-[#F3EEE4] font-(--font-careca-sans) text-[#19150F] antialiased selection:bg-[#FFD8C4]" cz-shortcut-listen="true">
                {children}
            </body>
        </html>
    );
}
