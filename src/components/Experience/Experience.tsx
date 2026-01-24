import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
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
                        <span className="text-xs text-gray-400 mt-1 block font-mono">
                            8+ months
                        </span>
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
                            <div className="relative pl-8 md:pl-10 border-l border-black/10">
                                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-300" />
                                <div className="mb-4">
                                    <h4 className="font-serif text-xl text-black">First 6 Months</h4>
                                    <span className="text-sm text-gray-400 font-sans">May 2025 — Oct 2025</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Focused on feature development and bug fixing for the Nexzop web application",
                                        "Implemented UI components and business logic under senior developer guidance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-black/70 font-sans text-base leading-relaxed">
                                            <span className="mr-3 text-black/30 mt-1.5 text-[10px]">●</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Phase 2 (Current) */}
                            <div className="relative pl-8 md:pl-10 border-l border-black/10">
                                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_4px_rgba(0,0,0,0.1)]" />
                                <div className="mb-4">
                                    <h4 className="font-serif text-xl text-black">Leadership & Growth</h4>
                                    <span className="text-sm text-gray-400 font-sans">Nov 2025 — Present</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Took ownership of application modules and handled project-level responsibilities",
                                        "Managed code merges and reviewed pull requests",
                                        "Assigned tasks and coordinated development within the team",
                                        "Contributed to improving development workflow and collaboration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-black/70 font-sans text-base leading-relaxed">
                                            <span className="mr-3 text-black/30 mt-1.5 text-[10px]">●</span>
                                            {item}
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

