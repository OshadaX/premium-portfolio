import { motion } from 'framer-motion';

const Skills = () => {
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Frontend Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl font-serif mb-8 text-black/90"
                        >
                            Frontend Experience
                        </motion.h3>
                        <div className="space-y-6">
                            {skills.frontend.map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="group flex items-center justify-between border-b border-black/10 pb-4 hover:border-black/40 transition-colors duration-300"
                                >
                                    <span className="text-xl md:text-2xl font-sans text-gray-500 group-hover:text-black transition-colors duration-300">
                                        {tech}
                                    </span>
                                    <motion.span
                                        className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* DevOps Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-serif mb-8 text-black/90"
                        >
                            DevOps Engineering
                        </motion.h3>
                        <div className="space-y-6">
                            {skills.devops.map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                    className="group flex items-center justify-between border-b border-black/10 pb-4 hover:border-black/40 transition-colors duration-300"
                                >
                                    <span className="text-xl md:text-2xl font-sans text-gray-500 group-hover:text-black transition-colors duration-300">
                                        {tech}
                                    </span>
                                    <motion.span
                                        className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;