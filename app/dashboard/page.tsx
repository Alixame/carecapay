import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#F3EEE4] px-6 text-center">
            <Image
                src="/assets/careca-final-cta.png"
                alt=""
                width={200}
                height={200}
                className="h-48 w-48 object-contain"
            />
            <h1 className="font-(--font-careca-display) text-3xl font-extrabold text-[#19150F]">
                Dashboard em breve
            </h1>
            <p className="max-w-md text-sm text-[#3B342B]">
                Estamos preparando o painel do CarecaPay. Em breve você vai
                poder acompanhar seus pagamentos, assinaturas e Pix por aqui.
            </p>
            <Link
                href="/"
                className="rounded-xl bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#FF8A00]"
            >
                Voltar para a home
            </Link>
        </main>
    );
}
