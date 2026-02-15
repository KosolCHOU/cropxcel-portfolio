'use client';

import { Poppins } from "next/font/google";
import SmoothScrollLink from "./SmoothScrollLink";
import { useLanguage } from "@/components/LanguageContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-poppins"
});

export default function Navigation() {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'kh' : 'en');
    };

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <SmoothScrollLink
                            href="#"
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <span className={`${poppins.className} text-2xl font-extrabold inline-flex items-center gap-0 leading-none`}>
                                <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>
                                    Crop
                                </span>
                                <span className="bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-600 bg-clip-text text-transparent mx-0.5" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.30)' }}>
                                    X
                                </span>
                                <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>
                                    cel
                                </span>
                            </span>
                        </SmoothScrollLink>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <SmoothScrollLink
                            href="#impact"
                            className="text-gray-600 hover:text-green-600 transition"
                        >
                            {t("nav_impact")}
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#features"
                            className="text-gray-600 hover:text-green-600 transition"
                        >
                            {t("nav_features")}
                        </SmoothScrollLink>

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://calendly.com/kosolchou/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                            >
                                {t("nav_book_demo")}
                            </a>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition font-bold text-sm text-gray-700 border border-gray-200"
                                title={language === 'en' ? "Switch to Khmer" : "ប្តូរទៅភាសាអង់គ្លេស"}
                            >
                                {language === 'en' ? "KH" : "EN"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
