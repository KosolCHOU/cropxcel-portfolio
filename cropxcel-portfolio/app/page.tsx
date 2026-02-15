"use client";

import Image from "next/image";
import ImageComparisonSlider from "@/components/ImageComparisonSlider";
import FadeUpOnScroll from "@/components/FadeUpOnScroll";
import ImpactSection from "@/components/ImpactSection";
import SDGSection from "@/components/SDGSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className="min-h-screen pt-16">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-green-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                  {t("hero_title_prefix")} <span className="text-green-600">{t("hero_title_highlight")}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t("hero_description")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://calendly.com/kosolchou/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                  >
                    {t("nav_book_demo")}
                  </a>
                </div>
              </div>

              {/* Right Column - Image Comparison Slider */}
              <div className="relative aspect-[4/3] w-full">
                <ImageComparisonSlider
                  beforeImage="/images/NDVI_map.png"
                  afterImage="/images/RGB_map.png"
                  beforeLabel={t("hero_before_label")}
                  afterLabel={t("hero_after_label")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT & ROI SECTION */}
        <FadeUpOnScroll>
          <ImpactSection />
        </FadeUpOnScroll>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">{t("features_title")}</h2>
              <p className="mt-4 text-gray-600">{t("features_subtitle")}</p>
            </div>

            <div className="space-y-24">
              {/* Feature 1 - Image Left */}
              <FadeUpOnScroll delay={0}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg order-1 lg:order-1">
                    <Image
                      src="/images/first_feature.png" // Double check image path if needed, keeping original
                      alt="Satellite Monitoring"
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="space-y-4 order-2 lg:order-2">
                    <h3 className="text-3xl font-bold text-gray-900">{t("feature_1_title")}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t("feature_1_desc")}
                    </p>
                  </div>
                </div>
              </FadeUpOnScroll>

              {/* Feature 2 - Image Right */}
              <FadeUpOnScroll delay={200}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 order-2 lg:order-1">
                    <h3 className="text-3xl font-bold text-gray-900">{t("feature_2_title")}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t("feature_2_desc")}
                    </p>
                  </div>
                  <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg order-1 lg:order-2">
                    <Image
                      src="/images/second_feature.png"
                      alt="Early Warning System"
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </FadeUpOnScroll>

              {/* Feature 3 - Image Left */}
              <FadeUpOnScroll delay={400}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg order-1 lg:order-1">
                    <Image
                      src="/images/third_feature.png"
                      alt="Native Khmer App"
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="space-y-4 order-2 lg:order-2">
                    <h3 className="text-3xl font-bold text-gray-900">{t("feature_3_title")}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t("feature_3_desc")}
                    </p>
                  </div>
                </div>
              </FadeUpOnScroll>
            </div>
          </div>
        </section>

        {/* SDG SECTION */}
        <FadeUpOnScroll>
          <SDGSection />
        </FadeUpOnScroll>

      </main>
      <Footer />
    </>
  );
}