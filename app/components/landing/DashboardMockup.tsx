const NAV_ITEMS = [
    { label: "Visão geral", active: true },
    { label: "Transações", active: false },
    { label: "Assinaturas", active: false },
    { label: "Links de pagamento", active: false },
    { label: "Clientes", active: false },
    { label: "Webhooks", active: false },
    { label: "API Keys", active: false },
    { label: "SDKs", active: false },
    { label: "Documentação", active: false },
];

const BALANCE_CARDS = [
    { label: "Saldo disponível", value: "R$ 12.450,75" },
    { label: "Saldo pendente", value: "R$ 3.210,40" },
    { label: "Volume processado", value: "R$ 98.765,30" },
];

const PAYMENT_METHODS = [
    { label: "Pix", value: "52%", color: "#FF7A00" },
    { label: "Cartão", value: "36%", color: "#3B82F6" },
    { label: "Boleto", value: "12%", color: "#16A34A" },
];

export function DashboardMockup() {
    return (
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl shadow-black/20">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#F0EBE1] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7A00] text-[10px] font-bold text-white">
                        C
                    </span>
                    <span className="text-xs font-bold text-[#19150F]">
                        CarecaPay
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#5C564C]">
                        Sandbox
                        <span className="relative h-3.5 w-6 rounded-full bg-[#FF7A00]">
                            <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                    </div>
                    <span className="h-5 w-5 rounded-full bg-[#E2D9C8]" />
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <nav className="hidden w-36 shrink-0 flex-col gap-0.5 border-r border-[#F0EBE1] p-2 sm:flex">
                    {NAV_ITEMS.map((item) => (
                        <span
                            key={item.label}
                            className={`rounded-md px-2.5 py-1.5 text-[11px] ${
                                item.active
                                    ? "bg-[#FFF1E2] font-semibold text-[#FF7A00]"
                                    : "text-[#5C564C]"
                            }`}
                        >
                            {item.label}
                        </span>
                    ))}
                </nav>

                {/* Main */}
                <div className="flex-1 p-3.5">
                    <h3 className="text-sm font-bold text-[#19150F]">
                        Visão geral
                    </h3>

                    {/* Balance cards */}
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        {BALANCE_CARDS.map((card) => (
                            <div
                                key={card.label}
                                className="rounded-lg border border-[#F0EBE1] bg-[#FBF8F2] px-2.5 py-2"
                            >
                                <p className="text-[9px] text-[#5C564C]">
                                    {card.label}
                                </p>
                                <p className="mt-1 text-[11px] font-bold text-[#19150F]">
                                    {card.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Charts */}
                    <div className="mt-3 grid grid-cols-5 gap-2">
                        {/* Line chart */}
                        <div className="col-span-3 rounded-lg border border-[#F0EBE1] p-2.5">
                            <p className="text-[9px] text-[#5C564C]">
                                Receita nos últimos 7 dias
                            </p>
                            <svg
                                viewBox="0 0 200 80"
                                className="mt-1 h-16 w-full"
                                fill="none"
                            >
                                <polyline
                                    points="0,62 30,55 60,60 90,42 120,46 150,28 200,14"
                                    stroke="#FF7A00"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    points="0,62 30,55 60,60 90,42 120,46 150,28 200,14 200,80 0,80"
                                    fill="#FF7A00"
                                    fillOpacity="0.08"
                                    stroke="none"
                                />
                            </svg>
                        </div>

                        {/* Donut chart */}
                        <div className="col-span-2 rounded-lg border border-[#F0EBE1] p-2.5">
                            <p className="text-[9px] text-[#5C564C]">
                                Meios de pagamento
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                                <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="none"
                                        stroke="#F0EBE1"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="none"
                                        stroke="#FF7A00"
                                        strokeWidth="4"
                                        strokeDasharray="52 48"
                                        strokeDashoffset="0"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="4"
                                        strokeDasharray="36 64"
                                        strokeDashoffset="-52"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="none"
                                        stroke="#16A34A"
                                        strokeWidth="4"
                                        strokeDasharray="12 88"
                                        strokeDashoffset="-88"
                                    />
                                </svg>
                                <ul className="flex flex-col gap-0.5">
                                    {PAYMENT_METHODS.map((method) => (
                                        <li
                                            key={method.label}
                                            className="flex items-center gap-1 text-[9px] text-[#5C564C]"
                                        >
                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{ backgroundColor: method.color }}
                                            />
                                            {method.label} {method.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
