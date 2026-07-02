interface DecorProps {
    className?: string;
}

export function Sparkle({ className }: DecorProps) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 0c.9 4.2 2.9 7.1 6.1 8.9 1.3.7 2.7 1.1 4.9 1.1-2.2 0-3.6.4-4.9 1.1-3.2 1.8-5.2 4.7-6.1 8.9-.9-4.2-2.9-7.1-6.1-8.9C4.6 10.4 3.2 10 1 10c2.2 0 3.6-.4 4.9-1.1C9.1 7.1 11.1 4.2 12 0z" />
        </svg>
    );
}

export function DashedArrow({ className }: DecorProps) {
    return (
        <svg viewBox="0 0 100 90" fill="none" className={className} aria-hidden="true">
            <path
                d="M6 86C28 68 44 36 68 12"
                stroke="#FF7A00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 9"
            />
            <path
                d="M50 8L70 4L66 24"
                stroke="#FF7A00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

export function GradientBlob({ className }: DecorProps) {
    return (
        <svg
            viewBox="0 0 1000 760"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <defs>
                <linearGradient
                    id="authBlobG1"
                    x1="230"
                    y1="80"
                    x2="820"
                    y2="650"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FFD37A" />
                    <stop offset="0.45" stopColor="#FFAD2E" />
                    <stop offset="1" stopColor="#FF7A00" />
                </linearGradient>
                <linearGradient
                    id="authBlobG2"
                    x1="250"
                    y1="120"
                    x2="800"
                    y2="640"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FFC868" stopOpacity="0.65" />
                    <stop offset="0.55" stopColor="#FF9C14" stopOpacity="0.38" />
                    <stop offset="1" stopColor="#FF6F00" stopOpacity="0.28" />
                </linearGradient>
            </defs>
            <path
                d="M125 555C95 455 115 360 205 305C282 258 255 150 342 91C442 24 610 52 676 143C724 210 758 211 826 191C903 168 964 224 951 313C941 381 889 415 886 486C882 582 790 660 688 637C612 620 585 546 513 560C441 574 431 662 338 672C248 682 217 604 125 555Z"
                fill="url(#authBlobG1)"
            />
            <path
                d="M176 548C130 465 152 385 238 333C314 287 295 190 370 139C460 78 600 104 656 183C708 257 748 272 818 244C888 216 932 263 912 352C895 428 824 454 826 527C829 610 748 663 660 637C584 615 560 536 488 552C416 568 414 646 322 651C252 655 232 594 176 548Z"
                fill="url(#authBlobG2)"
            />
        </svg>
    );
}
