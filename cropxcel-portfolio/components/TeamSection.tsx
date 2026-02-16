'use client';

import RadarImageSection from "./RadarImageSection";
import FadeUpOnScroll from "./FadeUpOnScroll";

export default function TeamSection() {
    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Title */}
                <FadeUpOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">ជួបជាមួយអ្នកច្នៃប្រឌិត</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            ក្រុមការងារពហុជំនាញមកពីវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) ដែលរួមបញ្ចូលជំនាញកសិកម្មជាមួយបច្ចេកវិទ្យា AI និងវិស្វកម្មផ្នែកទន់។
                        </p>
                    </div>
                </FadeUpOnScroll>

                {/* Split Card: Description Left, Radar Animation Right */}
                <FadeUpOnScroll delay={100}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left: Description */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ជូ កុសល់</h3>
                                    <p className="text-xl text-emerald-600 font-semibold mb-6">ប្រធានផ្នែកបច្ចេកវិទ្យា និងស្ថាបនិក</p>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    ជាអ្នកដឹកនាំផែនការយុទ្ធសាស្ត្របច្ចេកវិទ្យា និងហេដ្ឋារចនាសម្ព័ន្ធ AI។ គ្រប់គ្រងក្រុមវិស្វកម្មដើម្បីបង្កើតដំណោះស្រាយតាមដានតាមរយៈផ្កាយរណបដែលមានប្រសិទ្ធភាពខ្ពស់។
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    ជាមួយនឹងជំនាញឯកទេសផ្នែក Machine Learning, Remote Sensing និង Software Architecture លោក កុសល់ ដឹកនាំការអភិវឌ្ឍបច្ចេកវិទ្យាកសិកម្មទំនើប ដែលផ្តល់លទ្ធភាពឱ្យកសិករទទួលបានទិន្នន័យជាក់លាក់ពីការដ្ឋានផ្ទាល់។
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-4 pt-6">
                                    <a
                                        href="https://www.linkedin.com/in/kosol-chou-30430234b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-600 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/KosolCHOU"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-900 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Radar Animation */}
                            <div className="bg-gradient-to-br from-gray-50 to-white">
                                <RadarImageSection
                                    imageSrc="/images/kosol.png"
                                    imageAlt="ប្រធានក្រុម - ជូ កុសល់"
                                    className="!py-6 lg:!py-12 !bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </FadeUpOnScroll>

                {/* Second Team Member - Flipped Layout */}
                <FadeUpOnScroll delay={200}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left: Radar Animation */}
                            <div className="bg-gradient-to-br from-gray-50 to-white order-2 lg:order-1">
                                <RadarImageSection
                                    imageSrc="/images/chettra.png"
                                    imageAlt="នាយកប្រតិបត្តិ - ណាង ចិត្រា"
                                    className="!py-6 lg:!py-12 !bg-transparent"
                                />
                            </div>

                            {/* Right: Description */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6 order-1 lg:order-2">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ណាង ចិត្រា</h3>
                                    <p className="text-xl text-emerald-600 font-semibold mb-6">នាយកប្រតិបត្តិ និងសហស្ថាបនិក</p>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    ដឹកនាំចក្ខុវិស័យយុទ្ធសាស្ត្រ និងការរីកលូតលាស់នៃអាជីវកម្ម។ ផ្តោតលើការកសាងភាពជាដៃគូជាមួយសហគមន៍កសិកម្ម និងការស្វែងរកប្រភពទុនដើម្បីនិរន្តរភាព។
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    ជាមួយនឹងការយល់ដឹងស៊ីជម្រៅអំពីទីផ្សារកសិកម្ម និងភាពជាអ្នកដឹកនាំយុទ្ធសាស្ត្រ លោក ចិត្រា ដឹកនាំការអភិវឌ្ឍអាជីវកម្ម និងពង្រឹងទំនាក់ទំនងសំខាន់ៗដែលជំរុញបេសកកម្មរបស់ CropXcel ឱ្យឈានទៅមុខ។
                                </p>

                                {/* Social Links - Add when available */}
                                <div className="flex gap-4 pt-6">
                                    <a
                                        href="https://www.linkedin.com/in/chettra-nang-a35b23375/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-600 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/Chettraa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-900 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUpOnScroll>
            </div>
        </section>
    );
}
