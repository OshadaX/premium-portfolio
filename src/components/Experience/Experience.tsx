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
                        <div className="relative space-y-12 pl-4">
                            {/* Animated Timeline Line */}
                            <motion.div
                                className="absolute left-[3px] top-2 bottom-0 w-[1px] bg-black/10 origin-top"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                            />

                            {/* Phase 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                    className="absolute -left-[1.5px] top-[14px] w-2.5 h-2.5 rounded-full bg-gray-300"
                                />
                                <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-300">
                                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <h4 className="font-serif text-2xl text-black">First 6 Months</h4>
                                        <span className="text-sm font-mono tracking-wider text-gray-400">MAY 2025 — OCT 2025</span>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            <>Developed 10+ core features for the <a href="#" className="border-b border-black/30 hover:border-black text-black/90 transition-colors pb-0.5 font-medium">Nexzop web application</a>, reducing user-reported bugs by 15%</>,
                                            "Implemented reusable UI components and integrated RESTful APIs, improving development efficiency by 20%"
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                                                className="flex items-start text-black/70 font-sans text-base leading-relaxed"
                                            >
                                                <span className="mr-4 text-black/20 mt-2 text-[8px] shrink-0">●</span>
                                                <span className="flex-1">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap gap-2">
                                        {['React', 'Tailwind CSS', 'REST APIs'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-black/5 text-black/60 rounded-full text-xs font-mono tracking-widest hover:bg-black/10 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phase 2 (Current) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1 }}
                                    className="absolute -left-[1.5px] top-[14px] w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_4px_rgba(0,0,0,0.1)]"
                                />
                                <div className="bg-white border border-black/10 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform md:-translate-x-2">
                                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-serif text-2xl text-black">Leadership & Growth</h4>
                                            <span className="px-2 py-0.5 bg-black/5 text-black/60 rounded-full text-[10px] font-mono tracking-widest border border-black/10">PRESENT</span>
                                        </div>
                                        <span className="text-sm font-mono tracking-wider text-black/40">NOV 2025 — PRESENT</span>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Spearheaded the development of critical application modules, ensuring high performance and scalability",
                                            "Maintained code quality by reviewing 5+ weekly pull requests, ensuring adherence to clean code standards",
                                            "Orchestrated task distribution and mentored 2 junior developers, accelerating their onboarding process",
                                            "Optimized development workflows using Docker and CI/CD pipelines, reducing deployment times by 40%"
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
                                                className="flex items-start text-black/80 font-sans text-base leading-relaxed"
                                            >
                                                <span className="mr-4 text-black/40 mt-2 text-[8px] shrink-0">●</span>
                                                <span className="flex-1">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap gap-2">
                                        {['Architectural Design', 'Code Review', 'Docker', 'CI/CD'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-black/5 text-black/80 rounded-full text-xs font-mono tracking-widest hover:bg-black group transition-colors cursor-default">
                                                <span className="group-hover:text-white transition-colors">{tech}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

