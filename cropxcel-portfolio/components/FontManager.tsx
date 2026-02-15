"use client";

import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

interface FontManagerProps {
    khmerFontClass: string;
    englishFontClass: string;
}

export default function FontManager({ khmerFontClass, englishFontClass }: FontManagerProps) {
    const { language } = useLanguage();

    useEffect(() => {
        // Remove both classes to start fresh or just toggle
        document.body.classList.remove(khmerFontClass, englishFontClass);

        if (language === 'kh') {
            document.body.classList.add(khmerFontClass);
        } else {
            document.body.classList.add(englishFontClass);
        }
    }, [language, khmerFontClass, englishFontClass]);

    return null;
}
