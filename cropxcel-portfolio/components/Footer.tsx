"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* COLUMN 1: Brand & Mission */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-green-500">CropXcel</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {t("footer_mission")}
                        </p>
                    </div>

                    {/* COLUMN 2: Quick Navigation */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">{t("footer_explore")}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="#features" className="hover:text-green-400 transition">{t("nav_features")}</a>
                            </li>
                            <li>
                                <a href="#impact" className="hover:text-green-400 transition">{t("nav_impact")}</a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 3: Location & Status */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">{t("footer_location")}</h4>
                        <p className="text-gray-400 text-sm mb-2">
                            {t("footer_institute")}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {t("footer_city")}
                        </p>
                        <div className="mt-4 inline-block bg-green-900/30 border border-green-800 rounded-full px-3 py-1 text-xs text-green-400">
                            🚀 {t("footer_status")}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {t("footer_copyright")}</p>
                </div>
            </div>
        </footer>
    );
}
