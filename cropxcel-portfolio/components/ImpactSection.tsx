"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Leaf, Droplets, Globe, Calculator } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ImpactSection() {
    const { t } = useLanguage();
    const [farmSize, setFarmSize] = useState(100);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const calculateSavings = (hectares: number) => {
        return hectares * 186;
    };

    const stats = [
        {
            icon: Leaf,
            value: 35,
            suffix: "%",
            label: t("stat_1_label"),
            description: t("stat_1_desc"),
            color: "from-emerald-400 to-green-500",
        },
        {
            icon: Droplets,
            value: 14,
            suffix: "%",
            label: t("stat_2_label"),
            description: t("stat_2_desc"),
            color: "from-blue-400 to-cyan-500",
        },
        {
            icon: Globe,
            value: 12,
            suffix: "B",
            prefix: "$",
            label: t("stat_3_label"),
            description: t("stat_3_desc"),
            color: "from-purple-400 to-pink-500",
        },
    ];

    return (
        <section
            id="impact"
            className="relative py-24 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("impact_title")}
                    </h2>
                    <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
                        {t("impact_subtitle")}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                            >
                                {/* Icon */}
                                <div
                                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Value */}
                                <div className="mb-3">
                                    <span className="text-5xl md:text-6xl font-bold text-white">
                                        {stat.prefix}
                                        {isVisible ? (
                                            <CountUp
                                                end={stat.value}
                                                duration={2.5}
                                                separator=","
                                                delay={index * 0.2}
                                            />
                                        ) : (
                                            0
                                        )}
                                        {stat.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-green-100/80 text-sm leading-relaxed">
                                    {stat.description}
                                </p>

                                {/* Decorative gradient line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Interactive Calculator */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300 shadow-2xl">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-green-400 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-green-400 rounded-br-3xl"></div>

                    <div className="relative z-10">
                        {/* Calculator Header */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 mr-4">
                                <Calculator className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                {t("calc_title")}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {/* Input Section */}
                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="farm-size"
                                        className="block text-lg font-semibold text-white mb-4"
                                    >
                                        {t("calc_farm_size")}
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="farm-size"
                                            type="range"
                                            min="1"
                                            max="500"
                                            value={farmSize}
                                            onChange={(e) => setFarmSize(Number(e.target.value))}
                                            className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                                            style={{
                                                background: `linear-gradient(to right, #10b981 0%, #10b981 ${((farmSize - 1) / 499) * 100
                                                    }%, rgba(255,255,255,0.2) ${((farmSize - 1) / 499) * 100
                                                    }%, rgba(255,255,255,0.2) 100%)`,
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-3 text-green-100 text-sm">
                                        <span>1 ha</span>
                                        <span className="text-2xl font-bold text-white">
                                            {farmSize} ha
                                        </span>
                                        <span>500 ha</span>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
                                    <p className="text-green-100 text-sm leading-relaxed">
                                        {t("calc_note")}
                                    </p>
                                </div>
                            </div>

                            {/* Output Section */}
                            <div className="flex items-center justify-center">
                                <div className="text-center backdrop-blur-sm bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 rounded-2xl p-10 w-full">
                                    <p className="text-green-100 text-lg mb-4 font-medium">
                                        {t("calc_output_label")}
                                    </p>
                                    <div className="relative">
                                        <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200 mb-2">
                                            $
                                            {isVisible ? (
                                                <CountUp
                                                    end={calculateSavings(farmSize)}
                                                    duration={0.5}
                                                    separator=","
                                                    preserveValue={true}
                                                />
                                            ) : (
                                                0
                                            )}
                                        </div>
                                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl -z-10"></div>
                                    </div>
                                    <p className="text-green-200 text-sm mt-4">
                                        {t("calc_output_sub")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA or Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-green-100/80 text-sm max-w-2xl mx-auto">
                        {t("calc_disclaimer")}
                    </p>
                </div>
            </div>

            {/* Custom Slider Styles */}
            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.6);
        }
      `}</style>
        </section>
    );
}
