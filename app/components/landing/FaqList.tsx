"use client";

import { useState } from "react";

type FaqListProps = {
    items: Array<{
        question: string;
        answer: string;
    }>;
};

export function FaqList({ items }: FaqListProps) {
    const [openItem, setOpenItem] = useState(0);

    return (
        <div className="animate-[cc-up_0.75s_cubic-bezier(.16,1,.3,1)_both]">
            {items.map((item, index) => {
                const isOpen = openItem === index;

                return (
                    <div className="border-b border-[#E6DECF]" key={item.question}>
                        <button
                            type="button"
                            className="flex w-full items-center justify-between gap-4 bg-transparent px-0.5 py-5 text-left text-[#19150F]"
                            aria-expanded={isOpen}
                            onClick={() => setOpenItem((current) => (current === index ? -1 : index))}
                        >
                            <span className="text-[16.5px] font-semibold">{item.question}</span>
                            <i className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,#FF5A1F_12%,#fff)] text-xl font-semibold not-italic text-[#D6480F]">
                                {isOpen ? "×" : "+"}
                            </i>
                        </button>
                        {isOpen ? (
                            <p className="max-w-[620px] px-0.5 pb-5 text-[15px] leading-[1.65] text-[#6F665A]">
                                {item.answer}
                            </p>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
