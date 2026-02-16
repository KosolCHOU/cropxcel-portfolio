"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "kh";

interface Translations {
    [key: string]: {
        en: string;
        kh: string;
    };
}

const translations: Translations = {
    // Navigation
    nav_home: { en: "Home", kh: "ទំព័រដើម" },
    nav_features: { en: "Features", kh: "លក្ខណៈពិសេស" },
    nav_impact: { en: "Impact", kh: "ផលចំណេញ" },
    nav_contact: { en: "Contact", kh: "ទំនាក់ទំនង" },
    nav_book_demo: { en: "Book Demo", kh: "កក់ការសាកល្បង" },
    nav_team: { en: "Team", kh: "ក្រុមការងារ" },
    nav_sdgs: { en: "SDGs", kh: "SDGs" },

    // Hero Section
    hero_title_prefix: { en: "Insight Agriculture for", kh: "កសិកម្មឆ្លាតវៃសម្រាប់" },
    hero_title_highlight: { en: "Cambodia", kh: "កម្ពុជា" },
    hero_description: {
        en: "Stop guessing, start optimizing. Turn satellite insights into 20-35% cost savings and higher yields. The first precision agriculture app built entirely in Khmer for the modern farmer.",
        kh: "ឈប់ស្មាន ចាប់ផ្តើមអនុវត្តតាមបច្ចេកទេស។ ប្រែក្លាយទិន្នន័យផ្កាយរណបទៅជាការសន្សំសំចៃ ២០-៣៥% និងទទួលបានទិន្នផលខ្ពស់។ កម្មវិធីកសិកម្មសុក្រិតដំបូងគេដែលបង្កើតឡើងជាភាសាខ្មែរសម្រាប់កសិករសម័យទំនើប។"
    },
    hero_before_label: { en: "NDVI Map", kh: "ផែនទី NDVI" },
    hero_after_label: { en: "RGB Map", kh: "ផែនទី RGB" },

    // Impact Section
    impact_title: { en: "Impact & ROI", kh: "ផលចំណេញ" },
    impact_subtitle: {
        en: "Transforming agriculture with data-driven insights that deliver measurable results",
        kh: "ផ្លាស់ប្តូរកសិកម្មជាមួយនឹងការយល់ដឹងផ្អែកលើទិន្នន័យដែលផ្តល់លទ្ធផលជាក់ស្តែង"
    },
    stat_1_label: { en: "Resource Savings", kh: "ការសន្សំធនធាន" },
    stat_1_desc: { en: "Up to 20-35% reduction in resource usage", kh: "កាត់បន្ថយការប្រើប្រាស់ធនធានរហូតដល់ ២០-៣៥%" },
    stat_2_label: { en: "Fertilizer Reduction", kh: "ការកាត់បន្ថយជី" },
    stat_2_desc: { en: "Decrease in fertilizer use through precision", kh: "កាត់បន្ថយការប្រើប្រាស់ជីតាមរយៈភាពជាក់លាក់" },
    stat_3_label: { en: "Market Size", kh: "ទំហំទីផ្សារ" },
    stat_3_desc: { en: "Precision farming market opportunity", kh: "ឱកាសទីផ្សារកសិកម្មសុក្រិត" },

    calc_title: { en: "Calculate Your Potential Savings", kh: "គណនាការសន្សំដែលអាចធ្វើបានរបស់អ្នក" },
    calc_farm_size: { en: "Farm Size (Hectares)", kh: "ទំហំដីស្រែ (ហិកតា)" },
    calc_note: {
        en: "Based on real-world precision farming data ($171-$201/ha/season). Results may vary by crop type, region, and implementation.",
        kh: "ផ្អែកលើទិន្នន័យកសិកម្មសុក្រិតជាក់ស្តែង ($១៧១-$២០១/ហិកតា/រដូវ)។ លទ្ធផលអាចប្រែប្រួលអាស្រ័យលើប្រភេទដំណាំ តំបន់ និងការអនុវត្ត។"
    },
    calc_output_label: { en: "Estimated Seasonal Savings", kh: "ការសន្សំប្រចាំរដូវដែលបានប៉ាន់ស្មាន" },
    calc_output_sub: { en: "Per growing season", kh: "ក្នុងមួយរដូវដាំដុះ" },
    calc_disclaimer: {
        en: "These calculations are based on real-world data from precision farming implementations. Actual results may vary based on crop type, region, and implementation strategy.",
        kh: "ការគណនាទាំងនេះផ្អែកលើទិន្នន័យជាក់ស្តែងពីការអនុវត្តកសិកម្មសុក្រិត។ លទ្ធផលជាក់ស្តែងអាចប្រែប្រួលអាស្រ័យលើប្រភេទដំណាំ តំបន់ និងយុទ្ធសាស្ត្រអនុវត្ត។"
    },

    // Features Section
    features_title: { en: "Innovative Solutions", kh: "ដំណោះស្រាយប្រកបដោយនវានុវត្តន៍" },
    features_subtitle: { en: "Combining satellite data with AI to solve the food crisis.", kh: "រួមបញ្ចូលទិន្នន័យផ្កាយរណបជាមួយ AI ដើម្បីដោះស្រាយវិបត្តិស្បៀងអាហារ។" },

    feature_1_title: { en: "Satellite Monitoring", kh: "ការត្រួតពិនិត្យតាមផ្កាយរណប" },
    feature_1_desc: {
        en: "Real-time insight about farm fields using satellite images to optimize resource usage. Monitor crop health, detect stress early, and make data-driven decisions to maximize yields while minimizing waste.",
        kh: "ការយល់ដឹងជាក់ស្តែងអំពីវាលស្រែដោយប្រើរូបភាពផ្កាយរណបដើម្បីបង្កើនប្រសិទ្ធភាពការប្រើប្រាស់ធនធាន។ តាមដានសុខភាពដំណាំ រកមើលបញ្ហាពីដំបូង និងធ្វើការសម្រេចចិត្តផ្អែកលើទិន្នន័យដើម្បីទទួលបានទិន្នផលខ្ពស់បំផុត និងកាត់បន្ថយការខ្ជះខ្ជាយ។"
    },

    feature_2_title: { en: "Early Warning System", kh: "ប្រព័ន្ធប្រកាសអាសន្នជាមុន" },
    feature_2_desc: {
        en: "Disease and pest alerts 7-10 days in advance, preventing crop loss. Our AI-powered system analyzes environmental conditions and crop health indicators to predict potential threats before they become visible.",
        kh: "ការជូនដំណឹងអំពីជំងឺ និងសត្វល្អិតកាចសាហាវ ៧-១០ ថ្ងៃមុន ដើម្បីការពារការបាត់បង់ដំណាំ។ ប្រព័ន្ធ AI របស់យើងវិភាគលក្ខខណ្ឌបរិស្ថាន និងសូចនាករសុខភាពដំណាំ ដើម្បីទស្សន៍ទាយការគំរាមកំហែងដែលអាចកើតមានមុនពេលវាលេចចេញជារូបរាង។"
    },

    feature_3_title: { en: "Native Khmer App", kh: "កម្មវិធីជាភាសាខ្មែរ" },
    feature_3_desc: {
        en: "Fully Khmer native application with comprehensive guides tailored for local farmers. Accessible interface designed for ease of use, with step-by-step instructions and localized content that speaks directly to Cambodian agricultural practices.",
        kh: "កម្មវិធីជាភាសាខ្មែរទាំងស្រុងជាមួយនឹងការណែនាំដ៏ទូលំទូលាយដែលតម្រូវសម្រាប់កសិករក្នុងស្រុក។ ចំណុចប្រទាក់ដែលងាយស្រួលប្រើ ជាមួយនឹងការណែនាំមួយជំហានម្តងៗ និងខ្លឹមសារដែលទាក់ទងដោយផ្ទាល់ទៅនឹងការអនុវត្តកសិកម្មរបស់កម្ពុជា។"
    },

    // SDG Section
    sdg_title: { en: "Contributing to Global Sustainability", kh: "រួមចំណែកដល់និរន្តរភាពសកល" },
    sdg_subtitle: {
        en: "CropXcel aligns with the United Nations Sustainable Development Goals, driving positive impact for people and planet",
        kh: "CropXcel ស្របតាមគោលដៅអភិវឌ្ឍន៍ប្រកបដោយចីរភាពរបស់អង្គការសហប្រជាជាតិ ជំរុញឥទ្ធិពលវិជ្ជមានសម្រាប់មនុស្ស និងភពផែនដី"
    },
    sdg_learn_more: { en: "Learn more about the", kh: "ស្វែងយល់បន្ថែមអំពី" },
    sdg_goal_name: { en: "UN Sustainable Development Goals", kh: "គោលដៅអភិវឌ្ឍន៍ប្រកបដោយចីរភាពរបស់អង្គការសហប្រជាជាតិ" },

    sdg_1_title: { en: "No Poverty", kh: "គ្មានភាពក្រីក្រ" },
    sdg_1_desc: {
        en: "CropXcel increases smallholder farmer income by reducing input costs by $171 to $201 per hectare per season through optimized resource use.",
        kh: "CropXcel បង្កើនប្រាក់ចំណូលរបស់កសិករខ្នាតតូចដោយកាត់បន្ថយថ្លៃដើមពី ១៧១ ទៅ ២០១ ដុល្លារក្នុងមួយហិកតាក្នុងមួយរដូវ តាមរយៈការប្រើប្រាស់ធនធានដ៏ប្រសើរ។"
    },
    sdg_2_title: { en: "Zero Hunger", kh: "គ្មានភាពអត់ឃ្លាន" },
    sdg_2_desc: {
        en: "By providing early warnings for diseases and pests 7-10 days in advance, the app helps secure food production and enhance crop yields to address the food crisis.",
        kh: "ដោយផ្តល់ការព្រមានជាមុនអំពីជំងឺនិងសត្វល្អិត ៧-១០ ថ្ងៃ កម្មវិធីនេះជួយធានានូវចង្វាក់ផលិតកម្មស្បៀង និងបង្កើនទិន្នផលដំណាំដើម្បីដោះស្រាយវិបត្តិស្បៀងអាហារ។"
    },
    sdg_9_title: { en: "Industry, Innovation and Infrastructure", kh: "ឧស្សាហកម្ម នវានុវត្តន៍ និងហេដ្ឋារចនាសម្ព័ន្ធ" },
    sdg_9_desc: {
        en: "CropXcel modernizes rural agriculture by introducing advanced AI models and satellite monitoring to creating a more resilient farming infrastructure.",
        kh: "CropXcel ធ្វើទំនើបកម្មកសិកម្មជនបទដោយណែនាំម៉ូដែល AI កម្រិតខ្ពស់និងការត្រួតពិនិត្យផ្កាយរណបដើម្បីបង្កើតហេដ្ឋារចនាសម្ព័ន្ធកសិកម្មដែលមានភាពធន់ជាងមុន។"
    },
    sdg_12_title: { en: "Responsible Consumption and Production", kh: "ការប្រើប្រាស់ និងផលិតកម្មប្រកបដោយការទទួលខុសត្រូវ" },
    sdg_12_desc: {
        en: "The app promotes sustainable farming by using variable-rate input maps to cut overall resource use (fertilizers and pesticides) by 20-35%.",
        kh: "កម្មវិធីនេះជំរុញការធ្វើកសិកម្មប្រកបដោយនិរន្តរភាពដោយប្រើផែនទីអត្រាអថេរដើម្បីកាត់បន្ថយការប្រើប្រាស់ធនធានសរុប (ជីនិងថ្នាំសម្លាប់សត្វល្អិត) ២០-៣៥% ។"
    },
    sdg_13_title: { en: "Climate Action", kh: "សកម្មភាពអាកាសធាតុ" },
    sdg_13_desc: {
        en: "CropXcel mitigates environmental impact by reducing chemical runoff and optimizing water usage, saving roughly $95 per 100 liters of pumping avoided.",
        kh: "CropXcel កាត់បន្ថយផលប៉ះពាល់បរិស្ថានដោយកាត់បន្ថយការហូរចូលនៃសារធាតុគីមីនិងប្រើប្រាស់ទឹកឱ្យមានប្រសិទ្ធភាព សន្សំប្រហែល ៩៥ ដុល្លាររាល់ការបូមទឹក ១០០ លីត្រដែលត្រូវបានជៀសវាង។"
    },

    // Footer
    footer_mission: {
        en: "AI-powered satellite insights to help Cambodian farmers increase yields and reduce costs.",
        kh: "ការយល់ដឹងពីផ្កាយរណបដែលដំណើរការដោយ AI ដើម្បីជួយកសិករកម្ពុជាបង្កើនទិន្នផល និងកាត់បន្ថយចំណាយ។"
    },
    footer_explore: { en: "Explore", kh: "ស្វែងរក" },
    footer_team: { en: "Our Team", kh: "ក្រុមការងារ" },
    footer_location: { en: "Location", kh: "ទីតាំង" },
    footer_institute: { en: "Institute of Technology of Cambodia (ITC)", kh: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)" },
    footer_city: { en: "Phnom Penh, Cambodia", kh: "រាជធានីភ្នំពេញ, កម្ពុជា" },
    footer_status: { en: "Currently in Pilot Phase", kh: "កំពុងស្ថិតក្នុងដំណាក់កាលសាកល្បង" },
    footer_copyright: { en: "CropXcel. Built for Cambodia.", kh: "CropXcel. បង្កើតឡើងសម្រាប់កម្ពុជា។" },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
