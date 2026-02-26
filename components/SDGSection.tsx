"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function SDGSection() {
    const { t } = useLanguage();

    const sdgs = [
        {
            number: 1,
            title: t("sdg_1_title"),
            description: t("sdg_1_desc"),
            image: "/images/E_PRINT_01.jpg",
        },
        {
            number: 2,
            title: t("sdg_2_title"),
            description: t("sdg_2_desc"),
            image: "/images/E_PRINT_02.jpg",
        },
        {
            number: 9,
            title: t("sdg_9_title"),
            description: t("sdg_9_desc"),
            image: "/images/E_PRINT_09.jpg",
        },
        {
            number: 12,
            title: t("sdg_12_title"),
            description: t("sdg_12_desc"),
            image: "/images/E_PRINT_12.jpg",
        },
        {
            number: 13,
            title: t("sdg_13_title"),
            description: t("sdg_13_desc"),
            image: "/images/E_PRINT_13.jpg",
        },
    ];

    return (
        <section id="sdgs" className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t("sdg_title")}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t("sdg_subtitle")}
                    </p>
                </div>

                {/* SDG Cards - First Row (3 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {sdgs.slice(0, 3).map((sdg) => (
                        <div
                            key={sdg.number}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                        >
                            <div className="p-8">
                                {/* SDG Icon */}
                                <div className="flex items-center justify-center mb-6">
                                    <div className="relative w-32 h-32 group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={sdg.image}
                                            alt={`SDG ${sdg.number}: ${sdg.title}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center min-h-[3.5rem] flex items-center justify-center">
                                    {sdg.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-center leading-relaxed text-sm">
                                    {sdg.description}
                                </p>
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* SDG Cards - Second Row (2 cards centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {sdgs.slice(3, 5).map((sdg) => (
                        <div
                            key={sdg.number}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                        >
                            <div className="p-8">
                                {/* SDG Icon */}
                                <div className="flex items-center justify-center mb-6">
                                    <div className="relative w-32 h-32 group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={sdg.image}
                                            alt={`SDG ${sdg.number}: ${sdg.title}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center min-h-[3.5rem] flex items-center justify-center">
                                    {sdg.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-center leading-relaxed text-sm">
                                    {sdg.description}
                                </p>
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        {t("sdg_learn_more")}{" "}
                        <a
                            href="https://sdgs.un.org/goals"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-semibold underline"
                        >
                            {t("sdg_goal_name")}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
