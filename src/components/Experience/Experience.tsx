import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc]">
            <div className="max-w-[1400px] mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-[10vw] md:text-[6vw] font-serif font-medium text-black leading-none mb-4">
                        01 — Work
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                {/* Experience Content - Timeline/Statement Block */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                    {/* Left Col: Date Range */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-sm md:text-base font-sans font-medium text-black tracking-wider block">
                            May 2025 — Present
                        </span>
                        <motion.span
                            initial={{ color: '#9ca3af', scale: 1 }}
                            whileInView={{ color: '#000000', scale: 1.1, fontWeight: 600 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xs font-medium mt-1 block font-mono origin-left"
                        >
                            8+ months
                        </motion.span>
                    </motion.div>

                    {/* Right Col: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Role Header */}
                        <div className="mb-12">
                            <h3 className="text-3xl md:text-4xl font-serif font-medium text-black mb-2">
                                Software Engineer Intern
                            </h3>
                            <p className="text-lg text-gray-500 font-sans">
                                One Data Software Solution
                            </p>
                        </div>

                        {/* Nested Timeline Phases */}
                        <div className="relative space-y-12">
                            {/* Phase 1 */}
                            <div className="relative pl-8 md:pl-10 border-l border-black/20">
                                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-300" />
                                <div className="mb-4">
                                    <h4 className="font-serif text-xl text-black">First 6 Months</h4>
                                    <span className="text-sm text-gray-400 font-sans">May 2025 — Oct 2025</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        <>Developed 10+ core features for the <a href="#" className="border-b border-black/30 hover:border-black text-black/90 transition-colors pb-0.5">Nexzop web application</a> using React and Tailwind CSS, reducing user-reported bugs by 15%</>,
                                        "Implemented reusable UI components and integrated RESTful APIs, improving development efficiency by 20%"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-black/70 font-sans text-base leading-relaxed">
                                            <span className="mr-3 text-black/30 mt-1.5 text-[10px] shrink-0">●</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Phase 2 (Current) */}
                            <div className="relative pl-8 md:pl-10 border-l border-black/20">
                                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_4px_rgba(0,0,0,0.1)]" />
                                <div className="mb-4">
                                    <h4 className="font-serif text-xl text-black">Leadership & Growth</h4>
                                    <span className="text-sm text-gray-400 font-sans">Nov 2025 — Present</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Spearheaded the development of critical application modules, ensuring high performance and scalability",
                                        "Maintained code quality by reviewing 5+ weekly pull requests, ensuring adherence to clean code standards",
                                        "Orchestrated task distribution and mentored 2 junior developers, accelerating their onboarding process",
                                        "Optimized development workflows using Docker and CI/CD pipelines, reducing deployment times by 40%"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-black/70 font-sans text-base leading-relaxed">
                                            <span className="mr-3 text-black/30 mt-1.5 text-[10px] shrink-0">●</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

