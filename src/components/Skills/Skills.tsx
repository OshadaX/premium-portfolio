import { motion } from 'framer-motion';

const Skills = () => {
    const technologies = [
        "React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS",
        "Framer Motion", "Three.js", "Docker", "AWS", "PostgreSQL",
        "MongoDB", "GraphQL", "Python", "Git"
    ];

    return (
        <section id="skills" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
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
                        04 — Technologies
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                {/* Technologies List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-2xl md:text-4xl font-sans leading-relaxed text-black/80 max-w-5xl">
                        {technologies.map((tech, i) => (
                            <span key={i} className="inline-block mr-4 mb-2 hover:text-black transition-colors duration-300">
                                {tech}
                                {i !== technologies.length - 1 && (
                                    <span className="ml-4 text-black/20">·</span>
                                )}
                            </span>
                        ))}
                    </p>
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 pt-16 border-t border-black/5"
                >
                    <p className="text-lg md:text-xl font-serif italic text-gray-400 text-center md:text-left">
                        Currently focused on building clean, scalable web experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;