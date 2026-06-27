export type IconName =
    | "arrowRight"
    | "bell"
    | "bolt"
    | "card"
    | "check"
    | "code"
    | "columns"
    | "grid"
    | "headset"
    | "home"
    | "layers"
    | "list"
    | "lock"
    | "plus"
    | "profile"
    | "pix"
    | "play"
    | "react"
    | "refresh"
    | "terminal";

type IconProps = {
    name: IconName;
    className?: string;
};

export function Icon({ name, className }: IconProps) {
    const props = {
        className,
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        "aria-hidden": true,
    };

    switch (name) {
        case "arrowRight":
            return (
                <svg {...props}>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                </svg>
            );
        case "bell":
            return (
                <svg {...props}>
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
            );
        case "bolt":
            return (
                <svg {...props} fill="currentColor" stroke="none">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />
                </svg>
            );
        case "card":
            return (
                <svg {...props}>
                    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                    <path d="M2.5 9.5h19" />
                    <path d="M6 15h4" />
                </svg>
            );
        case "check":
            return (
                <svg {...props}>
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            );
        case "code":
            return (
                <svg {...props}>
                    <path d="m8 6-5 6 5 6" />
                    <path d="m16 6 5 6-5 6" />
                </svg>
            );
        case "columns":
            return (
                <svg {...props}>
                    <path d="M4 6h16" />
                    <path d="M9 6v13" />
                    <path d="M15 6v13" />
                </svg>
            );
        case "grid":
            return (
                <svg {...props}>
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
            );
        case "headset":
            return (
                <svg {...props}>
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
            );
        case "home":
            return (
                <svg {...props}>
                    <path d="M3 10.5 12 3l9 7.5" />
                    <path d="M5 9v11h14V9" />
                </svg>
            );
        case "layers":
            return (
                <svg {...props}>
                    <path d="m12 2 9 5-9 5-9-5 9-5z" />
                    <path d="m3 12 9 5 9-5" />
                    <path d="m3 17 9 5 9-5" />
                </svg>
            );
        case "list":
            return (
                <svg {...props}>
                    <path d="M8 6h12" />
                    <path d="M8 12h12" />
                    <path d="M8 18h12" />
                    <path d="M3.5 6h.01" />
                    <path d="M3.5 12h.01" />
                    <path d="M3.5 18h.01" />
                </svg>
            );
        case "lock":
            return (
                <svg {...props}>
                    <rect x="4" y="10" width="16" height="11" rx="2.2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
            );
        case "plus":
            return (
                <svg {...props}>
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                </svg>
            );
        case "profile":
            return (
                <svg {...props}>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
            );
        case "pix":
            return (
                <svg {...props} fill="currentColor" stroke="none">
                    <path d="m12 2.4 3.4 3.4L12 9.2 8.6 5.8zM5.6 8.6 9 12l-3.4 3.4L2.2 12zm12.8 0 3.4 3.4-3.4 3.4L15 12zM12 14.8l3.4 3.4-3.4 3.4-3.4-3.4z" />
                </svg>
            );
        case "play":
            return (
                <svg {...props} fill="currentColor" stroke="none">
                    <path d="M9 7.2v9.6L16.5 12z" />
                </svg>
            );
        case "react":
            return (
                <svg {...props} strokeWidth={1.7}>
                    <circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.4" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)" />
                </svg>
            );
        case "refresh":
            return (
                <svg {...props}>
                    <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                    <path d="M21 3v5h-5" />
                </svg>
            );
        case "terminal":
            return (
                <svg {...props}>
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                </svg>
            );
    }
}
