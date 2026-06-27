import Image from "next/image";

type BrandProps = {
    compact?: boolean;
    light?: boolean;
    className?: string;
};

export function Brand({ compact = false, light = false, className = "" }: BrandProps) {
    return (
        <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="CarecaPay">
            <Image
                src="/assets/carecapay-icon.svg"
                alt=""
                width={44}
                height={44}
                className={compact ? "h-9 w-9" : "h-11 w-11"}
                priority
            />
            <span
                className={`font-[var(--font-careca-display)] text-[23px] font-extrabold tracking-[-0.02em] ${
                    light ? "text-white" : "text-[#19150F]"
                }`}
            >
                careca<span className="text-[#FF5A1F]">pay</span>
            </span>
        </span>
    );
}
