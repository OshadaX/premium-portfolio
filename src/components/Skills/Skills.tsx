import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState<'frontend' | 'devops'>('frontend');
    const skills = {
        frontend: [
            "React", "TypeScript", "Next.js",
            "Tailwind CSS", "Framer Motion", "Three.js"
        ],
        devops: [
            "Docker", "Kubernetes", "AWS",
            "CI/CD Pipelines", "Terraform", "Linux"
        ]
    };

    return (
        <section id="skills" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc]">
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
                        04 — Technologies
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                {/* Skills Grid */}
                {/* Tabs */}
                <div className="flex justify-start gap-8 mb-12 border-b border-black/10 pb-4">
                    {['frontend', 'devops'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as 'frontend' | 'devops')}
                            className="relative group"
                        >
                            <span className={`text-xl md:text-2xl font-serif capitalize transition-colors duration-300 ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-black/60'}`}>
                                {tab}
                            </span>
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeSkillTab"
                                    className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-black"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills List */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                {skills[activeTab].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        className="group flex items-center justify-between border-b border-black/10 pb-4 hover:border-black/40 transition-colors duration-300"
                                    >
                                        <span className="text-2xl md:text-4xl font-sans text-gray-500 group-hover:text-black transition-colors duration-300">
                                            {tech}
                                        </span>
                                        <motion.span
                                            className="w-3 h-3 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;